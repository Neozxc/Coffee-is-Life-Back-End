const { Router } = require("express");
const { addShop, listShops, findShop, findOnlyReviews, deleteShop } = require("./shopController");
const shopRouter = Router();

shopRouter.post("/shop", addShop);

shopRouter.get("/shop", listShops);

shopRouter.post("/shop/details", findShop);

shopRouter.get("/found", findOnlyReviews);

shopRouter.delete("/shop", deleteShop);

module.exports = shopRouter;