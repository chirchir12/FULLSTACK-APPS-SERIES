const express = require('express');
const {
  createLanguageCategory,
  languagesList,
} = require('../controllers/languageCategory');

const route = express.Router();

// create route
route.post('/create', createLanguageCategory);
route.get('/all', languagesList);

module.exports = route;
