const mongoose = require('mongoose');

const flightSchema = new mongoose.Schema({
  flightNumber: String,
  airline: String,
  departureCity: String,
  destinationCity: String,
  departureTime: Date,
  price: Number,
  availableSeats: Number
});

module.exports = mongoose.model('Flight', flightSchema);