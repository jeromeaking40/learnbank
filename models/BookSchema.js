const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const BookSchema = new Schema({
    title: {
      type: String,
      unique: true
    }
});

module.exports = BookSchema;
