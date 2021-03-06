const multer = require('multer');
const sharp = require('sharp');

const multerStorage = multer.memoryStorage();

const multerFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image')) {
    cb(null, true);
  } else {
    cb(new Error('Not an image! Please upload only images.'));
  }
};

const imageUpload = multer({
  storage: multerStorage,
  fileFilter: multerFilter,
});
exports.uploadSingle = imageUpload.single('image');

exports.uploadSuccess = async (req, res) => {
  // console.log(req);
  const path = `${req.file.originalname.split('.')[0]}_${Date.now()}.webp`;
  await sharp(req.file.buffer)
    .resize(2000, 1333)
    .toFormat('webp')
    .webp({ quality: 90 })
    .toFile(`assets/${path}`);

  req.file.buffer = undefined;
  req.file.path = path;

  res.send(req.file);
};
exports.uploadError = (error, req, res, next) => {
  res.status(400).send({ error: error.message });
};
