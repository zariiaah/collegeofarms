const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
require('dotenv').config();

const PORT = process.env.PORT || 8080;
const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Mongo connected"))
  .catch(err => console.error("Mongo error", err));

app.use(express.json());
app.use(express.static(path.join(__dirname, 'dist')));

// Example API route
app.post('/api/ticket', (req, res) => {
  // handle ticket creation here
  res.json({ success: true });
});

// All other routes serve the frontend
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));