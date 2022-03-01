const { Router } = require("express");
const { addReview, reviewList } = require("./reviewController");
const reviewRouter = Router();

reviewRouter.post("/review", addReview);
reviewRouter.get("/reviewlist", reviewList);

module.exports = reviewRouter;