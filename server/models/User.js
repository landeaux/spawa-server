var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

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

// register the schema within mongoose
mongoose.model('User', UserSchema);
