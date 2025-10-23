const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Register consumer
router.get('/', userController.getUser);

// Register consumer
router.post('/', userController.registerConsumer);

// Update user
router.post('/:id', userController.updateConsumer);

// Delete user by ID
router.delete('/:id', userController.deleteUser);

// Login user
router.post('/login', userController.loginUser);

module.exports = router;