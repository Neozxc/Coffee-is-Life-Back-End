const { Router } = require("express");
const { hashPassword, decryptPassword } = require("../middleware");
const { addUser, listUsers, login, updateUser, updatePassword, deleteUser, findUser } = require("./userController");
const userRouter = Router();

userRouter.post("/user", hashPassword, addUser);

userRouter.get("/user", listUsers);

userRouter.post("/findUser", findUser);

userRouter.post("/login", decryptPassword, login);

userRouter.put("/user", updateUser);

userRouter.put("/password", decryptPassword, updatePassword);

userRouter.delete("/user", deleteUser);

module.exports = userRouter;
