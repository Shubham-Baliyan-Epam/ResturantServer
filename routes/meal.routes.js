const express = require("express");
const mealRouter = express.Router();

mealRouter.get("/", (req, res) => {
  console.log("Meal ROuter");
  res.send("lol");
});

module.exports = mealRouter;
