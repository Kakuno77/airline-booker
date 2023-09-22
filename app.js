const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Register plugins
const flightSearchPlugin = require('./plugins/flight-search-plugin');
const bookingPlugin = require('./plugins/booking-plugin');

// Register routes
const indexRoute = require('./routes/index');
const flightSearchRoute = require('./routes/flight-search');
const bookingRoute = require('./routes/booking');

// Use middleware and routes
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public')); // Serve static assets
app.set('view engine', 'ejs'); // Use EJS as the template engine

app.use('/', indexRoute);
app.use('/', flightSearchRoute);
app.use('/', bookingRoute);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
