const bcrypt = require("bcryptjs/dist/bcrypt")
const User = require("./userModel");
const jwt = require("jsonwebtoken");
const Review = require("../reviews/reviewModel");

    // add new user
// exports.addUser = async (req, res) => {
//     try {
//         const newUser = await User.create(req.body);
//         res.status(200).send({ user: newUser })
//     } catch (error) {
//         console.log(error);
//         res.status(500).send({ err: error.message });
//     }
// };

    // creates the new user linked to reviews
exports.addUser = async (req, res) => {
    try {
        const newUser = await User.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
            reviews: await Review.findOne({username: `${req.body.username}`})
        });
        const token = await jwt.sign({ _id: newUser._id}, process.env.SECRET);
        res.status(200).send({ user: newUser, token });
    } catch (error) {
        console.log(error);
        res.status(500).send({ error: error.message});
    }
};

    // shows user with all his reviews
exports.findUser = async (req, res) => {
    try {
        const users = await User.find({ username: req.body.username });
        const reviews = await Review.find({username: `${req.body.username}`});
        res.status(200).send({
            users: users,
            reviews: reviews
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({ err: error.message });
    }
};

    // show all user's database
exports.listUsers = async (req, res) => {
    try {
        const users = await User.find({ });
        res.status(200).send({ users });
    } catch (error) {
        console.log(error);
        res.status(500).send({ err: error.message });
    }
};

exports.login = async (req, res) => {
    try { 
        const token = await jwt.sign({ _id: User._id}, process.env.SECRET);
        res.status(200).send({ user: req.user, token });
    } catch (error) {
        console.log(error);
        res.status(500).send({ err: error.message });
    }
}

    // update username
exports.updateUser = async (req, res) => {
    try {
        const user = await User.updateOne(
            { username: req.body.username },
            { $set: { username: req.body.newUsername }}
        );
            res.status(200).send({ user });
    } catch (error) {
        console.log(error);
        res.status(500).send({ err: error.message });
    }
};

    // update password
exports.updatePassword = async (req, res) => {
    try {
        const user = await User.updateOne(
            { username: req.body.username },
            { $set: { password: req.body.newPassword }}
        );
        res.status(200).send({ user });
    } catch (error) {
        console.log(error);
        res.status(500).send({ err: error.message });
    }
};

    // delete by username or by email
exports.deleteUser = async (req, res) => {
    try {
        const user = await User.deleteOne( req.body );
        res.status(200).send({ user });
    } catch (error) {
        console.log(error);
        res.status(500).send({ err: error.message });
    }
};