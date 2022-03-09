const { Router } = require("express");
const { addReview, reviewList, deleteReview } = require("./reviewController");
const reviewRouter = Router();

reviewRouter.post("/review", addReview);

reviewRouter.get("/reviewlist", reviewList);
reviewRouter.delete("/review", deleteReview);

module.exports = reviewRouter;
