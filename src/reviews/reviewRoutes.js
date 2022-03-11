const { Router } = require("express");
const { addReview, reviewList, deleteReview, updateReview, updateRating } = require("./reviewController");
const reviewRouter = Router();

reviewRouter.post("/review", addReview);
reviewRouter.get("/reviewlist", reviewList);
reviewRouter.delete("/review", deleteReview);
reviewRouter.put("/review", updateReview);
reviewRouter.put("/rating", updateRating);

module.exports = reviewRouter;
