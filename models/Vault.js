const mongoose = require('mongoose'),
    User = require('../models/User'),
    Schema = mongoose.Schema;

const VaultSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    username: {
      type: String,
      unique: true
    },
    websites: {
      type: Array,
      default: []
    },
    books: {
      type: Array,
      default: [],
    },
    podcasts:  {
      type: Array,
      default: []
    }
});

const Vault = mongoose.model('Vault', VaultSchema);
module.exports = Vault;
