const { Router } = require("express");
const { addFavShop, deleteFavShop } = require("./favControllers");
const favRouter = Router();

favRouter.post("/favourites", addFavShop);
favRouter.delete("/favourites", deleteFavShop);

module.exports = favRouter;
