const express = require('express');
const { createUser, loginUser } = require('../controllers/user');
const verifyToken = require('../middleware/authMiddleware');
const router = express.Router();

// Create a new user without requiring a token
router.post('/users', createUser);

// Login a user without requiring a token and giving them a token
router.post('/users/login', loginUser);

module.exports = router;
