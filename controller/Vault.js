const User = require('../models/User'),
    Vault = require('../models/Vault');

module.exports = {
    //MAKE NEW VAULT
    addVault: (req, res) => {
        let vault = new Vault(req.body);
        vault.user = req.session._id;
        vault.save((err, vault) => {
            if (err) {
                console.log('There was an error', err);
            }
            res.json(vault);
        });
    },
    //GET VAULT
    findVault: (req, res) => {
        Vault.findOne({user: req.session._id}).populate('user').exec(function(err, vault) {
            if (err) {
                res.send(err);
            } else {
                res.send(vault);
            }
        });
    }
};
