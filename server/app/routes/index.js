var express = require('express');
var authenticate_routes = require('./authenticate_routes');
var user_route = require('./user_routes');
var tenants_routes = require('./tenants_routes');
var feedback_routes = require('./feedback_routes');
const Router = express.Router();

exports = module.exports = Router;

Router.use('/authenticate', authenticate_routes);
Router.use('/user', user_route);
Router.use('/tenants', tenants_routes);
Router.use('/feedback', feedback_routes);