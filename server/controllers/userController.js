const mongoose = require('mongoose');
const passport = require('passport');
const hubspot = require('../hubspot');

const User = mongoose.model('User');

async function getHubspotVid(email) {
  try {
    const { vid } = await hubspot.contacts.getByEmail(email);
    return vid;
  } catch ({ statusCode }) {
    if (statusCode === 404) {
      const contactObj = {
        properties: [
          {
            property: 'email',
            value: email,
          },
        ],
      };
      const { vid } = await hubspot.contacts.create(contactObj);
      return vid;
    }
    return null;
  }
}

// User signup
exports.signup = async (req, res, next) => {
  try {
    const user = new User();

    user.email = req.body.user.email;
    user.username = req.body.user.username;
    user.setPassword(req.body.user.password);
    user.company = req.body.user.company;

    const vid = await getHubspotVid(req.body.user.email);
    if (vid) {
      user.hubspotVid = vid;
    }

    await user.save();

    // Only sync with HubSpot if user saves successfully and we have a valid vid
    if (vid) {
      await user.syncCompany();
    }

    return res.status(201).json({ user: user.toAuthJSON() });
  } catch (error) {
    return next(error);
  }
};

// User login
exports.login = (req, res, next) => {
  if (!req.body.user.username) {
    return res.status(422).json({ errors: { username: 'can\'t be blank' } });
  }

  if (!req.body.user.password) {
    return res.status(422).json({ errors: { password: 'can\'t be blank' } });
  }

  return passport.authenticate('local', { session: false }, (err, user, info) => {
    if (err) { return next(err); }

    if (user) {
      user.token = user.generateJWT();
      return res.status(200).json({ user: user.toAuthJSON() });
    }
    return res.status(422).json(info);
  })(req, res, next);
};

// Create user
exports.createUser = async (req, res, next) => {
  try {
    const user = new User();

    user.email = req.body.user.email;
    user.username = req.body.user.username;
    user.setPassword(req.body.user.password);
    user.active = req.body.user.active;
    user.role = req.body.user.role;
    user.company = req.body.user.company;
    if (req.body.user.state) user.state = req.body.user.state;

    const vid = await getHubspotVid(req.body.user.email);
    if (vid) {
      user.hubspotVid = vid;
    }

    await user.save();

    // Only sync with HubSpot if user saves successfully and we have a valid vid
    if (vid) {
      await user.syncCompany();
    }

    return res.status(201).json({ user: user.toUserJSONFor() });
  } catch (error) {
    return next(error);
  }
};

// Get current user
exports.getUser = async (req, res, next) => {
  try {
    const { id } = req.payload;
    const user = await User.findById(id);
    return user
      ? res.status(200).json({ user: user.toAuthJSON() }) // user found
      : res.sendStatus(404); // user not found
  } catch (error) {
    return next(error);
  }
};

// Get user by username
exports.getUserByUsername = async (req, res, next) => {
  try {
    const { username } = req.params;
    const user = await User.findOne({ username });
    console.log(user);
    return user
      ? res.status(200).json({ user: user.toUserJSONFor() }) // user found
      : res.status(404).json({ errors: { [username]: 'not found' } }); // user not found
  } catch (error) {
    return next(error);
  }
};

// Get user by ID
exports.getUserById = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.sendStatus(400);
    const user = await User.findById(id);
    return user
      ? res.status(200).json({ user: user.toUserJSONFor() }) // user found
      : res.sendStatus(404); // user not found
  } catch (error) {
    return next(error);
  }
};

// Get all users
exports.getUsers = async (req, res, next) => {
  try {
    const users = await User.find({});
    res.status(200).json({ users: users.map((user) => user.toUserJSONFor()) });
  } catch (error) {
    next(error);
  }
};

// Update current user
exports.updateUser = async (req, res, next) => {
  try {
    const { id } = req.payload;
    const user = await User.findById(id);
    if (!user) { return res.sendStatus(404); }

    // only update fields that were actually passed...
    if (typeof req.body.user.username !== 'undefined') {
      user.username = req.body.user.username;
    }
    if (typeof req.body.user.email !== 'undefined') {
      user.email = req.body.user.email;
    }
    if (typeof req.body.user.password !== 'undefined') {
      user.setPassword(req.body.user.password);
    }
    if (typeof req.body.user.company !== 'undefined') {
      user.company = req.body.user.company;
    }

    await user.save();

    // Only synchronize with HubSpot if the user is saved successfully
    if (typeof req.body.user.email !== 'undefined') {
      await user.syncEmail();
    }
    if (typeof req.body.user.company !== 'undefined') {
      await user.syncCompany();
    }

    return res.status(200).json({ user: user.toAuthJSON() });
  } catch (error) {
    return next(error);
  }
};

// Update user by id
exports.updateUserById = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.sendStatus(400);
    const user = await User.findById(id);
    if (!user) { return res.sendStatus(404); }

    // only update fields that were actually passed...
    if (typeof req.body.user.username !== 'undefined') {
      user.username = req.body.user.username;
    }
    if (typeof req.body.user.email !== 'undefined') {
      user.email = req.body.user.email;
    }
    if (typeof req.body.user.password !== 'undefined') {
      user.setPassword(req.body.user.password);
    }
    if (typeof req.body.user.role !== 'undefined') {
      user.role = req.body.user.role;
    }
    if (typeof req.body.user.active !== 'undefined') {
      user.active = req.body.user.active;
    }
    if (typeof req.body.user.company !== 'undefined') {
      user.company = req.body.user.company;
    }
    if (typeof req.body.user.state !== 'undefined') {
      user.state = req.body.user.state;
    }

    await user.save();

    // Only synchronize with HubSpot if the user is saved successfully
    if (typeof req.body.user.email !== 'undefined') {
      await user.syncEmail();
    }
    if (typeof req.body.user.company !== 'undefined') {
      await user.syncCompany();
    }

    return res.status(200).json({ user: user.toUserJSONFor() });
  } catch (error) {
    return next(error);
  }
};

// Update current user
exports.updateUserState = async (req, res, next) => {
  try {
    const { id } = req.payload;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.sendStatus(400);
    }

    const user = await User.findById(id);
    if (!user) {
      return res.sendStatus(404);
    }

    if (req.body.user && req.body.user.state) {
      user.state = req.body.user.state;
      await user.save();

      return res.status(200).json({ user: user.toAuthJSON() });
    }
    return res.status(400).json({
      errors: {
        state: 'missing `state`',
      },
    });
  } catch (error) {
    return next(error);
  }
};

// Suspend user by id
exports.suspendUserById = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.sendStatus(400);
    const user = await User.findById(id);
    if (!user) { return res.sendStatus(404); }

    user.active = false;

    await user.save();
    return res.status(200).json({ user: user.toUserJSONFor() });
  } catch (error) {
    return next(error);
  }
};

// Activate user by id
exports.activateUserById = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.sendStatus(400);
    const user = await User.findById(id);
    if (!user) { return res.sendStatus(404); }

    user.active = true;

    await user.save();
    return res.status(200).json({ user: user.toUserJSONFor() });
  } catch (error) {
    return next(error);
  }
};

// Delete user
exports.deleteUser = async (req, res, next) => {
  // #todo Need to also delete a user's assets (pitchDeck, reviews, etc.)
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.sendStatus(400);
    } else {
      const STATUS_CODE = await User.findByIdAndDelete(id)
        ? 204 // No Content
        : 410; // Gone
      res.sendStatus(STATUS_CODE);
    }
  } catch (error) {
    next(error);
  }
};
