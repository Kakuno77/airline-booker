// routes/flight-search.js
const express = require('express');
const router = express.Router();
const { searchFlights } = require('../plugins/flight-search-plugin');

// Display the flight search form
router.get('/flight-search', (req, res) => {
  res.render('flight-search');
});

// Handle flight search form submission and display results
router.get('/flight-search/results', (req, res) => {
    try {
        const { from, to, date } = req.query;
        const flights = searchFlights(from, to, date);
        res.render('flight-search-results', { flights });
      } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
      }
});

module.exports = router;
