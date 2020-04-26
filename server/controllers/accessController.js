const mongoose = require('mongoose');
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

exports.grantOwnerAccess = (action, resource) => async (req, res, next) => {
  try {
    let isOwner = false;
    if (resource === 'review' || resource === 'pitchdeck') {
      const userId = req.payload.id;
      if (!mongoose.Types.ObjectId.isValid(userId)) return res.sendStatus(400);
      const user = await User.findById(userId);
      if (!user) return res.sendStatus(400);
      if (resource === 'review') {
        if (user.reviews) {
          const { reviews } = user;
          isOwner = reviews.includes(mongoose.Types.ObjectId(req.params.id));
        }
      } else if (resource === 'pitchdeck') {
        if (user.pitchDeck) {
          const { pitchDeck } = user;
          isOwner = pitchDeck.toString() === req.params.id;
        }
      }
    } else if (resource === 'user') {
      if (Object.prototype.hasOwnProperty.call(req.params, 'id')) {
        isOwner = req.payload.id === req.params.id;
      } else if (Object.prototype.hasOwnProperty.call(req.params, 'username')) {
        isOwner = req.payload.username === req.params.username;
      }
    }
    const possession = isOwner
      ? 'Own'
      : 'Any';
    const permission = roles.can(req.payload.role)[`${action}${possession}`](resource);
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
