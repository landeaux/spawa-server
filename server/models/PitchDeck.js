const mongoose = require('mongoose');

const PitchDeckSchema = new mongoose.Schema({
  url: {
    type: String,
    required: true,
  },
  rejectionCount: {
    type: Number,
    default: 0,
    validate: {
      validator: (value) => Number.isInteger(value) && value >= 0,
      message: (props) => `${props.value} is not a valid rejection count!`,
    },
  },
  accepted: {
    type: Boolean,
    default: false,
  },
  reviews: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Review',
    default: [],
  }],
}, { timestamps: true }); // this option creates createdAt and updatedAt fields

// register the schema within mongoose
mongoose.model('PitchDeck', PitchDeckSchema);
