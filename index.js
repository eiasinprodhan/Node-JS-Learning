const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const mysqlConnection = require('./config/db');

// Load environment variables
dotenv.config();

// Create Express app
const app = express();

// Middlewares
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.use('/api/v1/employees', require('./routes/employeeRoutes'));

// 404 Middleware
app.use((req, res, next) => {
    res.status(404).json({ message: 'Not Found' });
});

// DB Connection check
mysqlConnection.query('SELECT 1', (err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the MySQL database.');
});

// Start the server
const PORT = process.env.port || 8080;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
