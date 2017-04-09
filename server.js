const express = require('express');
const morgan = require('morgan');
const Config = require('./config/database');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Routes = require('./routes');
const sessions = require('client-sessions')({
    cookieName: 'learnbank-session', // front-end cookie name, currently pulled from package.json, feel free to change
    secret: 'F1ND@0N3', // the encryption password : keep this safe
    requestKey: 'session', // req.session,
    duration: (86400 * 1000) * 7, // one week in milliseconds
    cookie: {
        ephemeral: false, // when true, cookie expires when browser is closed
        httpOnly: true, // when true, the cookie is not accesbile via front-end JavaScript
        secure: false // when true, cookie will only be read when sent over HTTPS
    }
});
// encrypted cookies!

const app = express();

//MIDDLEWARE
app.use(morgan('dev'));
app.use(sessions);
app.use(bodyParser.urlencoded({extended: true}), bodyParser.json());

//DATABASE CONNECTION
mongoose.connect(Config.database);

//ROUTES
// Routes(app);

//SERVE UP FILES
app.use(express.static('public'));

//SERVER
app.listen(7000, (err, req, res) => {
    if (err) {
        console.error('There was an error: ', err);
        process.exit(1);
    } else {
        console.log('Server is running on port 7000');
    }
});
