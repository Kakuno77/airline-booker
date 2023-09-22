// routes/index.js
const express = require('express');
const router = express.Router();

// Define the homepage route
router.get('/', (req, res) => {
  // You can render an HTML view or send a simple response here
  res.render('index');
});

module.exports = router;
