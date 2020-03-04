const router = require('express').Router();

const {
  createPitchDeck,
  getPitchDeckById,
  getPitchDecks,
} = require('../../controllers/pitchDeckController');

// Create pitch deck
router.post('/pitchDecks', createPitchDeck);

// Get pitch deck by ID
router.get('/pitchDecks/:id', getPitchDeckById);

// Get all pitch decks
router.get('/pitchDecks', getPitchDecks);

module.exports = router;
