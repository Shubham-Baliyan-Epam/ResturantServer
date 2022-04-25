const express = require("express");
const resturantRouter = express.Router();

resturantRouter.get("/", (req, res) => {
  console.log("resturant ROuter");
  res.send("lol");
});

module.exports = resturantRouter;
