
// Import
const mongoose = require("mongoose");

// Setup
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: /.+\@.+\..+/,
    },
    password: {
        type: String,
        required: true
    },
    url: {
        type: String
    },
    reviews: [
     { 
        review: String,
        review2: String,
        review3: String
     }
    ]
});

// Export
const User = mongoose.model("CIL-User", userSchema);
module.exports = User;

