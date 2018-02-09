'use strict';

var router = require('express').Router();

var config = require('../config'),
    allowOnly = require('../services/Routes').allowOnly,
    AuthenticateController = require('../controllers/AuthenticateController'),
    UserController = require('../controllers/UserController'),
    AdminController = require('../controllers/AdminController');

var APIRoutes = function(passport) {
    router.post('/signup', AuthenticateController.signUp);
    router.post('/authenticate', AuthenticateController.authenticateUser);

    router.get('/profile', passport.authenticate('jwt', { session: false }), allowOnly(config.accessLevels.user, UserController.index));
    router.get('/admin', passport.authenticate('jwt', { session: false }), allowOnly(config.accessLevels.admin, AdminController.index));

    return router;
};

module.exports = APIRoutes;