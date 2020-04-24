const mongoose = require('mongoose');

/**
 * Statuses
 */
const UNDER_REVIEW = 'UNDER_REVIEW';
const ACCEPTED = 'ACCEPTED';
const REJECTED = 'REJECTED';

const PitchDeckSchema = new mongoose.Schema({
  s3Key: {
    required: true,
    type: String,
  },
  filename: {
    required: true,
    type: String,
  },
  status: {
    type: String,
    default: UNDER_REVIEW,
    enum: [
      UNDER_REVIEW,
      ACCEPTED,
      REJECTED,
    ],
  },
  reviews: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Review',
    default: [],
  }],
  owner: {
    ref: 'User',
    required: true,
    type: mongoose.Schema.Types.ObjectId,
  },
}, { timestamps: true }); // this option creates createdAt and updatedAt fields

PitchDeckSchema.methods.toPitchDeckJSON = function toPitchDeckJSON() {
  return {
    id: this._id,
    s3Key: this.s3Key,
    filename: this.filename,
    status: this.status,
    owner: this.owner,
    reviews: this.reviews,
    createdAt: this.createdAt,
    updatedAt: this.updatedAt,
  };
};

PitchDeckSchema.methods.setAccepted = function setAccepted() {
  this.status = ACCEPTED;
};

PitchDeckSchema.methods.setRejected = function setRejected() {
  this.status = REJECTED;
};

// register the schema within mongoose
mongoose.model('PitchDeck', PitchDeckSchema);
