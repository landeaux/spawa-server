const router = require('express').Router();
const auth = require('../auth');
const upload = require('../../config/multer.config');
const awsWorker = require('../../controllers/aws.controller.js');
const {
  grantAccess,
  grantOwnerAccess,
} = require('../../controllers/accessController');
const {
  validateIdAndFindPitchDeck,
  validatePitchDeckOwner,
  stagePitchDeck,
  savePitchDeck,
  getActivePitchDecks,
  getPitchDeckById,
  getPitchDeckS3Key,
  getPitchDecks,
  submitForReview,
  acceptPitchDeck,
  rejectPitchDeck,
} = require('../../controllers/pitchDeckController');

// Get all active pitch decks
router.get('/pitchDecks/active',
  auth.required,
  grantAccess('readAny', 'pitchdeck'),
  getActivePitchDecks);

// Get pitch deck by ID
router.get('/pitchDecks/:id',
  auth.required,
  grantOwnerAccess('read', 'pitchdeck'),
  getPitchDeckById);

// Download pitch deck by pitch deck id
router.get('/pitchDecks/:id/download',
  auth.required,
  grantOwnerAccess('read', 'pitchdeck'),
  getPitchDeckS3Key,
  awsWorker.doDownload);

// Get all pitch decks
router.get('/pitchDecks',
  auth.required,
  grantAccess('readAny', 'pitchdeck'),
  getPitchDecks);

// Upload pitch deck
router.put('/pitchDecks',
  auth.required,
  grantAccess('createOwn', 'pitchdeck'),
  validatePitchDeckOwner,
  upload.single('pitchdeck'),
  stagePitchDeck,
  awsWorker.doUpload,
  savePitchDeck);

// Submit a pitch deck for review (i.e. set status to UNDER_REVIEW)
router.put('/pitchDecks/submit',
  auth.required,
  grantAccess('updateOwn', 'pitchdeck'),
  validatePitchDeckOwner,
  submitForReview);

// Mark a pitch deck as accepted
router.put('/pitchDecks/accept/:id',
  auth.required,
  grantAccess('updateAny', 'pitchdeck'),
  validateIdAndFindPitchDeck,
  acceptPitchDeck);

// Mark a pitch deck as rejected
router.put('/pitchDecks/reject/:id',
  auth.required,
  grantAccess('updateAny', 'pitchdeck'),
  validateIdAndFindPitchDeck,
  rejectPitchDeck);

module.exports = router;
