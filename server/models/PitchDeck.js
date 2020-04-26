const mongoose = require('mongoose');

const PitchDeckVersionSchema = new mongoose.Schema({
  s3Key: {
    required: true,
    type: String,
  },
  filename: {
    required: true,
    type: String,
  },
  reviews: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Review',
    default: [],
  }],
}, { timestamps: true }); // this option creates createdAt and updatedAt fields

/**
 * Statuses
 */
const NOT_READY = 'NOT_READY';
const UNDER_REVIEW = 'UNDER_REVIEW';
const NEEDS_REWORK = 'NEEDS_REWORK';
const ACCEPTED = 'ACCEPTED';
const REJECTED = 'REJECTED';

/**
 * The default total number of attempts allowed for a Founder to submit a
 * pitch deck
 */
const NUM_ATTEMPTS_ALLOWED = 3;

/**
 * The number of days to allow for resubmitting a pitch deck before it is locked
 */
const GRACE_PERIOD = 1;

const PitchDeckSchema = new mongoose.Schema({
  owner: {
    ref: 'User',
    required: true,
    type: mongoose.Schema.Types.ObjectId,
  },
  status: {
    type: String,
    default: NOT_READY,
    enum: [
      NOT_READY,
      UNDER_REVIEW,
      NEEDS_REWORK,
      ACCEPTED,
      REJECTED,
    ],
  },
  activeVersionId: {
    type: mongoose.Schema.Types.ObjectId,
  },
  versions: [PitchDeckVersionSchema],
  attemptsLeft: {
    type: Number,
    required: false,
    default: NUM_ATTEMPTS_ALLOWED,
    validator(value) {
      return Number.isInteger(value) && value >= 0;
    },
    message(props) {
      return `${props.value} must be a non-negative integer.`;
    },
  },
  lockDate: {
    type: Date,
    required: false,
  },
}, { timestamps: true }); // this option creates createdAt and updatedAt fields

PitchDeckSchema.methods.toPitchDeckJSON = function toPitchDeckJSON() {
  const {
    s3Key,
    filename,
    reviews,
  } = this.getActiveVersion();

  return {
    id: this._id,
    status: this.status,
    owner: this.owner,
    lockDate: this.lockDate,
    isLocked: this.isLocked(),
    createdAt: this.createdAt,
    updatedAt: this.updatedAt,
    s3Key,
    filename,
    reviews,
  };
};

/**
 * Gets the active version -- always the last version in the array.
 */
PitchDeckSchema.methods.getActiveVersion = function getActiveVersion() {
  return this.versions.slice(-1)[0]; // get the last version in the array
};

PitchDeckSchema.methods.setNotReady = function setNotReady() {
  this.status = NOT_READY;
};

PitchDeckSchema.methods.setUnderReview = function setUnderReview() {
  this.status = UNDER_REVIEW;
};

PitchDeckSchema.methods.setNeedsRework = function setNeedsRework() {
  this.status = NEEDS_REWORK;
};

PitchDeckSchema.methods.setAccepted = function setAccepted() {
  this.status = ACCEPTED;
};

PitchDeckSchema.methods.setRejected = function setRejected() {
  this.status = REJECTED;
};

PitchDeckSchema.methods.decrementAttemptsLeft = function decrementAttemptsLeft() {
  if (this.attemptsLeft > 0) {
    this.attemptsLeft -= 1;
    return true;
  }
  return false;
};

PitchDeckSchema.methods.isLocked = function isLocked() {
  return this.lockDate && this.lockDate < Date.now();
};

PitchDeckSchema.methods.setLockDate = function setLockDate() {
  const today = new Date();
  const exp = new Date(today);
  exp.setDate(today.getDate() + GRACE_PERIOD);
  this.lockDate = exp;
};

// register the schema within mongoose
mongoose.model('PitchDeck', PitchDeckSchema);

// test
// const PitchDeckModel = mongoose.model('PitchDeck');
// const pitchDeck = new PitchDeckModel();
// const { ObjectId } = mongoose.Types;
// pitchDeck.owner = new ObjectId();
// pitchDeck.versions.push({
//   s3Key: 'blah_someuuid2.pdf',
//   filename: 'blah2.pdf',
// });
// pitchDeck.setLockDate();
// console.log(pitchDeck.toPitchDeckJSON());

// pitchDeck.save((err, pitchDeckDoc) => {
//   if (err) return console.error(err);
//   console.log('saved!');
//   return console.log(pitchDeckDoc.toPitchDeckJSON());
// });
