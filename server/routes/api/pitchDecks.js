const router = require('express').Router();
const auth = require('../auth');
const { grantAccess } = require('../../controllers/accessController');

const {
  createPitchDeck,
  getPitchDeckById,
  getPitchDecks,
} = require('../../controllers/pitchDeckController');

// Create pitch deck
router.post('/pitchDecks', auth.required, grantAccess('createOwn', 'pitchdeck'), createPitchDeck);

// Get pitch deck by ID
router.get('/pitchDecks/:id', auth.required, grantAccess('readAny', 'pitchdeck'), getPitchDeckById);

// Get all pitch decks
router.get('/pitchDecks', auth.required, grantAccess('readAny', 'pitchdeck'), getPitchDecks);

module.exports = router;
