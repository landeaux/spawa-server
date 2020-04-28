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
const DEFAULT_GRACE_PERIOD = 1;

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
    default: () => {
      const today = new Date();
      const exp = new Date(today);
      exp.setDate(today.getDate() + DEFAULT_GRACE_PERIOD);
      return exp;
    },
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
    attemptsLeft: this.attemptsLeft,
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

/**
 * Sets the state to NOT_READY
 */
PitchDeckSchema.methods.setNotReady = function setNotReady() {
  this.status = NOT_READY;
};

/**
 * Sets the state to UNDER_REVIEW
 */
PitchDeckSchema.methods.setUnderReview = function setUnderReview() {
  this.status = UNDER_REVIEW;
};

/**
 * Sets the state to NEEDS_REWORK
 */
PitchDeckSchema.methods.setNeedsRework = function setNeedsRework() {
  this.status = NEEDS_REWORK;
};

/**
 * Sets the state to ACCEPTED
 */
PitchDeckSchema.methods.setAccepted = function setAccepted() {
  this.status = ACCEPTED;
};

/**
 * Sets the state to REJECTED
 */
PitchDeckSchema.methods.setRejected = function setRejected() {
  this.status = REJECTED;
};

/**
 * Decrements the number of attempts left
 * @returns {boolean} true if successful, false otherwise
 */
PitchDeckSchema.methods.decrementAttemptsLeft = function decrementAttemptsLeft() {
  if (this.attemptsLeft > 0) {
    this.attemptsLeft -= 1;
    return true;
  }
  return false;
};

/**
 * Checks to see if the pitch deck is locked for new uploads. True if
 * current date is past the lock date or in a non-editable state or zero
 * attempts to resubmit are left.
 * @returns {boolean}
 */
PitchDeckSchema.methods.isLocked = function isLocked() {
  return (this.lockDate && this.lockDate < Date.now())
      || (this.isUnderReview() || this.isAccepted() || this.isRejected())
      || (this.attemptsLeft === 0);
};

/**
 * Checks to see if the pitch deck is not ready for review
 * @returns {boolean}
 */
PitchDeckSchema.methods.isNotReady = function isNotReady() {
  return this.status === NOT_READY;
};

/**
 * Checks to see if the pitch deck is under review (i.e. active)
 * @returns {boolean}
 */
PitchDeckSchema.methods.isUnderReview = function isUnderReview() {
  return this.status === UNDER_REVIEW;
};

/**
 * Checks to see if the pitch deck needs rework
 * @returns {boolean}
 */
PitchDeckSchema.methods.isNeedsRework = function isNeedsRework() {
  return this.status === NEEDS_REWORK;
};

/**
 * Checks to see if the pitch deck is accepted
 * @returns {boolean}
 */
PitchDeckSchema.methods.isAccepted = function isAccepted() {
  return this.status === ACCEPTED;
};

/**
 * Checks to see if the pitch deck is rejected
 * @returns {boolean}
 */
PitchDeckSchema.methods.isRejected = function isRejected() {
  return this.status === REJECTED;
};

/**
 * Resets the lock date to the given grace period (in days). The lock date
 * indicates the date after which the user is blocked from re-uploading
 * their pitch deck.
 */
PitchDeckSchema.methods.setLockDate = function setLockDate(gracePeriod = DEFAULT_GRACE_PERIOD) {
  const today = new Date();
  const exp = new Date(today);
  exp.setDate(today.getDate() + gracePeriod);
  this.lockDate = exp;
};

// register the schema within mongoose
mongoose.model('PitchDeck', PitchDeckSchema);
