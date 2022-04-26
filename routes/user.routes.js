const express = require("express");
const userRouter = express.Router();
const userController = require("../controllers/userController");
userRouter.post("/login", userController.login);
userRouter.post("/register", userController.register);

module.exports = userRouter;
