
// Import
const mongoose = require("mongoose");
const Review = require("../reviews/reviewModel");

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
    movies: {
        type: mongoose.Schema.Types.ObjectId,
        ref: `${Review}`,
        unique: false
    }
});

// Export
const User = mongoose.model("CIL-User", userSchema);
module.exports = User;

