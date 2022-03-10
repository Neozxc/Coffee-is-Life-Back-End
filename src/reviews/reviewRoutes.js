const { Router } = require("express");
const { addReview, reviewList, updateReview, deleteReview } = require("./reviewController");
const reviewRouter = Router();

reviewRouter.post("/review", addReview);

reviewRouter.get("/reviewlist", reviewList);

reviewRouter.put("/review", updateReview);

reviewRouter.delete("/review", deleteReview);

module.exports = reviewRouter;
