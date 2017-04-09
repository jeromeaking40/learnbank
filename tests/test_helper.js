const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/learnbank_tests');
mongoose.connection
  .once('open', () => console.log('Good to go!'))
  .on('error', (err) => {
    console.warn('Warning', err);
  });
