const mongoose = require('mongoose');
const passport = require('passport');

const User = mongoose.model('User');

// Create user
exports.signup = async (req, res, next) => {
  try {
    const user = new User();
    user.username = req.body.user.username;
    user.email = req.body.user.email;
    user.setPassword(req.body.user.password);
    await user.save();
    res.status(201).json({ user: user.toAuthJSON() });
  } catch (error) {
    next(error);
  }
};

// Authenticate user
exports.login = (req, res, next) => {
  if (!req.body.user.email) {
    return res.status(422).json({ errors: { email: 'can\'t be blank' } });
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

// Get current user
exports.getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.payload.id);
    return user
      ? res.status(200).json({ user: user.toAuthJSON() }) // user found
      : res.sendStatus(401); // user not found
  } catch (error) {
    return next(error);
  }
};

// Get user by ID
exports.getUserById = async (req, res, next) => {
  const { userId } = req.params;
  if (!mongoose.Types.ObjectId.isValid(userId)) {
    res.sendStatus(400);
  } else {
    User.findById(userId).then((user) => {
      if (!user) { return res.sendStatus(401); }

      return res.status(200).json({ user: user.toUserJSONFor() });
    }).catch(next);
  }
};

// Get all users
exports.getUsers = (req, res, next) => {
  User.find({})
    .then((users) => res.status(200).json({ users: users.map((user) => user.toUserJSONFor()) }))
    .catch(next);
};

// Update user
exports.updateUser = (req, res, next) => {
  User.findById(req.payload.id).then((user) => {
    if (!user) { return res.sendStatus(401); }

    // only update fields that were actually passed...
    if (typeof req.body.user.username !== 'undefined') {
      user.username = req.body.user.username;
    }
    if (typeof req.body.user.email !== 'undefined') {
      user.email = req.body.user.email;
    }
    if (typeof req.body.user.bio !== 'undefined') {
      user.bio = req.body.user.bio;
    }
    if (typeof req.body.user.image !== 'undefined') {
      user.image = req.body.user.image;
    }
    if (typeof req.body.user.password !== 'undefined') {
      user.setPassword(req.body.user.password);
    }

    return user.save().then(() => res.status(200).json({ user: user.toAuthJSON() }));
  }).catch(next);
};

// Delete user
exports.deleteUser = async (req, res, next) => {
  try {
    const { userId } = req.params;
    if (!mongoose.Types.ObjectId.isValid(userId)) {
      res.sendStatus(400);
    } else {
      const STATUS_CODE = await User.findByIdAndDelete(userId)
        ? 204 // No Content
        : 410; // Gone
      res.sendStatus(STATUS_CODE);
    }
  } catch (error) {
    next(error);
  }
};
