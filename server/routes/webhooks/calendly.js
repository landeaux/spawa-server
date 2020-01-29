const mongoose = require('mongoose');
const router = require('express').Router();

const User = mongoose.model('User');

// invitee.created
router.post('/invitee-created', async (req, res, next) => {
  try {
    if (req.body.event !== 'invitee.created') {
      res.sendStatus(400);
    } else {
      const { email } = req.body.payload.invitee;
      const { event } = req.body.payload;
      const user = await User.findOne({ email });
      if (user) {
        user.events.push(event);
        await user.save();
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
