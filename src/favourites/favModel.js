const mongoose = require("mongoose");

const FavouritesSchema = new mongoose.Schema({
	username: {
		type: String,
		required: true,
	},
	name: {
		type: String,
		required: true,
		unique: true,
	},
	rating: {
		type: Number,
		required: true,
	},
	reviews: {
		type: Number,
		required: true,
	},
	url: {
		type: String,
		unique: true,
	},
});

const Favourites = mongoose.model("CIL-User-Favourites", FavouritesSchema);

module.exports = Favourites;
