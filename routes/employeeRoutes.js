const express = require('express');
const { getAllEmployees } = require('../controller/employeeController');

// Router Object
const router = express.Router();

// Routes
router.get('/all', getAllEmployees)

module.exports = router;