const Review = require("./reviewModel");

exports.addReview = async (req, res) => {
    try {
        const newReview = await Review.create(req.body); 
        res.status(200).send({ newReview });
    } catch (error) {
        console.log(error);
        res.status(500).send({ err: error.message });
    }
};

exports.reviewList =  async (req, res) => {
    try {
        const allReviews = await Review.find({});
        res.status(200).send({ allReviews });
    } catch (error) {
        console.log(error);
        res.status(500).send({ err: error.message });
    }
};
