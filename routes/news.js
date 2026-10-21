const express = require('express');
const routes = express.Router();

const { getNews } = require('../controllers/newsController');
const { varifyToken } = require('../middleware/auth');

routes.get('/', varifyToken, getNews);

module.exports = routes;