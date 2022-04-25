const express = require("express");
const mealRouter = require("./meal.routes");
const resturantRouter = require("./resturant.routes");
const userRouter = require("./user.routes");
const router = express.Router();

router.use("/meal", mealRouter);
router.use("/user", userRouter);
router.use("/resturant", resturantRouter);

module.exports = router;
