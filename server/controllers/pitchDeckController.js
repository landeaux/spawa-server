const mongoose = require('mongoose');

const PitchDeck = mongoose.model('PitchDeck');
const User = mongoose.model('User');

// create Pitch Deck
exports.createPitchDeck = async (req, res, next) => {
  try {
    const ownerId = req.payload.id;
    if (!mongoose.Types.ObjectId.isValid(ownerId)) return res.sendStatus(400);
    const ownerDoc = await User.findById(ownerId);
    if (!ownerDoc) return res.status(404).json({ errors: { owner: 'does not exist' } });
    const pitchDeck = new PitchDeck();
    pitchDeck.url = req.body.pitchDeck.url;
    pitchDeck.owner = ownerId;
    const pitchDeckDoc = await pitchDeck.save();
    ownerDoc.pitchDeck = pitchDeckDoc._id;
    await ownerDoc.save();
    return res.status(201).json({ pitchDeck: pitchDeck.toPitchDeckJSON() });
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
