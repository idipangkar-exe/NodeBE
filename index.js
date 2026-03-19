const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDb = require('./src/config/db');


// Initialize dotenv, for fetching key and value
dotenv.config();


// Create Server
const PORT = process.env.PORT;
const app = express();


// Invoke "connectDb" to connect DB
connectDb();


// Run the Server
app.listen(PORT, () => {
    console.log(`Server is running on Port ${PORT}`)
})
