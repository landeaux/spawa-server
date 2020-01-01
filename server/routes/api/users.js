const router = require('express').Router();
const auth = require('../auth');
const userController = require('../../controllers/userController');

// User signup
router.post('/signup', userController.signup);

// User login
router.post('/login', userController.login);

// Get current user
router.get('/user', auth.required, userController.getUser);

// Get user by ID
router.get('/user/:userId', auth.required, userController.getUserById);

// Get all users
router.get('/users', auth.required, userController.getUsers);

// Update current user
router.put('/user', auth.required, userController.updateUser);

// Delete user
router.delete('/user/:userId', auth.required, userController.deleteUser);

module.exports = router;
