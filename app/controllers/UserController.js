'use strict';

var UserController = {
    index: function(req, res) {
        res.status(200).json({ message: 'Hey ' +req.user.username +"! "+'This is your User Dashboard.'});
    }
};

module.exports = UserController;