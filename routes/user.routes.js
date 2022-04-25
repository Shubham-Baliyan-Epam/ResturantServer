const express = require("express");
const userRouter = express.Router();

userRouter.get("/", (req, res) => {
  console.log("user ROuter");
  res.send("lol");
});

module.exports = userRouter;
