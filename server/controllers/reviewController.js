const mongoose = require('mongoose');

const Review = mongoose.model('Review');
const PitchDeck = mongoose.model('PitchDeck');
const User = mongoose.model('User');

// create Review
exports.createReview = async (req, res, next) => {
  try {
    const review = new Review();
    review.owner = req.body.review.owner;
    review.pitchDeck = req.body.review.pitchDeck;
    review.reviewerName = req.body.review.reviewerName;
    review.isProblemStatementPresent = req.body.review.isProblemStatementPresent;
    review.isSolutionDescriptionPresent = req.body.review.isSolutionDescriptionPresent;
    review.isMarketCompetitionPresent = req.body.review.isMarketCompetitionPresent;
    review.isBusinessModelPresent = req.body.review.isBusinessModelPresent;
    review.isTeamPresent = req.body.review.isTeamPresent;
    review.isAskPresent = req.body.review.isAskPresent;
    review.isContactSlidePresent = req.body.review.isContactSlidePresent;
    review.problemStatementRating = req.body.review.problemStatementRating;
    review.solutionDescriptionRating = req.body.review.solutionDescriptionRating;
    review.marketCompetitionRating = req.body.review.marketCompetitionRating;
    review.businessModelRating = req.body.review.businessModelRating;
    review.teamRating = req.body.review.teamRating;
    review.askRating = req.body.review.askRating;
    review.additionalComments = req.body.review.additionalComments;
    review.pitchReady = req.body.review.pitchReady;
    const reviewDoc = await review.save();
    const pitchDeckDoc = await PitchDeck.findById(req.body.review.pitchDeck);
    pitchDeckDoc.reviews.push(reviewDoc._id);
    await pitchDeckDoc.save();
    const userDoc = await User.findById(req.body.review.owner);
    userDoc.reviews.push(reviewDoc._id);
    await userDoc.save();
    return res.status(201).json({ review: review.toReviewJSON() });
  } catch (error) {
    return next(error);
  }
};

// Get review by ID
exports.getReviewById = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.sendStatus(400);
    const review = await Review
      .findById(id)
      .populate('owner', ['username', 'email'])
      .populate('pitchDeck')
      .exec();
    return review
      ? res.status(200).json({ review: review.toReviewJSON() }) // review found
      : res.sendStatus(404); // review not found
  } catch (error) {
    return next(error);
  }
};

// Get all reviews
exports.getReviews = async (req, res, next) => {
  try {
    const reviews = await Review.find({});
    res.status(200).json({
      reviews: reviews.map((review) => review.toReviewJSON()),
    });
  } catch (error) {
    next(error);
  }
};

// Delete review
exports.deleteReview = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.sendStatus(400);
    }
    const reviewDoc = await Review.findById(id);
    if (!reviewDoc) {
      return res.status(410).json({
        errors: {
          review: 'does not exist',
        },
      });
    }
    const reviewOwnerDoc = await User.findById(reviewDoc.owner);
    if (!reviewOwnerDoc) {
      return res.status(404).json({
        errors: {
          user: 'does not exist',
        },
      });
    }
    await reviewOwnerDoc.reviews.pull(id);
    await reviewOwnerDoc.save();
    const pitchDeckDoc = await PitchDeck.findById(reviewDoc.pitchDeck);
    if (!pitchDeckDoc) {
      return res.status(404).json({
        errors: {
          pitchDeck: 'does not exist',
        },
      });
    }
    await pitchDeckDoc.reviews.pull(id);
    await pitchDeckDoc.save();
    const STATUS_CODE = await Review.findByIdAndDelete(id)
      ? 204 // No Content
      : 410; // Gone
    return res.sendStatus(STATUS_CODE);
  } catch (error) {
    return next(error);
  }
};

// Get reviews by owner ID
exports.getReviewsByOwnerId = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.sendStatus(400);
    }
    const userDoc = await User.findById(id);
    if (!userDoc) {
      return res.sendStatus(404);
    }
    const reviewDocs = await Review.find({ owner: id });
    return res.status(200).json(reviewDocs);
  } catch (error) {
    return next(error);
  }
};

exports.getReviewsByPitchDecksId = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.sendStatus(400);
    }
    const pitchDoc = await PitchDeck.findById(id);
    if (!pitchDoc) {
      return res.sendStatus(404);
    }
    const reviewDocs = await Review.find({ pitchDeck: id });
    return res.status(200).json(reviewDocs);
  } catch (error) {
    return next(error);
  }
};
