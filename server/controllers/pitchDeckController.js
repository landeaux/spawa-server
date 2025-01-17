const mongoose = require('mongoose');

const PitchDeck = mongoose.model('PitchDeck');
const User = mongoose.model('User');

exports.validateIdAndFindPitchDeck = async (req, res, next) => {
  try {
    // make sure the id is valid
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.status(400).json({
        errors: {
          id: 'is not valid',
        },
      });
      return;
    }

    // find pitch deck
    const pitchDeckDoc = await PitchDeck.findById(req.params.id);
    const pitchDeckExists = Boolean(pitchDeckDoc);

    // make sure it exists
    if (!pitchDeckExists) {
      res.status(401).json({
        errors: {
          pitchDeck: 'does not exist',
        },
      });
      return;
    }

    // pin pitch deck document to request object
    req.pitchDeckDoc = pitchDeckDoc;

    // pass on to next middleware
    next();
  } catch (error) {
    next(error);
  }
};

// Validate the pitch deck owner before attempting to upload/create pitch deck
exports.validatePitchDeckOwner = async (req, res, next) => {
  try {
    // Check that we have a valid ObjectId
    const ownerId = req.payload.id;
    if (!mongoose.Types.ObjectId.isValid(ownerId)) {
      res.status(400).json({ errors: { ownerId: 'is not valid' } });
      return;
    }

    // Check that the owner (User) actually exists in the database
    const ownerDoc = await User.findById(ownerId);
    if (!ownerDoc) {
      res.status(404).json({
        errors: {
          owner: 'does not exist',
        },
      });
      return;
    }

    // Finally, pin the owner doc to the request to use in next middleware
    req.ownerDoc = ownerDoc;

    next();
  } catch (error) {
    next(error);
  }
};

// Stage pitch deck before uploading
exports.stagePitchDeck = async (req, res, next) => {
  try {
    // find existing pitch deck
    const pitchDeckId = req.ownerDoc.pitchDeck;
    const pitchDeckDoc = await PitchDeck.findById(pitchDeckId);
    const pitchDeckExists = Boolean(pitchDeckDoc);

    // if it exists
    if (pitchDeckExists) {
      if (pitchDeckDoc.isLocked()) {
        res.status(401).json({
          errors: {
            pitchDeck: 'is locked',
          },
        });
        return;
      }
      const { status } = pitchDeckDoc;
      if (status === 'NOT_READY' || status === 'NEEDS_REWORK') {
        if (status === 'NEEDS_REWORK') {
          // create new version
          pitchDeckDoc.versions.push({
            s3Key: '',
            filename: '',
          });

          // set state to not ready to allow user to make updates
          pitchDeckDoc.setNotReady();
        }

        // get the active version
        const activeVersion = pitchDeckDoc.getActiveVersion();

        // update the filename
        activeVersion.filename = req.file.originalname;

        // pin pitch deck document to req obj for later use
        req.pitchDeckDoc = pitchDeckDoc;
      } else {
        // The pitch deck is in a locked state (shouldn't get here unless
        // isLocked and state get out of sync...)
        res.status(401).json({
          errors: {
            pitchDeck: 'is locked',
          },
        });
        return;
      }
    } else {
      // create new pitch deck
      const pitchDeck = new PitchDeck({
        owner: req.ownerDoc._id,
      });

      // create new version and set fields
      pitchDeck.versions.push({
        s3Key: '',
        filename: req.file.originalname,
      });
      // pin pitch deck document to req obj for later use
      req.pitchDeckDoc = pitchDeck;
    }

    next();
  } catch (error) {
    next(error);
  }
};

// Save the pitch deck after successful upload
exports.savePitchDeck = async (req, res, next) => {
  try {
    const awsResponse = await req.s3Upload.promise();
    const activeVersion = req.pitchDeckDoc.getActiveVersion();
    activeVersion.s3Key = awsResponse.Key;
    req.pitchDeckDoc.setNotReady();
    const savedPitchDeck = await req.pitchDeckDoc.save();
    req.ownerDoc.pitchDeck = savedPitchDeck._id;
    await req.ownerDoc.save();
    res.status(200).json({
      pitchDeck: savedPitchDeck.toPitchDeckJSON(),
    });
  } catch (error) {
    next(error);
  }
};

// Get all active pitch decks
exports.getActivePitchDecks = async (req, res, next) => {
  try {
    const allPitchDecks = await PitchDeck.find()
      .populate('owner', ['company'])
      .exec();
    const activePitchDecks = allPitchDecks
      .filter((p) => p.isUnderReview())
      .map((p) => ({
        ...p.toPitchDeckJSON(),
        company: p.owner.company,
        owner: p.owner._id,
      }));
    res.status(200).json({
      pitchDecks: activePitchDecks,
    });
  } catch (error) {
    next(error);
  }
};

// Get PitchDeck by ID
exports.getPitchDeckById = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ errors: { id: 'is not valid' } });
    }
    const pitchDeck = await PitchDeck
      .findById(id)
      .populate('owner', ['username', 'email', 'company'])
      .populate('reviews')
      .exec();
    return pitchDeck
      ? res.status(200).json({ pitchDeck: pitchDeck.toPitchDeckJSON() }) // pitch deck found
      : res.status(404).json({ errors: { pitchDeck: 'does not exist' } }); // pitch deck not found
  } catch (error) {
    return next(error);
  }
};

