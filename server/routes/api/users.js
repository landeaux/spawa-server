const router = require('express').Router();
const auth = require('../auth');
const userController = require('../../controllers/userController');

// Get all users
router.get('/users', auth.required, userController.getUsers);

// Get user by ID
router.get('/user', auth.required, userController.getUser);

// Update user
router.put('/user', auth.required, userController.updateUser);

// Login
router.post('/users/login', userController.login);

// Create user
router.post('/users', userController.signUp);

module.exports = router;
