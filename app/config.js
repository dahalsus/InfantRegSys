'use strict';

var config = module.exports;

config.db = {
    user: 'root', 
    password: '',
    name: 'test'
};

config.db.details = {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql'
};

config.keys = {
    secret: '/jVdfUX+u/Kn3qPY4+ahjwQgyV5UhkM5cdh1i2xhozE='
};

var userRoles = config.userRoles = {
    guest: 1,
    user: 2,
    admin: 4
};

config.accessLevels = {
    guest: userRoles.guest | userRoles.user | userRoles.admin,
    user: userRoles.user | userRoles.admin,
    admin: userRoles.admin
};