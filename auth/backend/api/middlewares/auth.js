const jwt = require('jsonwebtoken');
require('dotenv').config();

exports.authUser = (req, res, next) => {
  // Gather the jwt access token from the request header
  const authHeader = req.headers['authorization'];
  console.log('token being called');
  const token = authHeader && authHeader.split(' ')[1];
  if (token == null) return res.sendStatus(401); // if there isn't any token call redirect
  jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    console.log('user data', user);
    req.user = user;
    next(); // pass the execution off to whatever request the client intended
  });
};
