const Favourites = require("./favModel");

exports.addFavShop = async (req, res) => {
	try {
		const newFavShop = await Favourites.create(req.body);
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
