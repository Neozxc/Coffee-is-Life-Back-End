
// Imports
require("dotenv").config();
const mongoose = require("mongoose");

// Setup
const connection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Nice! Connected to MongoDB!");
    } catch (error) {
        console.log(error);
    }
};

// Run
connection();