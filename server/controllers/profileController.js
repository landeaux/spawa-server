const mongoose = require('mongoose');
const string = require('lodash/string');
const hubspot = require('../hubspot');

const User = mongoose.model('User');

/**
 * Helper method for profile routes to format the contact object received from
 * HubSpot API into a minimal format appropriate for requesting client.
 */
async function toProfileJSON(contact) {
  const profile = {
    eapp: {},
    pitchQuiz: {},
    pitchDeck: {},
  };
  const { properties } = contact;

  const allProps = await hubspot.contacts.properties.get();

  const eappKeys = allProps
    .filter((prop) => prop.groupName === 'eapp')
    .map((prop) => prop.name);
  const pitchQuizKeys = allProps
    .filter((prop) => prop.groupName === 'pitch_quiz')
    .map((prop) => prop.name);
  const pitchDeckKeys = allProps
    .filter((prop) => prop.groupName === 'pitch_deck')
    .map((prop) => prop.name);

  // get rid of all the irrelevant meta props added by hubspot
  Object.keys(properties).forEach((key) => {
    const prefix = key.substr(0, 3);
    if (prefix !== 'hs_') {
      let groupName;
      if (eappKeys.includes(key)) groupName = 'eapp';
      else if (pitchQuizKeys.includes(key)) groupName = 'pitchQuiz';
      else if (pitchDeckKeys.includes(key)) groupName = 'pitchDeck';

      // Only save the property value; we don't need everything else.
      // Also, convert key name to camelCase.
      if (groupName) {
        profile[groupName][string.camelCase(key)] = properties[key].value;
      }
    }
  });

  // add the profile-url, as it may be useful for admins
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
    if (user.hubspotVid) {
      contact = await hubspot.contacts.getById(user.hubspotVid);
    } else {
      contact = await hubspot.contacts.getByEmail(user.email);
      user.hubspotVid = contact.vid;
      await user.save();
    }
    if (!contact) { return res.sendStatus(404); }
    const profile = await toProfileJSON(contact);
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
