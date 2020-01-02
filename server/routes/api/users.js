const router = require('express').Router();
const auth = require('../auth');
const {
  grantAccess,
  signup,
  login,
  getUser,
  getUserById,
  getUsers,
  updateUser,
  deleteUser,
} = require('../../controllers/userController');

// User signup
router.post('/signup', signup);

// User login
router.post('/login', login);

// Get current user
router.get('/user', auth.required, getUser);

// Get user by ID
router.get('/user/:id', auth.required, grantAccess('readAny', 'user'), getUserById);

// Get all users
router.get('/users', auth.required, grantAccess('readAny', 'user'), getUsers);

// Update current user
router.put('/user', auth.required, updateUser);

// Update user by ID
router.put('/user/:id', auth.required, grantAccess('updateAny', 'user'), updateUser);

// Delete user
router.delete('/user/:id', auth.required, grantAccess('deleteAny', 'user'), deleteUser);

module.exports = router;
