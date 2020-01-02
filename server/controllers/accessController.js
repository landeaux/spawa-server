const { roles } = require('../roles');

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