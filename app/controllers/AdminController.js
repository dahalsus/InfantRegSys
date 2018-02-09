'use strict';

// Admin Controller.
var AdminController = {
    index: function(req, res) {
        res.status(200).json({ message: 'Hey ' +req.user.username +"! "+'This is your Admin Dashboard'});
    }
};

module.exports = AdminController;