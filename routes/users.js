const express = require('express');
const routes = express.Router();

const { signup, login, getPreferences, updatePreferences } = require('../controllers/usersController');
const { varifyToken } = require('../middleware/auth');

routes.post('/signup', signup);
routes.post('/login', login);
routes.get('/preferences', varifyToken, getPreferences);
routes.put('/preferences', varifyToken, updatePreferences);

module.exports = routes;