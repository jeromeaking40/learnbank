const User = require('../models/User'),
    Vault = require('../models/Vault');

module.exports = {
    //MAKE NEW BANK
    addVault: (req, res) => {
        let vault = new Vault(req.body);
        vault.user = req.session._id;
        vault.save((err, vault) => {
            if (err) {
                console.log('There was an error', err);
            }
            res.json('You have created a vault for your learn bank! :', vault);
        });
    },
    //GET VAULT
    findVault: (req, res) => {
        Vault.findById(req.params.id, (err, vault) => {
            if (err) {
                console.log(err);
            }
            res.send('Here is your vault', vault);
        });
    }
};
