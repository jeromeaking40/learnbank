const User = require('../models/User');
const bcrypt = require('bcryptjs');
const randomstring = require('randomstring');
const CONFIG = require('../package').config;
const sessions = require('client-sessions');

module.exports = {
    //REGISTER USERS
    userRegister: (req, res) => {
        var user = new User(req.body);
        user.save((err, user) => {
            if (err) {
                return res.status(500).send(err);
            }
            res.send(user);
        });
    },
    //LOGIN USERS
    userLogin: (req, res) => {
        // POST login
        User.findOne({
            email: req.body.email
        }, (err, user) => {
            if (err) {
                // this will trigger the error .then callback on the frontend
                console.error('MongoDB error:', err);
                res.status(500).json(err);
            }
            if (!user) {
                console.warn('No user found!');
                res.status(403).json({message: 'Invalid username or password'});
            } else {
                bcrypt.compare(req.body.password, user.password, (compareErr, matched) => {
                    if (compareErr) { // this will trigger the error .then callback on the frontend
                        console.error('compareErr error:', compareErr);
                        res.status(500).json(err);
                    } else if (!matched) {
                        console.warn('Password mismatch!');
                        res.status(403).json({message: 'Invalid username or password'});
                    } else {
                        console.log('req.session: ', req.session);
                        req.session = user;
                        res.json(user);
                    }
                });
            }
        });
    },
    //PROFILE PAGE ONCE CONFIRMED
    profilePage: (req, res) => {
        res.sendFile('/profile.html', {root: "./public/app/components/profile"});
    },
    //GET USER INFORMATION FOR PROFILE
    me: (req, res) => {
        User.findOne({
            _id: req.session._id
        }, (err, user) => {
            if (err) {
                res.send(err);
            }
            delete user.password;
            res.send(user);
        });
    },
    //GET ALL
    findUser: (req, res) => {
        User.find((err, user) => {
            if (err) {
                console.error(err);
            }
            res.send(user);
        });
    },
    //LOGOUT USERS
    logout: (req, res) => {
        req.session.reset();
        res.redirect('/login.html');
    },
    //SET SESSION FOR LOGGED IN USERS
    middlewares: {
        session: (req, res, next) => {
            // MIDDLEWARE TO CHECK IF USER LOGGED IN
            if (req.session) {
                next();
            } else {
                res.redirect('/login.html');
            }
        }
    }

};
