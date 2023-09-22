// plugins/booking-plugin.js

// Simulated booking data
const bookings = [];

// Function to book a flight
function bookFlight(flightId, name, email) {
  const flight = flights.find((flight) => flight.id === flightId);
  if (flight) {
    const booking = { flight, name, email };
    bookings.push(booking);
    return booking;
  }
  return null; // Flight not found
}

module.exports = { bookFlight };
