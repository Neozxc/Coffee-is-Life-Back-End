const { Router } = require("express");
<<<<<<< HEAD
const { addReview, reviewList, updateReview, deleteReview } = require("./reviewController");
=======
const { addReview, reviewList, deleteReview, updateReview } = require("./reviewController");
>>>>>>> e869b6f74e195307d1dce65ff2303a7f12ff5691
const reviewRouter = Router();

reviewRouter.post("/review", addReview);

reviewRouter.get("/reviewlist", reviewList);

reviewRouter.put("/review", updateReview);

reviewRouter.delete("/review", deleteReview);
// reviewRouter.patch("/review", updateReview);

module.exports = reviewRouter;
