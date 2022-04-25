const express = require("express");
const mealRouter = express.Router();

const mealController = require("../controllers/mealController");
mealRouter
  .route("/")
  .get(mealController.findAllMeals)
  .post(mealController.createMeal);

mealRouter
  .route("/:id")
  .get(mealController.findMeal)
  .put(mealController.updateMeal);

module.exports = mealRouter;
