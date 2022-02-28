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
        const user = await User.findOne({ 
            username: req.body.username 
        });
        if (user) {
            const passwordMatch = await bcrypt.compare( 
                req.body.password, 
                user.password
                );
            if (passwordMatch) {
                res.status(200).send({ message: "Your password is correct!" });
            }
            else {
                res.status(400).send({ err: "Wrong password" });
            }
        }
        else {
            res.status(400).send({ err: "User does not exist" });
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({ err: error.message });
    }
};