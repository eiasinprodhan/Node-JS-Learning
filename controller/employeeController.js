const mysqlConnection = require("../config/db");

const getAllEmployees = (req, res) => {
    mysqlConnection.query('SELECT * FROM employees', (err, results) => {
        if (err) {
            return res.status(500).send({
                success: false,
                message: 'Failed to load employees',
                error: err.message,
            });
        }

        if (results.length === 0) {
            return res.status(404).send({
                success: false,
                message: 'No employees found',
            });
        }

        res.status(200).send({
            success: true,
            message: 'Employees retrieved successfully',
            data: results,
        });
    });
};

module.exports = { getAllEmployees };
