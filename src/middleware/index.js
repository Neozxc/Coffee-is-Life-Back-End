const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../user/userModel");

// hash password
exports.hashPassword = async (req, res, next) => {
	try {
		req.body.password = await bcrypt.hash(req.body.password, 8);
		next();
	} catch (error) {
		console.log(error);
		res.status(500).send({ err: error.message });
	}
};

// decrypt password
exports.decryptPassword = async (req, res, next) => {
	try {
		const infoUser = await User.findOne({ username: req.body.username });
		if (await bcrypt.compare(req.body.password, infoUser.password)) {
			req.user = infoUser;
			next();
		} else {
			res.status(500).send({
				message: "Your password does not match. Please try again.",
			});
		}
	} catch (error) {
		console.log(error);
		res.status(500).send({ err: error.message });
	}
};

exports.tokenCheck = async (req, res, next) => {
	try{
		const token = req.header("Authorization").replace("Bearer ","");
		const decoded = await jwt.verify(token, process.env.SECRET);
		const user = await User.findById(decoded._id);
		req.user = user;
		next();
	} catch (error) {
		console.log(error);
		res.status(500).send({ err: error.message });
	}
}
