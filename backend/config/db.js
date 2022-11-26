// Use mongoose to connect to the database
const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const connect = await mongoose.connect(process.env.DATABASE_URL);
        console.log(`Connected to MongoDB`)
    } catch (error) {
        console.log('Cannot connect to Database');
        process.exit(1);
    }
}

module.exports = connectDB;