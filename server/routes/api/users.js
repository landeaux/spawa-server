const router = require('express').Router();
const auth = require('../auth');
const {
  grantAccess,
  grantOwnerAccess,
} = require('../../controllers/accessController');
const {
  signup,
  login,
  createUser,
  getUser,
  getUserById,
  getUsers,
  updateUser,
  updateUserById,
  deleteUser,
  suspendUserById,
  activateUserById,
} = require('../../controllers/userController');

// User signup
router.post('/signup',
  signup);

// User login
router.post('/login',
  login);

// Create user
router.post('/user',
  auth.required,
  grantAccess('createAny', 'user'),
  createUser);

// Get current user
router.get('/user',
  auth.required,
  getUser);

// Get user by ID
router.get('/user/:id',
  auth.required,
  grantOwnerAccess('read', 'user'),
  getUserById);

// Get all users
router.get('/users',
  auth.required,
  grantAccess('readAny', 'user'),
  getUsers);

// Update current user
router.put('/user',
  auth.required,
  updateUser);

// Update user by ID
router.put('/user/:id',
  auth.required,
  grantOwnerAccess('update', 'user'),
  updateUserById);

// Suspend user by ID
router.put('/user/suspend/:id',
  auth.required,
  grantAccess('updateAny', 'user'),
  suspendUserById);

// Activate user by ID
router.put('/user/activate/:id',
  auth.required,
  grantAccess('updateAny', 'user'),
  activateUserById);

// Delete user
router.delete('/user/:id',
  auth.required,
  grantAccess('deleteAny', 'user'),
  deleteUser);

module.exports = router;
