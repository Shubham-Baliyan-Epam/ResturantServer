const express = require("express");
const uploadRouter = express.Router();
const uploadController = require("../controllers/uploadController");

uploadRouter
  .route("/")
  .post(
    uploadController.uploadSingle,
    uploadController.uploadSuccess,
    uploadController.uploadError
  );

module.exports = uploadRouter;
