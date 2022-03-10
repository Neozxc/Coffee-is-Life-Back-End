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

exports.reviewList = async (req, res) => {
	try {
		const allReviews = await Review.find({});
		res.status(200).send({ allReviews });
	} catch (error) {
		console.log(error);
		res.status(500).send({ err: error.message });
	}
};

exports.deleteReview = async (req, res) => {
	try {
		const removeReview = await Review.deleteOne({
			_id: req.body._id,
		});
		res.status(200).send({ removeReview });
	} catch (error) {
		console.log(error);
		res.status(500).send({ err: error.message });
	}
};

exports.updateReview = async (req, res) => {
    try {
        if (req.body.newname) {
        const upReview = await Review.updateOne(
            {username: req.body.username},
            {$set: {name: req.body.newname}}  
        );
        res.status(200).send({ upReview })
    } else if (req.body.newtext) {
        const upReview = await Review.updateOne(
            {username: req.body.username},
            {$set: {text: req.body.newtext}}
        )
        res.status(200).send({ upReview })
    } else if (req.body.newrating) {
        const upReview = await Review.updateOne(
            {username: req.body.username},
            {name: req.body.name},
            {text: req.body.text},
            {$set: {rating: req.body.newrating}}
        )
        res.status(200).send({ upReview })
        }
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
