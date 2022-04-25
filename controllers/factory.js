const db = require("../models/index.model");
exports.getAll = (Model) => async (req, res) => {
  try {
    let data = await db[Model].findAll({ raw: true });
    res.status(200).json({
      status: "success",
      data,
    });
  } catch (err) {
    console.log(Model, err);
    res.status(400).json({
      status: "failed",
    });
  }
};

exports.getOne = (Model) => async (req, res) => {
  try {
    let id = req.params.id;
    let data = await db[Model].findByPk(id, { raw: true });
    res.status(200).json({
      status: "success",
      data,
    });
  } catch (err) {
    console.log(Model, err);
    res.status(404).json({
      status: "failed",
    });
  }
};
exports.createOne = (Model) => async (req, res) => {
  let body = req.body;
  try {
    const data = await db[Model].create({
      ...body,
    });
    res.status(201).json({
      status: "success",

      data,
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      status: "failed",
    });
  }
};
exports.updateOne = (Model) => async (req, res) => {
  let body = req.body;
  try {
    const data = await db[Model].update(
      {
        ...body,
      },
      {
        where: {
          id,
        },
      }
    );
    res.status(201).json({
      status: "success",
      data,
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      status: "failed",
    });
  }
};
