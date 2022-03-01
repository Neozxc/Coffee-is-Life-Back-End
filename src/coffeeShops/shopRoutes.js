const { Router } = require("express");
const { addShop, listShops } = require("./shopController");
const shopRouter = Router();

shopRouter.post("/shop", addShop);

shopRouter.get("/shop", listShops);

module.exports = shopRouter;