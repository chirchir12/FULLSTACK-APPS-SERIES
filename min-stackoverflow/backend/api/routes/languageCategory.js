const express = require('express');
const {
  createLanguageCategory,
  languagesList,
  updateLanguage,
} = require('../controllers/languageCategory');

const route = express.Router();

route.post('/create', createLanguageCategory);
route.put('/update/:id', updateLanguage);
route.get('/all', languagesList);

module.exports = route;
