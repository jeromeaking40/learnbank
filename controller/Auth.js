const User = require('../models/User');
const bcrypt = require('bcryptjs');
const randomstring = require('randomstring');
const CONFIG = require('../package').config;
const EMAIL_CONFIG = CONFIG.emailer;
const EMAILER = require('nodemailer').createTransport(EMAIL_CONFIG);
const sessions = require('client-sessions');

module.exports = {
    //REGISTER USERS
    userRegister: (req, res) => {
        var user = new User(req.body);
        user.save((err, user) => {
            if (err) {
                return res.status(500).send(err);
            }
            req.session = user;
            res.json(user);
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
    //PASSWORD RESET
    password: {
        reset: (req, res) => {
            User.findOne({
                email: req.body.email
            }, (err, user) => {
                if (err) {
                    return res.status(500).json(err);

                }
                if (!user) {
                    return res.status(403).json({message: 'Nonexistant'});

                }
                var password = randomstring.generate(9);
                user.password = password;
                user.save((err) => {
                    if (err) {
                        return res.status(500).send(err);
                    }
                    EMAILER.sendMail({
                        // sender address
                        from: EMAIL_CONFIG.auth.user,
                        // receiver
                        to: req.body.email,
                        // subject line
                        subject: 'LearnBank Password Reset',
                        // plaintext body
                        text: `Here is your new temporary password: ${password}
                       Be sure to update password in your account settings.`
                    }, (err, info) => {
                        if (err) {
                            console.log(err);
                            return res.status(500).send(err);
                        }
                        res.send(messages.email);
                    });
                });
            });
        }
    },
    //UPDATE PASSWORD
    updatePassword: (req, res) => {
      User.findByIdAndUpdate(req.session._id, (err,user) => {
        if (err) {
          console.error(err);
        }
        user.password = req.body;
        // GENERATE A SALT VALUE TO ENCRYPT PASSWORD
        bcrypt.genSalt(SALT_INDEX, (saltErr, salt) => {
            if (saltErr) {
                console.error(saltErr);
                return next(saltErr);
            }
            console.info('SALT GENERATED', salt);
            //HASH THE PASSWORD BEFORE SAVING IT
            bcrypt.hash(user.password, salt, (hashErr, hashedPassword) => {
                if (hashErr) {
                    console.error(hashErr);
                    return next(hashErr);
                }
                // OVERRIDE THE PLAIN TEXT PASSWORD WITH THE HASHED PASSWORD
                user.password = hashedPassword;
                next();
            });
        });
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
