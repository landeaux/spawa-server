const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
  text: String,
}, { timestamps: true });

mongoose.model('Post', PostSchema);
