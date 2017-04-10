const mongoose = require('mongoose'),
    User = require('../models/User'),
    Website = require('../models/WebsiteSchema'),
    BookSchema = require('../models/BookSchema'),
    Podcast = require('../models/PodcastSchema'),
    Schema = mongoose.Schema;

const BankSchema = new Schema({
    websites: [Website],
    books: [BookSchema],
    podcasts: [Podcast],
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
});

const Bank = mongoose.model('Bank', BankSchema);
module.exports = Bank;
