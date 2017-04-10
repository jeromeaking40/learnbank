const User = require('../models/User'),
    Vault = require('../models/Vault');

module.exports = {
    //ADD BOOKS
    addBook: function(req, res) {
        User.update({
            email: req.session.email
        }, {
            $push: {
                "books": req.body
            }
        }, function(err, user) {
            if (err) {
                console.error(err);
            } else {
                console.log(user);
            }
        });
        res.send(req.body);

    },
    //DELETE BOOKS
    deleteBook: function(req, res) {
        console.log(req.body.books);

        User.update({
            email: req.session.email
        }, {
            $pull: {
                "books": req.body.books
            }
        }, function(err, user) {
            if (err) {
                console.error(err);
            } else {
                console.log(user);
            }
        });
        res.send('Profile updated');
    },
    //ADD WEBSITES
    addWebsite: function(req, res) {
        User.update({
            email: req.session.email
        }, {
            $push: {
                "websites": req.body
            }
        }, function(err, user) {
            if (err) {
                console.error(err);
            } else {
                console.log(user);
            }
        });
        res.send(req.body);

    },
    //DELETE WEBSITES
    deleteWebsite: function(req, res) {
        console.log(req.body.websites);

        User.update({
            email: req.session.email
        }, {
            $pull: {
                "websites": req.body.websites
            }
        }, function(err, user) {
            if (err) {
                console.error(err);
            } else {
                console.log(user);
            }
        });
        res.send('Profile updated');
    },
    //ADD PODCASTS
    addPodcast: function(req, res) {
        User.update({
            email: req.session.email
        }, {
            $push: {
                "podcasts": req.body
            }
        }, function(err, user) {
            if (err) {
                console.error(err);
            } else {
                console.log(user);
            }
        });
        res.send(req.body);

    },
    //DELETE PODCASTS
    deletePodcast: function(req, res) {
        console.log(req.body.podcasts);

        User.update({
            email: req.session.email
        }, {
            $pull: {
                "podcasts": req.body.podcasts
            }
        }, function(err, user) {
            if (err) {
                console.error(err);
            } else {
                console.log(user);
            }
        });
        res.send('Profile updated');
    }
};
