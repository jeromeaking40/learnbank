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
            auth.payload = {};
            console.log('Account Created', res.data);
        },
        error: function(err) {
            alertify.error("Unable to create account! Please try again!");
            console.error('No Go', err);
        }
    };
}
