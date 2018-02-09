'use strict';

var Sequelize = require('sequelize'),
    bcrypt = require('bcrypt');

var config = require('../config'),
    db = require('../services/Database');

var modelDefinition = {
    username: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
    },

    password: {
        type: Sequelize.STRING,
        allowNull: false
    },

    role: {
        type: Sequelize.INTEGER,
        defaultValue: config.userRoles.user
    }
};


var modelOptions = {
    instanceMethods: {
        comparePasswords: comparePasswords
    },
    hooks: {
        beforeValidate: hashPassword
    }
};

//USER MODEL DEFINING
var UserModel = db.define('user', modelDefinition, modelOptions);


// Hashes the password for a user object.
function hashPassword(user) {
    if(user.changed('password')) {
        return bcrypt.hash(user.password, 10).then(function(password) {
            user.password = password;
        });
    }
}

// SEEING IF THE TWO PASSWORDS MATCH OR NOT BY COMPARING
function comparePasswords(password, callback) {
    bcrypt.compare(password, this.password, function(error, isMatch) {
        if(error) {
            return callback(error);
        }

        return callback(null, isMatch);
    });
}


module.exports = UserModel;