App.controller('vaultCtrl', vaultController);

vaultController.$inject = ['$http'];

function vaultController($http) {
    var vault = this;
    console.log('vaultCtrl is working');

    vault.payload = {};

    // vault.add = {
    //     submit: function() {
    //         $http.post('/addvault', vault.payload).then(vault.add.success, vault.add.error);
    //     },
    //     success: function(res) {
    //         alertify.success("Successfully added resource");
    //         vault.payload = {};
    //         console.log('Account Created', res.data);
    //     },
    //     error: function(err) {
    //         alertify.error("Unable to create account! Please try again!");
    //         console.error('No Go', err);
    //     }
    // };

    vault.create = {
      submit: function() {
          $http.post('/addvault', vault.payload).then(vault.add.success, vault.add.error);
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
