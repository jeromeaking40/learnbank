angular.module('module.login', []).controller('loginCtrl', LoginController);

LoginController.$inject = ['$http'];

function LoginController($http) {
    var login = this;

    login.payload = {};

    login.reset = {
        active: false,
        success: function(res) {
            alertify.success('Check your email to receive your temporary password!');
            console.log('Success');
        },
        failure: function(err) {
            if (err) {
                alertify.error('There was an error, Please refresh and try again.');
                console.error(err);
            }
        },
        toggle: function() {
            login.reset.active = !login.reset.active;
        }
    };

    login.submit = function() {
        switch (login.reset.active) {
            case false:
                $http.post('/login', login.payload).then(login.success, login.failure);
                break;
            case true:
                $http.post('/password/reset', login.payload).then(login.reset.success, login.reset.failure);
                break;
        }
    };

    login.success = function(res) {
        location.href = '/#/profile';
    };

    login.failure = function(res) {
        alertify.error('Invalid Username or Password');
        login.message = res.data && res.data.message || 'Login failed!';
    };

}
