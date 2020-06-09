const express = require('express');
const UserRouter = require('./api/routes/users');
const LanguageRoute = require('./api/routes/languageCategory');
const ProblemRoute = require('./api/routes/problems');
const SolutionRoute = require('./api/routes/solution');
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
app.use('/api/languages', LanguageRoute);
app.use('/api/problems', ProblemRoute);
app.use('/api/solution', SolutionRoute);

// handling errors defined last
app.use((err, req, res, next) => {
  //set error
  res.status(err.status || 500);
  res.json({
    error: {
      status: err.status || 500,
      message: err.message,
    },
  });
});
module.exports = app;
