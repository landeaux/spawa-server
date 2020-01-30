const router = require('express').Router();
const auth = require('../auth');
const { grantAccess } = require('../../controllers/accessController');
const {
  preloadUser,
  getProfile,
  getProfileByUsername,
} = require('../../controllers/profileController');

// Preload user profile on routes with ':username'
router.param('username', preloadUser);

router.get('/', auth.required, grantAccess('readOwn', 'profile'), getProfile);

router.get('/:username', auth.required, grantAccess('readAny', 'profile'), getProfileByUsername);

module.exports = router;
