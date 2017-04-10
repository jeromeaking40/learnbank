const Auth = require('./controller/Auth');
const Bank = require('./controller/Bank');
const Crud = require('./controller/Crud');


module.exports = (app) => {
  app.post('/register', Auth.userRegister);
  app.post('/login', Auth.userLogin);
  app.post('/addbank/:id', Bank.addBank);
  app.post('/addbook', Crud.addBook);

};
