const router = require('express').Router();

// invitee.created
router.post('/invitee-created', (req, res, next) => {
  console.log('calendly webhook route hit');
  console.log('req.body:', req.body);
  res.sendStatus(200);
  next();
});

// invitee.canceled
router.post('/invitee-canceled', (req, res, next) => {
  console.log('calendly webhook route hit');
  console.log('req.body:', req.body);
  res.sendStatus(200);
  next();
});

module.exports = router;
