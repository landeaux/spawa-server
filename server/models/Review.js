const mongoose = require('mongoose');

const Rating = {
  type: Number,
  min: 0,
  max: 4,
  validate: {
    validator: Number.isInteger,
    message(props) {
      return `${props.value} must be between 0 and 4`;
    },
  },
};

const ReviewSchema = new mongoose.Schema({
  owner: {
    ref: 'User',
    required: true,
    type: mongoose.Schema.Types.ObjectId,
  },
  pitchDeck: {
    ref: 'PitchDeck',
    required: true,
    type: mongoose.Schema.Types.ObjectId,
  },
  reviewerName: {
    required: true,
    type: String,
  },
  isProblemStatementPresent: {
    required: true,
    type: Boolean,
  },
  isSolutionDescriptionPresent: {
    required: true,
    type: Boolean,
  },
  isMarketCompetitionPresent: {
    required: true,
    type: Boolean,
  },
  isBusinessModelPresent: {
    required: true,
    type: Boolean,
  },
  isTeamPresent: {
    required: true,
    type: Boolean,
  },
  isAskPresent: {
    required: true,
    type: Boolean,
  },
  isContactSlidePresent: {
    required: true,
    type: Boolean,
  },
  problemStatementRating: { ...Rating },
  solutionDescriptionRating: { ...Rating },
  marketCompetitionRating: { ...Rating },
  businessModelRating: { ...Rating },
  teamRating: { ...Rating },
  askRating: { ...Rating },
  additionalComments: {
    required: true,
    type: String,
  },
  pitchReady: {
    required: true,
    type: Boolean,
  },
}, { timestamps: true }); // this option creates createdAt and updatedAt fields

// register the schema within mongoose
mongoose.model('Review', ReviewSchema);
