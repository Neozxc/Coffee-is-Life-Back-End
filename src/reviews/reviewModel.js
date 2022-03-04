const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true,
        unique: true
    },
    text: {
        type: String,
        required: true
    },

    // Maybe add this idk, depends lol
    rating: {
        type: Number
    }
});

const Review = mongoose.model("CIL-User-Reviews", ReviewSchema);

module.exports = Review;