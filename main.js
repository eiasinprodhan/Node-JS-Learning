const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const mysqlConnection = require('./configurations/database');

// Load environment variables
dotenv.config();

// Create Express app
const app = express();

// Middleware
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.use('/api/v1/', require('./routes/employeeRoute'));

// 404 Handler
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: '404 Not Found.',
    });
});

// Check DB Connection before starting the server
mysqlConnection.query('SELECT 1')
    .then(() => {
        console.log('Connected to the MySQL database.');

        // Start the server after confirming DB is connected
        const PORT = process.env.PORT || 8080;
        app.listen(PORT, () => {
            console.log(`Server running on http://localhost:${PORT}`);
        });
    })
    .catch((error) => {
        console.error('Error connecting to the database:', error.message);
        process.exit(1);
    });
