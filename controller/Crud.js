const User = require('../models/User'),
    Vault = require('../models/Vault'),
    Book = require('../models/BookSchema'),
    Website = require('../models/WebsiteSchema'),
    Podcast = require('../models/PodcastSchema');

module.exports = {
    // ADD NEW BOOK
    addBook: (req, res) => {
        var book = new Book(req.body);
        book.save((err, book) => {
            if (err) {
                console.log(err);
            }
            res.json(book);
        });
    },
    //ADD NEW PODCAST
    addPodcast: (req, res) => {
        var podcast = new Podcast(req.body);
        podcast.save((err, podcast) => {
            if (err) {
                console.log(err);
            }
            res.json(podcast);
        });
    },
    //ADD NEW WEBSITE
    addWebsite: (req, res) => {
        var website = new Website(req.body);
        website.save((err, website) => {
            if (err) {
                console.log(err);
            }
            res.json(website);
        });
    },
    //DELETE BOOK
    deleteBook: (req, res) => {
      Vault.findOne({_id: req.params.id})
        website.save((err, website) => {
            if (err) {
                console.log(err);
            }
            res.json(website);
        });
    }
};
