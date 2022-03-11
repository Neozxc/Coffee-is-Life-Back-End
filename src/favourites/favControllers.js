const Favourites = require("./favModel");

exports.addFavShop = async (req, res) => {
	try {
		const newFavShop = await Favourites.create({
			username: req.body.username,
			name: req.body.name,
			rating: req.body.rating,
			reviews: req.body.reviews,
			url: req.body.url,
		});
		res.status(200).send({ newFavShop });
	} catch (error) {
		console.log(error);
		res.status(500).send({ err: error.message });
	}
};

exports.deleteFavShop = async (req, res) => {
	try {
		const removeFavShop = await Favourites.deleteOne({
			_id: req.body._id,
		});
		res.status(200).send({ removeFavShop });
	} catch {
		console.log(error);
		res.status(500).send({ err: error.message });
	}
};

exports.findFavShops = async (req, res) => {
	try {
		const getFavShops = await Favourites.find({});
		res.status(200).send({ getFavShops });
	} catch {
		console.log(error);
		res.status(500).send({ err: error.message });
	}
};