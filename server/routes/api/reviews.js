const router = require('express').Router();

const {
  createReview,
  getReviewById,
  getReviews,
  deleteReview,
} = require('../../controllers/reviewController');

// Create review
router.post('/reviews', createReview);

// Get review by ID
router.get('/reviews/:id', getReviewById);

// Get all reviews
router.get('/reviews', getReviews);

// Delete review
router.delete('/reviews/:id', deleteReview);

module.exports = router;
