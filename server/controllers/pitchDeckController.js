const mongoose = require('mongoose');

const PitchDeck = mongoose.model('PitchDeck');
const User = mongoose.model('User');

// Validate the pitch deck owner before attempting to upload/create pitch deck
exports.validatePitchDeckOwner = async (req, res, next) => {
  try {
    // Check that we have a valid ObjectId
    const ownerId = req.payload.id;
    if (!mongoose.Types.ObjectId.isValid(ownerId)) {
      return res.status(400).json({ errors: { ownerId: 'is not valid' } });
    }

    // Check that the owner (User) actually exists in the database
    const ownerDoc = await User.findById(ownerId);
    if (!ownerDoc) {
      return res.status(404).json({
        errors: {
          owner: 'does not exist',
        },
      });
    }

    // Check the grace period updating pitch deck has not passed
    if (ownerDoc.isPitchDeckLocked()) {
      return res.status(401).json({
        error: 'You don\'t have enough permission to perform this action',
      });
    }

    // Finally, pin the owner doc to the request to use in next middleware
    req.ownerDoc = ownerDoc;

    return next();
  } catch (error) {
    return next(error);
  }
};

// Create Pitch Deck
exports.createPitchDeck = async (req, res, next) => {
  try {
    const pitchDeck = new PitchDeck();
    pitchDeck.s3Key = req.awsResponse.Key;
    pitchDeck.filename = req.file.originalname;
    pitchDeck.owner = req.ownerDoc.id;
    const pitchDeckDoc = await pitchDeck.save();
    req.ownerDoc.pitchDeck = pitchDeckDoc._id;
    req.ownerDoc.setPitchDeckLockDate();
    await req.ownerDoc.save();
    return res.status(201).json({ pitchDeck: pitchDeck.toPitchDeckJSON() });
  } catch (error) {
    return next(error);
  }
};

// Get all active pitch decks
exports.getActivePitchDecks = async (req, res, next) => {
  try {
    const founders = await User.find({ role: 'founder' })
      .populate('pitchDeck')
      .lean()
      .exec();
    if (!founders) {
      return res.status(404).json({
        errors: {
          founder: 'does not exist',
        },
      });
    }
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
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ errors: { id: 'is not valid' } });
    }
    const pitchDeck = await PitchDeck
      .findById(id)
      .populate('owner', ['username', 'email'])
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
