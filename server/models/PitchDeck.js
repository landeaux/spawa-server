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
  owner: {
    ref: 'User',
    required: true,
    type: mongoose.Schema.Types.ObjectId,
  },
}, { timestamps: true }); // this option creates createdAt and updatedAt fields

PitchDeckSchema.methods.toPitchDeckJSON = function toPitchDeckJSON() {
  return {
    id: this.id,
    url: this.url,
    rejectionCount: this.rejectionCount,
    accepted: this.accepted,
    owner: this.owner,
    reviews: this.reviews,
  };
};

// register the schema within mongoose
mongoose.model('PitchDeck', PitchDeckSchema);
