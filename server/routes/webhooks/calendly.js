const mongoose = require('mongoose');
const router = require('express').Router();

const User = mongoose.model('User');
const Event = mongoose.model('Event');

// invitee.created
router.post('/invitee-created', async (req, res, next) => {
  try {
    if (req.body.event !== 'invitee.created') {
      res.sendStatus(400);
    } else {
      const eventTypeData = req.body.payload.event_type;
      const eventData = req.body.payload.event;
      const allEventData = Object.assign(eventTypeData, eventData);

      const event = new Event(allEventData);
      await event.save();

      const { email } = req.body.payload.invitee;
      const user = await User.findOne({ email });
      if (user) {
        // #todo Push the event instance to the user's events prop
        // await user.save();
      }
      res.sendStatus(200);
    }
    next();
  } catch (error) {
    next(error);
  }
});

// invitee.canceled
router.post('/invitee-canceled', (req, res, next) => {
  console.log('calendly webhook route hit');
  console.log('req.body:', req.body);
  res.sendStatus(200);
  next();
});

module.exports = router;
