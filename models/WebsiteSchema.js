const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const WebsiteSchema = new Schema({
    title: {
      type: String,
      unique: true
    }
});

module.exports = WebsiteSchema;
