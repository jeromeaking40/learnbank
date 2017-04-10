const User = require('../models/User'),
    Bank = require('../models/Bank'),
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
    //ADD NEW WEBSITE
    addPodcast: (req, res) => {
        var podcast = new Podcast(req.body);
        podcast.save((err, podcast) => {
            if (err) {
                console.log(err);
            }
            res.json(podcast);
        });
    },
    addWebsite: (req, res) => {
        var website = new Website(req.body);
        website.save((err, website) => {
            if (err) {
                console.log(err);
            }
            res.json(website);
        });
    }
};