// Get PitchDeck AWS S3 key for download
exports.getPitchDeckS3Key = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ errors: { id: 'is not valid' } });
    }
    const pitchDeck = await PitchDeck.findById(id);
    if (!pitchDeck) {
      return res.status(404).json({ errors: { pitchDeck: 'does not exist' } }); // pitch deck not found
    }
    const { s3Key, filename } = pitchDeck.getActiveVersion();
    req.params.key = s3Key;
    req.params.filename = filename;
    return next();
  } catch (error) {
    return next(error);
  }
};

// Get all pitch decks
exports.getPitchDecks = async (req, res, next) => {
  try {
    const allPitchDecks = await PitchDeck.find()
      .populate('owner', ['company'])
      .exec();
    const activePitchDecks = allPitchDecks
      .map((p) => ({
        ...p.toPitchDeckJSON(),
        company: p.owner.company,
        owner: p.owner._id,
      }));
    res.status(200).json({
      pitchDecks: activePitchDecks,
    });
  } catch (error) {
    next(error);
  }
};

// Submit a pitch deck for review (i.e. set status to UNDER_REVIEW)
exports.submitForReview = async (req, res, next) => {
  try {
    // find existing pitch deck
    const pitchDeckId = req.ownerDoc.pitchDeck;
    const pitchDeckDoc = await PitchDeck.findById(pitchDeckId);
    const pitchDeckExists = Boolean(pitchDeckDoc);

    // make sure pitch deck exists
    if (!pitchDeckExists) {
      res.status(401).json({
        errors: {
          pitchDeck: 'does not exist',
        },
      });
      return;
    }

    // make sure user is allowed to change to this status
    if (!pitchDeckDoc.isNotReady() && !pitchDeckDoc.isNeedsRework()) {
      res.status(401).json({
        errors: {
          user: 'is not allowed to perform this action',
        },
      });
      return;
    }

    // update pitch deck
    pitchDeckDoc.setUnderReview();
    pitchDeckDoc.decrementAttemptsLeft();

    // save pitch deck
    const savedPitchDeckDoc = await pitchDeckDoc.save();

    // send back saved pitch deck with 200 status
    res.status(200).json({
      pitchDeck: savedPitchDeckDoc.toPitchDeckJSON(),
    });
  } catch (error) {
    next(error);
  }
};

// Mark a pitch deck as accepted
exports.acceptPitchDeck = async (req, res, next) => {
  try {
    // extract pitchDeckDoc from request object
    const { pitchDeckDoc } = req;

    // make sure we are in the proper state
    if (!pitchDeckDoc.isUnderReview()) {
      res.status(400).json({
        errors: {
          pitchDeck: 'is not in proper state to make this transition',
        },
      });
      return;
    }

    // update pitch deck
    pitchDeckDoc.setAccepted();
    pitchDeckDoc.attemptsLeft = 0;

    // get the active version so we can add admin comments
    const activeVersion = pitchDeckDoc.getActiveVersion();
    activeVersion.adminComments = req.body.adminComments || '';

    // save pitch deck
    const savedPitchDeckDoc = await pitchDeckDoc.save();

    // send back saved pitch deck with 200 status
    res.status(200).json({
      pitchDeck: savedPitchDeckDoc.toPitchDeckJSON(),
    });
  } catch (error) {
    next(error);
  }
};

// Mark a pitch deck as rejected
exports.rejectPitchDeck = async (req, res, next) => {
  try {
    // extract pitchDeckDoc from request object
    const { pitchDeckDoc } = req;

    // make sure we are in the proper state
    if (!pitchDeckDoc.isUnderReview()) {
      res.status(400).json({
        errors: {
          pitchDeck: 'is not in proper state to make this transition',
        },
      });
      return;
    }

    // update pitch deck
    pitchDeckDoc.setRejected();
    pitchDeckDoc.attemptsLeft = 0;

    // get the active version so we can add admin comments
    const activeVersion = pitchDeckDoc.getActiveVersion();
    activeVersion.adminComments = req.body.adminComments || '';

    // save pitch deck
    const savedPitchDeckDoc = await pitchDeckDoc.save();

    // send back saved pitch deck with 200 status
    res.status(200).json({
      pitchDeck: savedPitchDeckDoc.toPitchDeckJSON(),
    });
  } catch (error) {
    next(error);
  }
};

// Mark a pitch deck as needing re-work
exports.reworkPitchDeck = async (req, res, next) => {
  try {
    // extract pitchDeckDoc from request object
    const { pitchDeckDoc } = req;

    // make sure we are in the proper state
    if (!pitchDeckDoc.isUnderReview()) {
      res.status(400).json({
        errors: {
          pitchDeck: 'is not in proper state to make this transition',
        },
      });
      return;
    }

    // if the user still has attempts left, set state NEEDS_REWORK
    // otherwise, set REJECT
    if (pitchDeckDoc.attemptsLeft > 0) {
      pitchDeckDoc.setNeedsRework();
    } else {
      pitchDeckDoc.setRejected();
    }

    // get the active version so we can add admin comments
    const activeVersion = pitchDeckDoc.getActiveVersion();
    activeVersion.adminComments = req.body.adminComments || '';

    // save pitch deck
    const savedPitchDeckDoc = await pitchDeckDoc.save();

    // send back saved pitch deck with 200 status
    res.status(200).json({
      pitchDeck: savedPitchDeckDoc.toPitchDeckJSON(),
    });
  } catch (error) {
    next(error);
  }
};
