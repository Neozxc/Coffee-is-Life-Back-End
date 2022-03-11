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
		const patchReview = await Review.updateOne(
			{ _id: req.body._id },
			{ $set: { text: req.body.text } }
		);
		res.status(200).send({ patchReview });
	} catch (error) {
		console.log(error);
		res.status(500).send({ err: error.message });
	}
};

exports.updateRating = async (req, res) => {
	try {
		const patchReview = await Review.updateOne(
			{ _id: req.body._id },
			{ $set: { rating: req.body.rating } }
		);
		res.status(200).send({ patchReview });
	} catch (error) {
		console.log(error);
		res.status(500).send({ err: error.message });
	}
};