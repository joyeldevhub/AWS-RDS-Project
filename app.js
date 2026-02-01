const express = require('express');
const connection = require('./db');

const app = express();
app.use(express.json());

// POST /employee
app.post('/employee', (req, res) => {
    const { name, age, place, job, message } = req.body;
    if (!name || !age) {
        return res.status(400).json({ error: 'Name and age required' });
    }
    const query = 'INSERT INTO employees (name, age, place, job, message) VALUES (?, ?, ?, ?, ?)';
    connection.query(query, [name, age, place, job, message], (err, result) => {
        if (err) return res.status(500).json({ error: 'DB error', details: err });
        res.json({ status: 'success', employee_id: result.insertId });
    });
});

// GET /employee/:id
app.get('/employee/:id', (req, res) => {
    const { id } = req.params;
    const query = 'SELECT * FROM employees WHERE id = ?';
    connection.query(query, [id], (err, results) => {
        if (err) return res.status(500).json({ error: 'DB error', details: err });
        if (results.length === 0) return res.status(404).json({ error: 'Employee not found' });
        res.json(results[0]);
    });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`App running on port ${PORT}`);
});
