const mongoose = require('mongoose');
const hubspot = require('../hubspot');

const User = mongoose.model('User');

function toProfileJSON(contact) {
  const profile = contact.properties;
  profile.profileUrl = contact['profile-url'];
  return profile;
}

// Get current user profile
exports.getProfile = async (req, res, next) => {
  try {
    const { username } = req.payload;
    const user = await User.findOne({ username });
    if (!user) { return res.sendStatus(404); }
    const contact = await hubspot.contacts.getByEmail(user.email);
    if (!contact) { return res.sendStatus(404); }
    const profile = toProfileJSON(contact);
    return res.status(200).json({ profile });
  } catch (error) {
    return next(error);
  }
};

// Get user profile by username
exports.getProfileByUsername = async (req, res, next) => {
  try {
    const { username } = req.params;
    const user = await User.findOne({ username });
    if (!user) { return res.sendStatus(404); }
    const contact = await hubspot.contacts.getByEmail(user.email);
    if (!contact) { return res.sendStatus(404); }
    const profile = toProfileJSON(contact);
    return res.status(200).json({ profile });
  } catch (error) {
    return next(error);
  }
};
