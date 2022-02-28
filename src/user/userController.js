const bcrypt = require("bcryptjs/dist/bcrypt")
const User = require("./userModel");

exports.addUser = async (req, res) => {
    try {
        const newUser = await User.create(req.body);
        res.status(200).send({ user: newUser })
    } catch (error) {
        console.log(error);
        res.status(500).send({ err: error.message });
    }
};

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