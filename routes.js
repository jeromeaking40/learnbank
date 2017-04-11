const Auth = require('./controller/Auth');
const Vault = require('./controller/Vault');
const Crud = require('./controller/Crud');

module.exports = (app) => {
  app.post('/register', Auth.userRegister);
  app.post('/login', Auth.userLogin);
  app.get('/logout', Auth.logout);
  app.get('/api/me', Auth.me);
  app.post('/password/reset', Auth.password.reset);

  app.post('/addvault/', Vault.addVault);
  app.get('/myvault/', Vault.findVault);

  app.post('/addbook', Crud.addBook);
  app.post('/addwebsite', Crud.addWebsite);
  app.post('/addpodcast', Crud.addPodcast);
  app.put('/deletepodcast', Crud.deletePodcast);
  app.put('/deletebook', Crud.deleteBook);
  app.put('/deletewebsite', Crud.deleteWebsite);


};
