const router = require('express').Router();
const {
  createReview,
  getReviewById,
  getReviews,
  deleteReview,
} = require('../../controllers/reviewController');
const auth = require('../auth');
const { grantAccess, grantOwnerAccess } = require('../../controllers/accessController');

// Create review
router.post('/reviews', auth.required, grantAccess('createOwn', 'review'), createReview);

// Get review by ID
router.get('/reviews/:id', auth.required, grantOwnerAccess('read', 'review'), getReviewById);

// Get all reviews
router.get('/reviews', auth.required, grantAccess('readAny', 'review'), getReviews);

// Delete review
router.delete('/reviews/:id', auth.required, grantOwnerAccess('delete', 'review'), deleteReview);

module.exports = router;
