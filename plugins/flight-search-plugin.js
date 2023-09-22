// plugins/flight-search-plugin.js

// Simulated flight data
const path = require('path');
const rawFlightData = path.readFileSync('flights.json', 'utf8');
const flights = JSON.parse(rawFlightData);
  
  // Function to search for available flights
  function searchFlights(from, to, date) {
    const filteredFlights = flights.filter(
      (flight) => flight.from === from && flight.to === to && flight.date === date
    );
    return filteredFlights;
  }
  
  module.exports = { searchFlights };
  