const multer = require("multer");
const imageStorage = multer.diskStorage({
  destination: "assets",
  filename: (req, file, cb) => {
    cb(
      null,
      file.originalname.split(".")[0] +
        "_" +
        Date.now() +
        path.extname(file.originalname)
    );
  },
});

const imageUpload = multer({
  storage: imageStorage,
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(png|jpg|webp)$/)) {
      return cb(new Error("Please upload a Image"));
    }
    cb(undefined, true);
  },
});
exports.uploadSingle = imageUpload.single("image");
exports.uploadSuccess = (req, res) => {
  req.file.path = "assets/" + req.file.filename;
  res.send(req.file);
};
exports.uploadError = (error, req, res, next) => {
  res.status(400).send({ error: error.message });
};
