const { Router } = require("express");
const { addShop, listShops, findShop, findOnlyReviews } = require("./shopController");
const shopRouter = Router();

shopRouter.post("/shop", addShop);

shopRouter.get("/shop", listShops);

shopRouter.post("/shop/details", findShop);

shopRouter.get("/found", findOnlyReviews);

module.exports = shopRouter;