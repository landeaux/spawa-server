const router = require('express').Router();
const auth = require('../auth');
const { grantAccess } = require('../../controllers/accessController');
const {
  getProfile,
  getProfileByUsername,
} = require('../../controllers/profileController');

router.get('/', auth.required, grantAccess('readOwn', 'profile'), getProfile);

router.get('/:username', auth.required, grantAccess('readAny', 'profile'), getProfileByUsername);

module.exports = router;
