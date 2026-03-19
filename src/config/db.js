const mongoose = require('mongoose');


// Connect to db
const connectDb = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URI);

        // DB Connection Log
        console.log('DataBase Connected!');
    } catch (error) {
        
        // Log DB Connection Error
        console.error("Error in DB Connection!", error.message);

        // Close DB connection, if DB connection Failed!
        process.exit(1);
    }
}

module.exports = connectDb;