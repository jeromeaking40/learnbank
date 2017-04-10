const User = require('../models/User'),
 Bank = require('../models/Bank'),
 Book = require('../models/BookSchema');
 Website = require('../models/WebsiteSchema'),
 Podcast = require('../models/PodcastSchema');

 module.exports = {
  //MAKE NEW BANK
  addBank: (req, res) => {
    var bank = new Bank(req.body);
    bank.user = req.params.id;
    bank.save((err, bank) => {
            if (err) {
                console.log('There was an error', err);
            }
            res.json(bank);
        });
  }
};
