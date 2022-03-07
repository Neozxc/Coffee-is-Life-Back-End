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

exports.updateReview = async (req, res) => {
    try {
        const upReview = await Review.updateMany(
            {username: req.body.username},
            {$set: {name: req.body.newName}},
            {$set: {text:req.body.newText}},
            {$set: {rating: req.body.newRating}}   
        )
        res.status(200).send({ upReview })
    } catch (error) { 
        console.log(error);
        res.status(500).send({ err: error.message})
    }
}

exports.deleteReview = async (req, res) => {
    try { 
        const review = await Review.deleteOne(req.body);
        res.status(200).send({review});
    } catch (error) {
        console.log(error);
        res.status(500).send({ err: error.message })
    }
}
