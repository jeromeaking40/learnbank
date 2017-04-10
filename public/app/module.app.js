var App = angular.module('LearnBank', ['ngRoute'])
  .config([
    '$routeProvider',
      function($routeProvider) {
        $routeProvider
          .when('/', {
            templateUrl: '/app/components/home/home.html',
            controller: 'mainCtrl as main'
          })
          .when('/register', {
              templateUrl: '/app/components/register/register.html',
              controller: 'authCtrl as auth'
          })
          .otherwise({
            redirectTo: '/'
          });

        alertify.defaults = {
            // notifier defaults
            notifier: {
                // // auto-dismiss wait time (in seconds)
                delay: 2.5,
                // default position
                position: 'bottom-left',
                // adds a close button to notifier messages
                closeButton: true
            },
            // language resources
            glossary: {
                // dialogs default title
                title: 'LearnBank',
                // ok button text
                ok: 'OK',
                // cancel button text
                cancel: 'Cancel'
            },
            // theme settings
            theme: {
                // class name attached to prompt dialog input textbox.
                input: 'ajs-input',
                // class name attached to ok button
                ok: 'ajs-ok',
                // class name attached to cancel button
                cancel: 'ajs-cancel'
            }
        };
    }
]);
