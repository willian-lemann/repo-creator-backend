const express = require('express');
const Routes = express.Router();

const ScrapController = require('./src/controllers/RepoController');

Routes.post('/repo', ScrapController.scrap);

module.exports = Routes;