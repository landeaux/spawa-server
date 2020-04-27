const mongoose = require('mongoose');

const PitchDeck = mongoose.model('PitchDeck');
const User = mongoose.model('User');

// Validate the pitch deck owner before attempting to upload/create pitch deck
exports.validatePitchDeckOwner = async (req, res, next) => {
  try {
    // Check that we have a valid ObjectId
    const ownerId = req.payload.id;
    if (!mongoose.Types.ObjectId.isValid(ownerId)) {
      res.sendStatus(400);
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

          // set a new lock date
          pitchDeckDoc.setLockDate();
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
    const founders = await User.find({ role: 'founder' })
      .populate('pitchDeck')
      .lean()
      .exec();
    if (!founders) return res.sendStatus(404);
    const pitchDecks = founders
      .filter((founder) => founder.pitchDeck && !founder.pitchDeck.accepted)
      .map((founder) => ({
        ...founder.pitchDeck,
        company: founder.company,
      }));
    return res.status(200).json({ pitchDecks });
  } catch (error) {
    return next(error);
  }
};

// Get PitchDeck by ID
exports.getPitchDeckById = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.sendStatus(400);
    const pitchDeck = await PitchDeck
      .findById(id)
      .populate('owner', ['username', 'email'])
      .populate('reviews')
      .exec();
    return pitchDeck
      ? res.status(200).json({ pitchDeck: pitchDeck.toPitchDeckJSON() }) // pitch deck found
      : res.sendStatus(404); // pitch deck not found
  } catch (error) {
    return next(error);
  }
};

// Get PitchDeck AWS S3 key for download
exports.getPitchDeckS3Key = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.sendStatus(400);
    const pitchDeck = await PitchDeck.findById(id);
    if (!pitchDeck) {
      return res.sendStatus(404); // pitch deck not found
    }
    req.params.key = pitchDeck.s3Key;
    req.params.filename = pitchDeck.filename;
    return next();
  } catch (error) {
    return next(error);
  }
};

// Get all pitch decks
exports.getPitchDecks = async (req, res, next) => {
  try {
    const pitchDecks = await PitchDeck.find({});
    res.status(200).json({
      pitchDecks: pitchDecks.map((pitchDeck) => pitchDeck.toPitchDeckJSON()),
    });
  } catch (error) {
    next(error);
  }
};
