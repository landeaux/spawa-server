const mongoose = require('mongoose');

const PitchDeckSchema = new mongoose.Schema({
  url: {
    type: String,
    required: true,
  },
  rejectionCount: {
    type: Number,
    default: 0,
  },
  accepted: {
    type: Boolean,
    default: false,
  },
}, { timestamps: true }); // this option creates createdAt and updatedAt fields

// register the schema within mongoose
mongoose.model('PitchDeck', PitchDeckSchema);
