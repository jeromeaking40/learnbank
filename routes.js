const Auth = require('./controller/Auth');

module.exports = (app) => {
  app.post('/register', Auth.userRegister);
  app.post('/login', Auth.userLogin);
};
