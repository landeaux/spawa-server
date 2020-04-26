const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const { secret } = require('../config');
const hubspot = require('../hubspot');

/**
 * User states
 */
const SUBMIT_EAPP = 'submit_eapp';
const WATCH_PITCH_VIDEO = 'watch_pitch_video';
const TAKE_PITCH_QUIZ = 'take_pitch_quiz';
const SUBMIT_PITCH_DECK = 'submit_pitch_deck';
const PITCH_DECK_REVIEW = 'pitch_deck_review';
const BOOK_PITCH_DATE = 'book_pitch_date';
const PITCH_ACCEPTED = 'pitch_accepted';
const PITCH_CANCELLED = 'pitch_cancelled';

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    lowercase: true,
    unique: true,
    required: [true, 'can\'t be blank'],
    match: [/^[a-zA-Z0-9]+$/, 'is invalid'],
    index: true, // optimize queries that use this field
  },
  email: {
    type: String,
    lowercase: true,
    unique: true,
    required: [true, 'can\'t be blank'],
    match: [/\S+@\S+\.\S+/, 'is invalid'],
    index: true, // optimize queries that use this field
  },
  role: {
    type: String,
    default: 'founder',
    enum: [
      'founder',
      'reviewer',
      'evaluator',
      'admin',
    ],
  },
  active: {
    type: Boolean,
    default: true,
  },
  state: {
    type: String,
    default: 'submit_eapp',
    enum: [
      SUBMIT_EAPP, // initial state
      WATCH_PITCH_VIDEO,
      TAKE_PITCH_QUIZ,
      SUBMIT_PITCH_DECK,
      PITCH_DECK_REVIEW,
      BOOK_PITCH_DATE,
      PITCH_ACCEPTED, // final state
      PITCH_CANCELLED, // final state
    ],
  },
  reviews: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Review',
    default: [],
  }],
  pitchDeck: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'PitchDeck',
    required: false,
  },
  hubspotVid: {
    type: Number,
    required: false,
    validate: {
      validator(value) {
        return Number.isInteger(value) && value >= 0;
      },
      message(props) {
        return `${props.value} must be a non-negative integer.`;
      },
    },
  },
  company: {
    type: String,
    required: [true, 'can\'t be blank'],
  },
  hash: String,
  salt: String,
}, { timestamps: true }); // this option creates createdAt and updatedAt fields

// validate uniqueness of fields with "unique: true" option
UserSchema.plugin(uniqueValidator, { message: 'is already taken.' });

// Synchronizes the user's email with their hubspot contact's email prop
UserSchema.methods.syncEmail = async function syncEmail() {
  await hubspot.contacts.update(this.hubspotVid, {
    properties: [
      {
        property: 'email',
        value: this.email,
      },
    ],
  });
};

// Synchronizes the user's company with their hubspot contact's company prop
UserSchema.methods.syncCompany = async function syncCompany() {
  await hubspot.contacts.update(this.hubspotVid, {
    properties: [
      {
        property: 'company',
        value: this.company,
      },
    ],
  });
};

UserSchema.methods.setPassword = function setPassword(password) {
  this.salt = crypto.randomBytes(16).toString('hex');
  this.hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
};

UserSchema.methods.validPassword = function validPassword(password) {
  const hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
  return this.hash === hash;
};

// generate a json web token to pass to the front-end for user authentication
UserSchema.methods.generateJWT = function generateJWT() {
  const today = new Date();
  const exp = new Date(today);
  exp.setDate(today.getDate() + 60); // set expiration for 60 days in the future

  return jwt.sign({
    exp: parseInt(exp.getTime() / 1000, 10),
    id: this._id,
    role: this.role,
    username: this.username,
  }, secret);
};

// get JSON representation of user to pass to front-end during authentication
UserSchema.methods.toAuthJSON = function toAuthJSON() {
  const user = {
    company: this.company,
    createdAt: this.createdAt,
    email: this.email,
    hubspotVid: this.hubspotVid,
    id: this._id,
    pitchDeck: this.pitchDeck,
    reviews: this.reviews,
    role: this.role,
    state: this.state,
    token: this.generateJWT(),
    updatedAt: this.updatedAt,
    username: this.username,
  };
  if (user.role === 'founder') delete user.reviews;
  if (user.role !== 'founder') delete user.pitchDeck;
  return user;
};

UserSchema.methods.toUserJSONFor = function toUserJSONFor() {
  const user = {
    active: this.active,
    company: this.company,
    createdAt: this.createdAt,
    email: this.email,
    hubspotVid: this.hubspotVid,
    id: this._id,
    pitchDeck: this.pitchDeck,
    reviews: this.reviews,
    role: this.role,
    state: this.state,
    updatedAt: this.updatedAt,
    username: this.username,
  };
  if (user.role === 'founder') delete user.reviews;
  if (user.role !== 'founder') delete user.pitchDeck;
  return user;
};

// register the schema within mongoose
mongoose.model('User', UserSchema);
