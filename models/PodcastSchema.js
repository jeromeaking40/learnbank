const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const PodcastSchema = new Schema({
    title: {
      type: String,
      unique: true
    }
});

module.exports = PodcastSchema;
