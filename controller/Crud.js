const User = require('../models/User'),
    Vault = require('../models/Vault');

module.exports = {
    //ADD BOOKS
    addBook: function(req, res) {
        Vault.update({
            user: req.session._id
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

        Vault.update({
            user: req.session._id
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
        Vault.update({
            user: req.session._id
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

        Vault.update({
            user: req.session._id
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
      Vault.update({
            user: req.session._id
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

      Vault.update({
            user: req.session._id
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
