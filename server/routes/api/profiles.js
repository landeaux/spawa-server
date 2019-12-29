const router = require('express').Router();
const mongoose = require('mongoose');
const auth = require('../auth');

const User = mongoose.model('User');

// Preload user profile on routes with ':username'
router.param('username', (req, res, next, username) => {
  User.findOne({ username }).then((user) => {
    if (!user) { return res.sendStatus(404); }

    req.profile = user;

    return next();
  }).catch(next);
});

router.get('/:username', auth.optional, (req, res) => {
  if (req.payload) {
    return User.findById(req.payload.id).then((user) => {
      if (!user) {
        return res.json({ profile: req.profile.toProfileJSONFor(false) });
      }

      return res.json({ profile: req.profile.toProfileJSONFor(user) });
    });
  }
  return res.json({ profile: req.profile.toProfileJSONFor(false) });
});

module.exports = router;
