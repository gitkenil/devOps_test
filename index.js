const express = require('express');
const app = express();
require('dotenv').config();

app.get('/health', (req, res) => {
  res.json({ status: 'healthy', timestamp: new Date() });
});

app.get('/orders', (req, res) => {
  // Simulate database connection
  if (!process.env.DB_PASS) {
    return res.status(500).json({ error: 'Database connection failed' });
  }
  res.json({ orders: [{ id: 1, total: 100 }] });
});

app.listen(8080, () => {
  console.log('API running on port 8080');
});
