const express = require('express');
const cors = require('cors'); // Enables CORS for React frontend
const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json()); // Allows the server to accept JSON requests

// Route for patients data
app.get('/api/patients', (req, res) => {
  res.json([
    { id: 1, name: 'John Doe', age: 45, contact: '555-1234', condition: 'Hypertension' },
    { id: 2, name: 'Jane Smith', age: 32, contact: '555-5678', condition: 'Diabetes' },
    { id: 3, name: 'Alex Johnson', age: 27, contact: '555-8765', condition: 'Asthma' },
    { id: 4, name: 'Emma Brown', age: 60, contact: '555-4321', condition: 'Heart Disease' }
  ]);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
