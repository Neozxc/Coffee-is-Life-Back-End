const bcrypt = require("bcryptjs/dist/bcrypt");
const res = require("express/lib/response");
const User = require("./userModel");

    // add new user
exports.addUser = async (req, res) => {
    try {
        const newUser = await User.create(req.body);
        res.status(200).send({ user: newUser })
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
        res.status(200).send({ user: req.user });
    } catch (error) {
        console.log(error);
        res.status(500).send({ err: error.message });
    }
};

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