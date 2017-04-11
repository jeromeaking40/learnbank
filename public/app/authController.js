App.controller('authCtrl', AuthController);

AuthController.$inject = ['$http'];

function AuthController($http) {
    var auth = this;

    auth.payload = {};

    //CREATE NEW USER
    auth.register = {
        submit: function() {
            $http.post('/register', auth.payload).then(auth.register.success, auth.register.error);
        },
        success: function(res) {
            alertify.success("Successfully created account!");
            location.href = '/#/createvault';
            auth.payload = {};
            auth.info();
            console.log('Account Created', res.data);
        },
        error: function(err) {
            alertify.error("Unable to create account! Please try again!");
            console.error('No Go', err);
        }
    };

    // GET INFORMATION ONCE USER LOGS IN
    auth.info = function() {
        $http.get('/api/me').then(function(res) {
            auth.profile = res.data;
            if (res.data._id) {
                auth.signedIn = true;
            } else {
                auth.signedIn = false;
            }
        }, function(err) {
            console.error(err);
        });
    };

    auth.info();

}
