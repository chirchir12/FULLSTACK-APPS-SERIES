const express = require('express');
const UserRouter = require('./api/routes/users');
const LanguageRoute = require('./api/routes/languageCategory');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Handling CORS issues
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization'
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, DELETE, PATCH, OPTIONS'
  );
  next();
});

// my routes goes here
app.use('/api/auth', UserRouter);
app.use('/api/language', LanguageRoute);

module.exports = app;
