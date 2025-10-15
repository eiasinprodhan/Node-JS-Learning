const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const mysqlConnection = require('./configurations/database');

// Load environment variables
dotenv.config();

// Create Express app
const app = express();

// Middlewares
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.use('/api/v1/employee', require('./routes/employeeRoute'));

// 404 Middleware
app.use((req, res, next) => {
    res.status(404).json({
        message: '404 Not found.'
    });
});

// DB Connection check
mysqlConnection.query('SELECT 1', (error) => {
    if(error){
        console.log('Error connecting to the database:', error);
        return;
    }
    console.log('Connected to the MySQL database.');
});

// Start the server
const PORT = process.env.PORT;

app.listen(PORT, (req, res) => {
    console.log("Hello, World");
})