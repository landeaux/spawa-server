const mongoose = require('mongoose');

const User = mongoose.model('User');

// Preload user profile on routes with ':username'
exports.preloadUser = async (req, res, next, username) => {
  try {
    const user = await User.findOne({ username });
    if (!user) { return res.sendStatus(404); }
    req.profile = user;
    return next();
  } catch (error) {
    return next(error);
  }
};

// Get current user profile
exports.getProfile = async (req, res, next) => {
  try {
    const { username } = req.payload;
    const profile = await User.findOne({ username });
    if (!profile) { return res.sendStatus(404); }
    return res.status(200).json({ profile: profile.toProfileJSONFor() });
  } catch (error) {
    return next(error);
  }
};

// Get user profile by username
exports.getProfileByUsername = (req, res, next) => {
  try {
    return res.status(200).json({ profile: req.profile.toProfileJSONFor() });
  } catch (error) {
    return next(error);
  }
};
