const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema({
    author: {
        type: String,
        required: true
    },

    description: {
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