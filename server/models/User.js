var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  username: String,
  email: String,
  bio: String,
  image: String,
  hash: String,
  salt: String
}, { timestamps: true }); // this option creates createdAt and updatedAt fields

// register the schema within mongoose
mongoose.model('User', UserSchema);
