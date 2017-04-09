const dbURI = 'mongodb://127.0.0.1/learnbank_tests',
    assert = require('assert'),
    mongoose = require('mongoose'),
    User = require('../models/User'),
    clearDB = require('mocha-mongoose')(dbURI);

describe('user', function() {
    it('should save to DB', () => {
        var user = new User({name: 'Jerome', email: 'jeromeaking40@yahoo.com', password: 'test'});
        user.save((err, user) => {
            if (err) {
                console.error(err);
            }
            console.log(user);
            // done();
        });
    });
});
