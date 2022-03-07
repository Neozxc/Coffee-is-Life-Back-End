const { Router } = require("express");
const { addReview, reviewList, updateReview, deleteReview } = require("./reviewController");
const reviewRouter = Router();

reviewRouter.post("/review", addReview);

reviewRouter.get("/reviewlist", reviewList);

reviewRouter.put("/reviewupdate", updateReview)

reviewRouter.delete("/reviewdelete", deleteReview);

module.exports = reviewRouter;