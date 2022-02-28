const { Router } = require("express");
const { hashPassword } = require("../middleware");
const { addUser, listUsers, login } = require("./userController");
const userRouter = Router();

userRouter.post("/user", hashPassword, addUser);

userRouter.get("/user", listUsers);

userRouter.get("/login", login);

module.exports = userRouter;
