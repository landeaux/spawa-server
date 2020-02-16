const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({
  owner: {
    ref: 'User',
    required: true,
    type: mongoose.Schema.Types.ObjectID,
  },
  pitchDeck: {
    ref: 'PitchDeck',
    required: true,
    type: mongoose.Schema.Types.ObjectID,
  },
  feedback: {
    required: true,
    type: String,
  },
}, { timestamps: true }); // this option creates createdAt and updatedAt fields

// register the schema within mongoose
mongoose.model('Review', ReviewSchema);
