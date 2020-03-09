const mongoose = require('mongoose');

const PitchDeck = mongoose.model('PitchDeck');

// create Pitch Deck
exports.createPitchDeck = async (req, res, next) => {
  try {
    const pitchDeck = new PitchDeck();
    pitchDeck.url = req.body.pitchDeck.url;
    pitchDeck.owner = req.body.pitchDeck.owner;
    pitchDeck.save();
    res.status(201).json({ pitchDeck: pitchDeck.toPitchDeckJSON() });
  } catch (error) {
    console.log('error');
    next(error);
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
    // eslint-disable-next-line max-len
    res.status(200).json({
      pitchDecks: pitchDecks.map((pitchDeck) => pitchDeck.toPitchDeckJSON()),
    });
  } catch (error) {
    next(error);
  }
};
