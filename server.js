const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config(); //

const app = express();
app.use(cors()); //
app.use(express.json()); //

// Import the routes
const apiRoutes = require('./routes/api');

// Connect to DB
mongoose.connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/flightBookingDB')
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// This is line 20 - it works only if module.exports = router is in api.js
app.use('/api', apiRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));