App.controller('vaultCtrl', vaultController);

vaultController.$inject = ['$http'];

function vaultController($http) {
    var vault = this;
    console.log('vaultCtrl is working');

    vault.payload = {};

    //GET USER VAULT INFO 
    vault.get = function() {
        $http.get('/myvault').then(function(res) {
            console.log('User Vault', res.data);
            vault.data = res.data;
        }, function(err) {
            if (err) {
                console.log(err);
            }
        });
    };

    vault.get();

    vault.addwebsite = {
        submit: function() {
            $http.post('/addwebsite', vault.payload).then(vault.addwebsite.success, vault.addwebsite.error);
        },
        success: function(res) {
            alertify.success("Successfully added a book");
            vault.payload = {};
            console.log('Account Created', res.data);
        },
        error: function(err) {
            alertify.error("Unable to create account! Please try again!");
            console.error('No Go', err);
        }
    };

    vault.addpodcast = {
        submit: function() {
            $http.post('/addpodcast', vault.payload).then(vault.addpodcast.success, vault.addpodcast.error);
        },
        success: function(res) {
            alertify.success("Successfully added a podcast");
            vault.payload = {};
            console.log('Podcast Created', res.data);
        },
        error: function(err) {
            alertify.error("Unable to create account! Please try again!");
            console.error('No Go', err);
        }
    };

    vault.addbook = {
        submit: function() {
            $http.post('/addbook', vault.payload).then(vault.addpodcast.success, vault.addpodcast.error);
        },
        success: function(res) {
            alertify.success("Successfully added a book");
            vault.payload = {};
            console.log('Book Created', res.data);
        },
        error: function(err) {
            alertify.error("Unable to create account! Please try again!");
            console.error('No Go', err);
        }
    };

    vault.create = {
        submit: function() {
            $http.post('/addvault', vault.payload).then(vault.create.success, vault.create.error);
        },
        success: function(res) {
            alertify.success("Successfully added Vault");
            vault.payload = {};
            console.log('Account Created', res.data);
        },
        error: function(err) {
            alertify.error("Unable to create account! Please try again!");
            console.error('No Go', err);
        }
    };

}
