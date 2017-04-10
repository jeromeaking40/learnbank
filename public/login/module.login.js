angular.module('module.login', []).controller('loginCtrl', LoginController);

LoginController.$inject = ['$http'];

function LoginController($http) {
    var login = this;

    login.payload = {};

    //SEND USER PROFILE IF AUTHENICATED
    login.login = {
        submit: function() {
            $http.post('/login', login.payload).then(login.login.success, login.login.error);
        },
        success: function(res) {
            location.href = '/';
        },
        error: function(err) {
            alertify.alert("LearnBank", "Invalid user or password!");
            console.error(err);
        }
    };
}
