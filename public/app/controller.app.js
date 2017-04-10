App.controller('mainCtrl', mainController);

mainController.$inject = ['$http'];

function mainController($http) {
    var main = this;

    console.log('mainCtrl is loaded');

    //GET INFORMATION ONCE USER LOGS IN
    main.info = function() {
        $http.get('/api/me').then(function(res) {
            main.profile = res.data;
            console.log('Profile', main.profile);
            if (res.data._id) {
                main.signedIn = true;
            } else {
                main.signedIn = false;
            }
        }, function(err) {
            console.error(err);
        });
    };

    main.info();

}
