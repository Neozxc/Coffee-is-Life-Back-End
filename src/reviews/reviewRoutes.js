const { Router } = require("express");
const { addReview, reviewList, deleteReview, updateReview } = require("./reviewController");
const reviewRouter = Router();

reviewRouter.post("/review", addReview);
reviewRouter.get("/reviewlist", reviewList);
reviewRouter.delete("/review", deleteReview);
// reviewRouter.patch("/review", updateReview);

module.exports = reviewRouter;
