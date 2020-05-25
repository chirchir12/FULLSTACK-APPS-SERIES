const express = require('express');
const { createLanguageCategory } = require('../controllers/languageCategory');

const route = express.Router();

// create route
route.post('/create', createLanguageCategory);

module.exports = route;
