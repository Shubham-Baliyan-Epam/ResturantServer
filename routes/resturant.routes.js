const express = require("express");
const resturantRouter = express.Router();

const resturantController = require("../controllers/resturantController");
resturantRouter
  .route("/")
  .get(resturantController.findAllResturants)
  .post(resturantController.createResturant);

resturantRouter
  .route("/:id")
  .get(resturantController.findResturant)
  .put(resturantController.updateResturant);

module.exports = resturantRouter;
