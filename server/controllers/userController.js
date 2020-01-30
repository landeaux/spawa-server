const mongoose = require('mongoose');
const passport = require('passport');
const { roles } = require('../roles');

const User = mongoose.model('User');

exports.grantAccess = (action, resource) => async (req, res, next) => {
  try {
    const permission = roles.can(req.payload.role)[action](resource);
    if (!permission.granted) {
      return res.status(401).json({
        error: 'You don\'t have enough permission to perform this action',
      });
    }
    return next();
  } catch (error) {
    return next(error);
  }
};

// User signup
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

// User login
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

// Create user
exports.createUser = async (req, res, next) => {
  try {
    const user = new User();
    user.username = req.body.user.username;
    user.email = req.body.user.email;
    user.setPassword(req.body.user.password);
    user.role = req.body.user.role;
    await user.save();
    res.status(201).json({ user: user.toUserJSONFor() });
  } catch (error) {
    next(error);
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
    if (typeof req.body.user.bio !== 'undefined') {
      user.bio = req.body.user.bio;
    }
    if (typeof req.body.user.image !== 'undefined') {
      user.image = req.body.user.image;
    }

    await user.save();
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
    if (typeof req.body.user.bio !== 'undefined') {
      user.bio = req.body.user.bio;
    }
    if (typeof req.body.user.image !== 'undefined') {
      user.image = req.body.user.image;
    }
    if (typeof req.body.user.active !== 'undefined') {
      user.active = req.body.user.active;
    }
    if (typeof req.body.user.active !== 'undefined') {
      user.active = req.body.user.active;
    }

    await user.save();
    return res.status(200).json({ user: user.toUserJSONFor() });
  } catch (error) {
    return next(error);
  }
};

// Delete user
exports.deleteUser = async (req, res, next) => {
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
