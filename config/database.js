const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

module.exports = {
    database: 'mongodb://127.0.0.1/learnbank'
  };
