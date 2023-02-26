const express = require("express");
const { addUser } = require("../controller/userController");

const userRouter = express.Router();

userRouter.post("/", addUser);

module.exports = userRouter;
