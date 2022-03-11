const { Router } = require("express");
const { addFavShop, deleteFavShop, findFavShops } = require("./favControllers");
const favRouter = Router();

favRouter.post("/favourites", addFavShop);
favRouter.delete("/favourites", deleteFavShop);
favRouter.get("/favourites", findFavShops);

module.exports = favRouter;
