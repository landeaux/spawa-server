const mongoose = require('mongoose');
const hubspot = require('../hubspot');

const User = mongoose.model('User');

/**
 * Helper method for profile routes to format the contact object received from
 * HubSpot API into a minimal format appropriate for requesting client.
 */
function toProfileJSON(contact) {
  const profile = contact.properties;
  profile.profileUrl = contact['profile-url'];
  return profile;
}

/**
 * Helper method for profile routes to fetch HubSpot contact info once the user
 * has been found.
 */
async function getProfileHelper(req, res, next, user) {
  try {
    let contact;

    // if the user already has HubSpot contact vid stored, use that to fetch
    // otherwise, fetch by user email (less reliable, since email is mutable)
    if (user.hubspotContactVid) {
      contact = await hubspot.contacts.getById(user.hubspotContactVid);
    } else {
      contact = await hubspot.contacts.getByEmail(user.email);
      user.hubspotContactVid = contact.vid;
      await user.save();
    }
    if (!contact) { return res.sendStatus(404); }
    const profile = toProfileJSON(contact);
    return res.status(200).json({ profile });
  } catch (error) {
    return next(error);
  }
}

// Get current user profile
exports.getProfile = async (req, res, next) => {
  try {
    const { username } = req.payload;
    const user = await User.findOne({ username });
    if (!user) { return res.sendStatus(404); }
    return getProfileHelper(req, res, next, user);
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
    return getProfileHelper(req, res, next, user);
  } catch (error) {
    return next(error);
  }
};
