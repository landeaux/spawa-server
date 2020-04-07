const router = require('express').Router();
const auth = require('../auth');
const upload = require('../../config/multer.config');
const awsWorker = require('../../controllers/aws.controller.js');
const {
  grantAccess,
  grantOwnerAccess,
} = require('../../controllers/accessController');
const {
  createPitchDeck,
  getPitchDeckById,
  getPitchDecks,
} = require('../../controllers/pitchDeckController');

// Create pitch deck
router.post('/pitchDecks', auth.required, grantAccess('createOwn', 'pitchdeck'), createPitchDeck);

// Get pitch deck by ID
router.get('/pitchDecks/:id', auth.required, grantOwnerAccess('read', 'pitchdeck'), getPitchDeckById);

// Get all pitch decks
router.get('/pitchDecks', auth.required, grantAccess('readAny', 'pitchdeck'), getPitchDecks);

router.post('/pitchDecks/upload', upload.single('file'), awsWorker.doUpload);

module.exports = router;
