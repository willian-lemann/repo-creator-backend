const express = require('express');
const Routes = express.Router();

const ScrapController = require('./src/controllers/ScrapController');

Routes.post('/scrap', ScrapController.scrap);

module.exports = Routes;