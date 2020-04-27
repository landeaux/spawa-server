const router = require('express').Router();
const auth = require('../auth');
const {
  createReview,
  getReviewById,
  getReviews,
  deleteReview,
  getReviewsByOwnerId,
  getReviewsByPitchDecksId,
  updateReview,
} = require('../../controllers/reviewController');
const {
  grantAccess,
  grantOwnerAccess,
} = require('../../controllers/accessController');

// Create review
router.post('/reviews',
  auth.required,
  grantAccess('createOwn', 'review'),
  createReview);

// Get review by ID
router.get('/reviews/:id',
  auth.required,
  grantOwnerAccess('read', 'review'),
  getReviewById);

// Get all reviews
router.get('/reviews',
  auth.required,
  grantAccess('readAny', 'review'),
  getReviews);

// Delete review
router.delete('/reviews/:id',
  auth.required,
  grantOwnerAccess('delete', 'review'),
  deleteReview);

// Get all reviews by Owner ID
router.get('/reviews/owner/:id',
  auth.required,
  grantOwnerAccess('read', 'user'),
  getReviewsByOwnerId);

// Get all reviews for a pitchdeck by pitchdeck ID
router.get('/reviews/pitchdeck/:id',
  auth.required,
  grantOwnerAccess('read', 'pitchdeck'),
  getReviewsByPitchDecksId);

// Update review by ID
router.put('/reviews/:id',
  auth.required,
  grantOwnerAccess('update', 'review'),
  updateReview);

module.exports = router;
