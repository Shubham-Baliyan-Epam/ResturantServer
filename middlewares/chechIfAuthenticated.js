const jwt = require('jsonwebtoken');
const db = require('../models/index.model');
const AppError = require('../utils/appError');

const checkIfAuthenticated = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    token = req.headers.authorization.split(' ')[1];
  }

  if (!token) {
    return next(new AppError('You are not logged in', 401));
  }

  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  const currentUser = await db.User.findByPk(decoded.id);
  if (!currentUser) {
    return next(new Error('The user no longer exists'));
  }
  req.user = currentUser;
  next();
};

module.exports = checkIfAuthenticated;
