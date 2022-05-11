const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User } = require('../models/index.model');
exports.login = async (req, res) => {
  //get email and password from req
  const { email, password } = req.body;

  try {
    //find the user from the email
    const data = await User.findOne({
      where: {
        email,
      },
    });
    //no user than error
    if (!data) throw Error('User not found');

    //compare the password if user is available
    const passwordIsValid = bcrypt.compareSync(password, data.password);
    //if password doesnot match then
    if (!passwordIsValid) throw Error('Invalid User');

    //if matches then create a token
    let token = jwt.sign(
      {
        id: data.id,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: '7d',
      }
    );
    // send the token with user details
    res.status(200).json({
      status: 'success',
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
    console.log('auth error', err);
    res.status(403).json({
      status: 'failed',
    });
  }
};
exports.register = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    //hash the password  and save it
    const hashedPassword = bcrypt.hashSync(password, 8);

    // create user with hashed password
    const data = await User.create({
      name,
      email,
      password: hashedPassword,
    });
    res.status(201).json({
      status: 'success',
    });
  } catch (err) {
    res.status(400).json({
      status: 'failed',
    });
  }
};
// exports.updateResturant = factory.updateOne("User");
