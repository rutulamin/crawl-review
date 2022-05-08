const express = require('express');
const crawlControllers = require('./crawlController');
const crawlMiddleware = require('./crawlMiddleware');
const crawlRoute = express.Router();

const reviewMiddleware = [
    crawlMiddleware.reviewMiddleware,
    crawlControllers.reviewController
];
crawlRoute.get('/review', reviewMiddleware);

module.exports = crawlRoute;