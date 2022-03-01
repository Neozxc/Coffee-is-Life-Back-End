const mongoose = require("mongoose");

const shopSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    url: {
        type: String,
        unique: true,
    },
    location: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    reviews: [
        {
            username: {
                type: String,
                required: true
            },
            text: {
                type: String,
                required: true
            }
        }
    ]
});

const Shop = mongoose.model("Coffee-Shops", shopSchema );
module.exports = Shop;