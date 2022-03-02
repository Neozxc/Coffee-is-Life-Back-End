const { Router } = require("express");
const { addShop, listShops, findShop } = require("./shopController");
const shopRouter = Router();

shopRouter.post("/shop", addShop);

shopRouter.get("/shop", listShops);

shopRouter.post("/shop/details", findShop);

module.exports = shopRouter;