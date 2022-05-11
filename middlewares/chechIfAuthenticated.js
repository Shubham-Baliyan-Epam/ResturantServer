const jwt = require('jsonwebtoken');
const db = require('../models/index.model');
const AppError = require('../utils/appError');

const checkIfAuthenticated = async (req, res, next) => {
  let token;

  //check if req has authorization headers
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    token = req.headers.authorization.split(' ')[1];
  }
  // if no token then send error
  if (!token) {
    return next(new AppError('You are not logged in', 401));
  }
  //verfiy the token if present
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  // find if user is there or not
  const currentUser = await db.User.findByPk(decoded.id);
  if (!currentUser) {
    return next(new Error('The user no longer exists'));
  }

  //every condition pass then call the next middleware and make the user available on the req
  req.user = currentUser;
  next();
};

module.exports = checkIfAuthenticated;
