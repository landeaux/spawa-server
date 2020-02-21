const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const { secret } = require('../config');

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
      'submit_eapp', // initial state
      'watch_pitch_video',
      'take_pitch_quiz',
      'submit_pitch_deck',
      'pitch_deck_review',
      'book_pitch_date',
      'pitch_accepted', // final state
      'pitch_cancelled', // final state
    ],
  },
  reviews: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Review',
    default: [],
  }],
  bio: String,
  image: String,
  hash: String,
  salt: String,
}, { timestamps: true }); // this option creates createdAt and updatedAt fields

// validate uniqueness of fields with "unique: true" option
UserSchema.plugin(uniqueValidator, { message: 'is already taken.' });

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
  return {
    bio: this.bio,
    email: this.email,
    id: this._id,
    image: this.image,
    role: this.role,
    token: this.generateJWT(),
    username: this.username,
    state: this.state,
  };
};

UserSchema.methods.toUserJSONFor = function toUserJSONFor() {
  return {
    email: this.email,
    id: this._id,
    role: this.role,
    username: this.username,
    state: this.state,
  };
};

UserSchema.methods.toProfileJSONFor = function toProfileJSONFor() {
  return {
    bio: this.bio,
    id: this._id,
    image: this.image || 'https://static.productionready.io/images/smiley-cyrus.jpg',
    role: this.role,
    username: this.username,
  };
};

// register the schema within mongoose
mongoose.model('User', UserSchema);
