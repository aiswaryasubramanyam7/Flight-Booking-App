const express = require('express');
const router = express.Router();
const Flight = require('../models/Flight'); //
const Booking = require('../models/Booking'); //

// Get all flights
router.get('/flights', async (req, res) => {
    try {
        const flights = await Flight.find();
        res.json(flights);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Create a booking
router.post('/bookings', async (req, res) => {
    try {
        const newBooking = new Booking(req.body);
        const savedBooking = await newBooking.save();
        res.status(201).json(savedBooking);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// This line is CRITICAL. Without it, server.js gets "undefined" instead of a function.
module.exports = router;