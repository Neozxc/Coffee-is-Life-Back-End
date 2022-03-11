const mongoose = require("mongoose");

const FavouritesSchema = new mongoose.Schema({
	username: {
		type: String,
		required: true,
	},
	name: {
		type: String,
		required: true,
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
	},
});

const Favourites = mongoose.model("CIL-User-FavouriteShops", FavouritesSchema);

module.exports = Favourites;
