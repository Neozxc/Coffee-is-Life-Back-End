const { Router } = require("express");
const { hashPassword, decryptPassword } = require("../middleware");
const { addUser, listUsers, login } = require("./userController");
const userRouter = Router();

userRouter.post("/user", hashPassword, addUser);

userRouter.get("/user", listUsers);

userRouter.post("/login", decryptPassword, login);

module.exports = userRouter;
