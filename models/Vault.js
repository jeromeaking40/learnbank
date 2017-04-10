const mongoose = require('mongoose'),
    User = require('../models/User'),
    WebsiteSchema = require('../models/WebsiteSchema'),
    BookSchema = require('../models/BookSchema'),
    PodcastSchema = require('../models/PodcastSchema'),
    Schema = mongoose.Schema;

const VaultSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    websites: [WebsiteSchema],
    books: [BookSchema],
    podcasts: [PodcastSchema]
});

const Vault = mongoose.model('Vault', VaultSchema);
module.exports = Vault;
