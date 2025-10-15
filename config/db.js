const dotenv = require('dotenv');
const mysql = require('mysql2');

/// Load environment variables
dotenv.config();

const mysqlConnection = mysql.createConnection({
    host: process.env.host,
    user: process.env.user,
    password: process.env.password,
    database: process.env.database
});

module.exports = mysqlConnection;
