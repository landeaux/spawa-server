const mongoose = require('mongoose');
const router = require('express').Router();
const {
  createReview,
  getReviewById,
  getReviews,
  deleteReview,
} = require('../../controllers/reviewController');
const auth = require('../auth');
const { grantAccess } = require('../../controllers/accessController');
const { roles } = require('../../roles');

const User = mongoose.model('User');

const grantOwnerAccess = (action, resource) => async (req, res, next) => {
  try {
    const userId = req.payload.id;
    if (!mongoose.Types.ObjectId.isValid(userId)) return res.sendStatus(400);
    const user = await User.findById(userId);
    if (!user) return req.sendStatus(400);
    const { reviews } = user;
    const isOwner = reviews.includes(mongoose.Types.ObjectId(req.params.id));
    const possession = isOwner
      ? 'Own'
      : 'Any';
    const permission = roles.can(req.payload.role)[`${action}${possession}`](resource);
    if (!permission.granted) {
      return res.status(401).json({
        error: 'You don\'t have enough permission to perform this action',
      });
    }
    return next();
  } catch (error) {
    return next(error);
  }
};

// Create review
router.post('/reviews', auth.required, grantAccess('createOwn', 'review'), createReview);

// Get review by ID
router.get('/reviews/:id', auth.required, grantOwnerAccess('read', 'review'), getReviewById);

// Get all reviews
router.get('/reviews', auth.required, grantAccess('readAny', 'review'), getReviews);

// Delete review
router.delete('/reviews/:id', auth.required, grantOwnerAccess('delete', 'review'), deleteReview);

module.exports = router;
