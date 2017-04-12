App.controller('vaultCtrl', vaultController);

vaultController.$inject = ['$http'];

function vaultController($http) {
    var vault = this;
    console.log('vaultCtrl is working');

    vault.websites = [];
    vault.podcasts = [];
    vault.books = [];

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

    //ADD WEBSITE
    vault.addwebsite = {
        submit: function() {
            vault.websites.push(vault.website);
            $http.post('/addwebsite', vault.websites).then(vault.addwebsite.success, vault.addwebsite.error);
        },
        success: function(res) {
            alertify.success("Successfully added a website");
            vault.addedwebsite = res.data;
            console.log("Adding website..", vault.addedwebsite);
        },
        error: function(err) {
            alertify.error("Unable to add website! Please try again!");
            console.error('No Go', err);
        }
    };

    //ADD PODCAST
    vault.addpodcast = {
        submit: function() {
            vault.podcasts.push(vault.podcast);
            $http.post('/addpodcast', vault.podcasts).then(vault.addpodcast.success, vault.addpodcast.error);
        },
        success: function(res) {
            alertify.success("Successfully added a podcast");
            vault.payload = {};
            console.log('Podcast Created', res.data);
        },
        error: function(err) {
            alertify.error("Unable to add podcast! Please try again!");
            console.error('No Go', err);
        }
    };

    //ADD BOOK
    vault.addbook = {
        submit: function() {
            vault.books.push(vault.book);
            $http.post('/addbook', vault.books).then(vault.addbook.success, vault.addbook.error);
        },
        success: function(res) {
            alertify.success("Successfully added a book");
            vault.payload = {};
            console.log('Book Created', res.data);
        },
        error: function(err) {
            alertify.error("Unable to add a book! Please try again!");
            console.error('No Go', err);
        }
    };

    //CREATE VAULT
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

    //DELETE WEBSITE
    vault.deleteWebsite = function($index) {
        var deleteWebsite = alertify.confirm("Are you sure you want to delete this website?", function() {
            $http({
                method: 'PUT',
                url: '/deletewebsite',
                data: {
                    websites: vault.data.websites[$index]
                }
            }).then(function(res) {
                console.log(res.data);
                vault.data.websites.splice($index, 1);
            }, function(err) {
                // DO NOT FORGET!!!! A ERROR CALLBACK
                console.error(err);
            });
            console.log("Deleted website");
            alertify.success('Website was deleted.');
        }, function() {
            alertify.error('Cancel');
        });
    };

    //DELETE PODCAST
    vault.deletePodcast = function($index) {
        var deletePodcast = alertify.confirm("Are you sure you want to delete this podcast", function() {
            $http({
                method: 'PUT',
                url: '/deletepodcast',
                data: {
                    podcasts: vault.data.podcasts[$index]
                }
            }).then(function(res) {
                console.log(res.data);
                vault.data.podcasts.splice($index, 1);
            }, function(err) {
                // DO NOT FORGET!!!! A ERROR CALLBACK
                console.error(err);
            });
            console.log("Deleted podcast");
            alertify.success('Podcast was deleted.');
        }, function() {
            alertify.error('Cancel');
        });
    };

    //DELETE BOOK
    vault.deleteBook = function($index) {
        var deleteBook = alertify.confirm("Are you sure you want to delete this book", function() {
            $http({
                method: 'PUT',
                url: '/deletebook',
                data: {
                    books: vault.data.books[$index]
                }
            }).then(function(res) {
                console.log(res.data);
                vault.data.books.splice($index, 1);
            }, function(err) {
                // DO NOT FORGET!!!! A ERROR CALLBACK
                console.error(err);
            });
            console.log("Deleted book");
            alertify.success('Book was deleted.');
        }, function() {
            alertify.error('Cancel');
        });
    };

}
