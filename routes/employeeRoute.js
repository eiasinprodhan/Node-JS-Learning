const express = require('express');
const getAllEmployees = require('../controllers/employeeController');

// Router Objec
const router = express.Router();

// Routes
router.get('/all', getAllEmployees);

module.exports = router;