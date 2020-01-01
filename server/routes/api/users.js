const router = require('express').Router();
const auth = require('../auth');
const userController = require('../../controllers/userController');

// Create user
router.post('/signup', userController.signup);

// Authenticate User
router.post('/users/login', userController.login);

// Get user by ID
router.get('/user', auth.required, userController.getUser);

// Get all users
router.get('/users', auth.required, userController.getUsers);

// Update user
router.put('/user', auth.required, userController.updateUser);

// Delete user
router.delete('/user/:userId', auth.required, userController.deleteUser);

module.exports = router;
