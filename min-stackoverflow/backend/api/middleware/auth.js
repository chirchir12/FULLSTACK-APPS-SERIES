const jwt = require('jsonwebtoken');
require('dotenv').config();
const createError = require('http-errors');

exports.authUser = (req, res, next) => {
  // Gather the jwt access token from the request header
  const authHeader = req.headers['authorization'];
  console.log('token being called');
  const token = authHeader && authHeader.split(' ')[1];
  if (token == null) {
    next(createError(403, 'you are not authorized'));
    return;
  } // if there isn't any token call redirect
  jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
    if (err) {
      next(createError(403, 'you are not authorized'));
      return;
    }
    req.user = user;
    next(); // pass the execution off to whatever request the client intended
  });
};
