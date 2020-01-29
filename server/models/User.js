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
    enum: ['founder', 'reviewer', 'evaluator', 'admin'],
  },
  bio: String,
  image: String,
  hash: String,
  salt: String,
  events: {
    type: [Object],
    default: [],
  },
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
    // eslint-disable-next-line no-underscore-dangle
    id: this._id,
    username: this.username,
    role: this.role,
    exp: parseInt(exp.getTime() / 1000, 10),
  }, secret);
};

// get JSON representation of user to pass to front-end during authentication
UserSchema.methods.toAuthJSON = function toAuthJSON() {
  return {
    username: this.username,
    email: this.email,
    role: this.role,
    token: this.generateJWT(),
    bio: this.bio,
    image: this.image,
  };
};

UserSchema.methods.toUserJSONFor = function toUserJSONFor() {
  return {
    username: this.username,
    email: this.email,
    role: this.role,
  };
};

UserSchema.methods.toProfileJSONFor = function toProfileJSONFor() {
  return {
    username: this.username,
    role: this.role,
    bio: this.bio,
    image: this.image || 'https://static.productionready.io/images/smiley-cyrus.jpg',
  };
};

// register the schema within mongoose
mongoose.model('User', UserSchema);
