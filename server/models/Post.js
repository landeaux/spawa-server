var mongoose = require('mongoose');

var PostSchema = new mongoose.Schema({
  text: String
}, { timestamps: true });

mongoose.model('Post', PostSchema);
