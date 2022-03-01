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

exports.findShop = async (req, res) => {
    try {
        if (req.body.name) {
            const shop = await Shop.find(
                { name: {$regex: req.body.name} }
            );
            res.status(200).send({ shop });
        }
        else if (req.body.location) {
            const shop = await Shop.find(
                { location: {$regex: req.body.location} }
            );
            res.status(200).send({ shop });
        }
        else {
            res.status(400).send({ error: "COULDN'T FIND WHAT YOU SEARCHING"});
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({ err: error.message });
    }
};