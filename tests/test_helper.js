const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/learnbank_tests');
mongoose.connection
  .once('open', () => console.log('Good to go!'))
  .on('error', (err) => {
    console.warn('Warning', err);
});
