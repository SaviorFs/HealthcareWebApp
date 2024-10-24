const express = require('express');
const app = express();
const PORT = 5000;

// Basic route for patients data
app.get('/api/patients', (req, res) => {
  res.json([
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' }
  ]);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
