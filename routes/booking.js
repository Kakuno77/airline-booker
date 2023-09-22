// routes/booking.js
const express = require('express');
const router = express.Router();

// Define a route to display the booking form
router.get('/booking', (req, res) => {
  // Render an HTML view with a booking form here
  res.render('booking-form');
});

// Define a route to handle form submission
router.post('/booking', (req, res) => {
  // Process the form data and book the flight
  const { flightId, name, email } = req.body;

  // Implement booking logic here
  // You can save booking details to a database, send confirmation emails, etc.
  res.render('booking-success', { name, flightId });
});

module.exports = router;
