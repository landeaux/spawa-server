const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const EventSchema = new mongoose.Schema({
  /**
   * UUID of Event.
   */
  uuid: {
    index: true,
    required: [true, 'can\'t be blank'],
    type: String,
    unique: true,
  },
  /**
   * Name of the Event Type
   */
  name: {
    required: [true, 'can\'t be blank'],
    type: String,
  },
  /**
   * Description of the Event Type
   */
  description: {
    required: false,
    type: String,
  },
  /**
   * Start of scheduled Event
   */
  start_time: {
    required: true,
    type: Date,
  },
  /**
   * End of scheduled Event
   */
  end_time: {
    required: true,
    type: Date,
  },
  /**
   * Event duration in minutes
   */
  duration: {
    required: true,
    type: Number,
    validate: {
      message: '{VALUE} is not an integer',
      validator: Number.isInteger,
    },
  },
  /**
   * Event location
   */
  location: {
    default: '',
    required: false,
    type: String,
  },
  /**
   * Is event canceled
   */
  canceled: {
    default: false,
    required: false,
    type: Boolean,
  },
  /**
   * The name of Publisher or Invitee that canceled this event
   */
  canceler_name: {
    default: '',
    required: false,
    type: String,
  },
  /**
   * Reason specified during cancellation
   */
  cancel_reason: {
    default: '',
    required: false,
    type: String,
  },
  /**
   * The cancellation time of event
   */
  canceled_at: {
    default: null,
    required: false,
    type: Date,
  },
}, { timestamps: true }); // this option creates createdAt and updatedAt fields

// validate uniqueness of fields with 'unique: true' option
EventSchema.plugin(uniqueValidator, { message: 'is already exists.' });

// register the schema within mongoose
mongoose.model('Event', EventSchema);
