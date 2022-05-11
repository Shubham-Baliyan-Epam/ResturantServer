const express = require('express');
const resturantRouter = express.Router();

const resturantController = require('../controllers/resturantController');
const checkIfAuthenticated = require('../middlewares/chechIfAuthenticated');
resturantRouter
  .route('/')
  .get(resturantController.findAllResturants)
  .post(resturantController.createResturant);

resturantRouter
  .route('/:id')
  .get(checkIfAuthenticated, resturantController.findResturant)
  .put(resturantController.updateResturant);

module.exports = resturantRouter;
