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
        const shops = await Shop.find({ });
        res.status(200).send({ shops });
    } catch (error) {
        console.log(error);
        res.status(500).send({ err: error.message });
    }
};