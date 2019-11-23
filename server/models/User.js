var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');
var crypto = require('crypto');
var jwt = require('jsonwebtoken');
var secret = require('../config').secret;

var UserSchema = new mongoose.Schema({
  username: {
    type: String,
    lowercase: true,
    unique: true,
    required: [ true, "can't be blank" ],
    match: [ /^[a-zA-Z0-9]+$/, 'is invalid' ],
    index: true // optimize queries that use this field
  },
  email: {
    type: String,
    lowercase: true,
    unique: true,
    required: [ true, "can't be blank" ],
    match: [ /\S+@\S+\.\S+/, 'is invalid' ],
    index: true // optimize queries that use this field
  },
  bio: String,
  image: String,
  hash: String,
  salt: String
}, { timestamps: true }); // this option creates createdAt and updatedAt fields

// validate uniqueness of fields with "unique: true" option
UserSchema.plugin(uniqueValidator, { message: 'is already taken.' });

UserSchema.methods.setPassword = function (password) {
  this.salt = crypto.randomBytes(16).toString('hex');
  this.hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
};

UserSchema.methods.validPassword = function (password) {
  var hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
  return this.hash === hash;
};

// generate a json web token to pass to the front-end for user authentication
UserSchema.methods.generateJWT = function () {
  var today = new Date();
  var exp = new Date(today);
  exp.setDate(today.getDate() + 60); // set expiration for 60 days in the future

  return jwt.sign({
    id: this._id,
    username: this.username,
    exp: parseInt(exp.getTime() / 1000),
  }, secret);
};

// get JSON representation of user to pass to front-end during authentication
UserSchema.methods.toAuthJSON = function () {
  return {
    username: this.username,
    email: this.email,
    token: this.generateJWT(),
    bio: this.bio,
    image: this.image
  };
};

UserSchema.methods.toProfileJSONFor = function (user) {
  return {
    username: this.username,
    bio: this.bio,
    image: this.image || 'https://static.productionready.io/images/smiley-cyrus.jpg'
  };
};

// register the schema within mongoose
mongoose.model('User', UserSchema);
