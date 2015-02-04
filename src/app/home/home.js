angular.module('myApp.home', [
    'ui.router',
    'myApp.models.messages'
])
    .config(function ($stateProvider) {
        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'app/home/home.tmpl.html',
                controller: 'HomeCtrl as home'
            })
        ;
    })
    .controller('HomeCtrl', function (Messages) {
        var home = this;
        home.title = 'Home Page';
        home.body = 'This is the about home body';

        home.message = Messages.getMessage();

        home.updateMessage = function (m) {
            Messages.setMessage(m);
        };
    })
;
