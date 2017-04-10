App.controller('mainCtrl', mainController);

mainController.$inject = ['$http'];

function mainController($http) {
    var main = this;

    console.log('mainCtrl is loaded');

}
