const Shop = require("./shopModel");

exports.addShop = async (req, res) => {
	try {
		const newShop = await Shop.create(req.body);
		res.status(200).send({ shop: newShop });
	} catch (error) {
		console.log(error);
		res.status(500).send({ err: error.message });
	}
};

exports.listShops = async (req, res) => {
	try {
		const shops = await Shop.find({});
		res.status(200).send({ shops });
	} catch (error) {
		console.log(error);
		res.status(500).send({ err: error.message });
	}
};

exports.findShop = async (req, res) => {
	try {
		const shop = await Shop.findOne({ name: req.body.name });
		console.log(shop)
		res.status(200).send({ shop });
	} catch (error) {
		console.log(error);
		res.status(500).send({ err: error.message });
	}
};

exports.findOnlyReviews = async (req, res) => {
    try {
        // Shows name of the shop, author and his description
        const reviewFound = await Shop.find({}).select("name reviews.username reviews.text");
        res.status(200).send({ reviewFound });
    } catch (error) {
        console.log(error);
        res.status(500).send({ err: err.message });
    }
};

exports.deleteShop = async (req, res) => {
	try {
		const shop = await Shop.deleteOne(req.body);
		res.status(200).send({ shop });
	} catch (error) {
		console.log(error);
        res.status(500).send({ err: err.message });
	}
};
