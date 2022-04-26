const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { User } = require("../models/index.model");
exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const data = await User.findOne({
      where: {
        email,
      },
      raw: true,
    });
    if (!data) throw Error("User not found");
    const passwordIsValid = bcrypt.compareSync(password, data.password);
    if (!passwordIsValid) throw Error("Invalid User");
    let token = jwt.sign(
      {
        id: data.id,
      },
      process.env.API_SECRET,
      {
        expiresIn: "7d",
      }
    );
    res.status(200).json({
      status: "success",
      data: {
        token,
        user: {
          email,
          id: data.id,
          name: data.name,
        },
      },
    });
  } catch (err) {
    console.log("auth error", err);
    res.status(403).json({
      status: "failed",
    });
  }
};
exports.register = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const hashedPassword = bcrypt.hashSync(password, 8);
    const data = await User.create({
      name,
      email,
      password: hashedPassword,
    });
    res.status(201).json({
      status: "success",
    });
  } catch (err) {
    res.status(400).json({
      status: "failed",
    });
  }
};
// exports.updateResturant = factory.updateOne("User");
