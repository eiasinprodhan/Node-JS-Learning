const dotenv = require('dotenv');
const mysql = require('mysql2/promise');

/// Load environment variables
dotenv.config();

const mysqlConnection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'crems',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

module.exports = mysqlConnection;