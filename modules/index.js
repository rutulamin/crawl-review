// Dependencies
const express = require('express');
const moduleRoute = express.Router();

moduleRoute.use('/crawl', require('./crawl/crawlRoute'));

module.exports = moduleRoute;
