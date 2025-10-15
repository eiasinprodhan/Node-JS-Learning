const mysqlConnection = require("../configurations/database");

// Get all employees
const getAllEmployees = async (req, res) => {
  try {
    const [results] = await mysqlConnection.execute("SELECT * FROM employees");

    res.status(200).json({
      success: true,
      message: results.length ? "Employees retrieved successfully" : "No employees found",
      data: results,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to load employees",
      error: err.message,
    });
  }
};

// Get employee by ID
const getEmployeeById = async (req, res) => {
  const { id } = req.params;

  try {
    const [results] = await mysqlConnection.execute(
      "SELECT * FROM employees WHERE id = ?",
      [id]
    );

    if (results.length === 0) {
      return res.status(404).json({
        success: false,
        message: `Employee with ID ${id} not found`,
      });
    }

    res.status(200).json({
      success: true,
      message: "Employee retrieved successfully",
      data: results[0],
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to retrieve employee",
      error: err.message,
    });
  }
};

// Create employee
const createEmployee = async (req, res) => {
  const {
    address,
    country,
    email,
    joining_date,
    last_salary,
    name,
    nid,
    password,
    phone,
    photo,
    role,
    salary,
    salary_type,
    status,
    total_salary,
    user_id,
  } = req.body;

  try {
    const [result] = await mysqlConnection.execute(
      `INSERT INTO employees 
      (address, country, email, joining_date, last_salary, name, nid, password, phone, photo, role, salary, salary_type, status, total_salary, user_id)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [address, country, email, joining_date, last_salary, name, nid, password, phone, photo, role, salary, salary_type, status, total_salary, user_id]
    );

    res.status(201).json({
      success: true,
      message: "Employee created successfully",
      insertedId: result.insertId,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to create employee",
      error: err.message,
    });
  }
};

// Update employee
const updateEmployee = async (req, res) => {
  const { id } = req.params;
  const {
    address,
    country,
    email,
    joining_date,
    last_salary,
    name,
    nid,
    password,
    phone,
    photo,
    role,
    salary,
    salary_type,
    status,
    total_salary,
    user_id,
  } = req.body;

  try {
    const [result] = await mysqlConnection.execute(
      `UPDATE employees SET 
      address = ?, country = ?, email = ?, joining_date = ?, last_salary = ?, name = ?, nid = ?, password = ?, phone = ?, photo = ?, role = ?, salary = ?, salary_type = ?, status = ?, total_salary = ?, user_id = ?
      WHERE id = ?`,
      [address, country, email, joining_date, last_salary, name, nid, password, phone, photo, role, salary, salary_type, status, total_salary, user_id, id]
    );

    res.status(200).json({
      success: true,
      message: result.affectedRows ? "Employee updated successfully" : "Employee not found",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to update employee",
      error: err.message,
    });
  }
};

// Delete employee
const deleteEmployee = async (req, res) => {
  const { id } = req.params;

  try {
    const [result] = await mysqlConnection.execute(
      "DELETE FROM employees WHERE id = ?",
      [id]
    );

    res.status(200).json({
      success: true,
      message: result.affectedRows ? "Employee deleted successfully" : "Employee not found",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to delete employee",
      error: err.message,
    });
  }
};

module.exports = {
  getAllEmployees,
  getEmployeeById,
  createEmployee,
  updateEmployee,
  deleteEmployee,
};
