angular.module('myApp.about', [
    'ui.router',
    'myApp.models.messages'
])
    .config(function ($stateProvider) {
        $stateProvider
            .state('about', {
                url: '/about',
                templateUrl: 'app/about/about.tmpl.html',
                controller: 'AboutCtrl as about'
            })
        ;
    })
    .controller('AboutCtrl', function (Messages) {
        var about = this;
        about.title = 'About Page';
        about.body = 'This is the about page body';

        about.message = Messages.getMessage();

        about.updateMessage = function (m) {
            Messages.setMessage(m);
        };
    })
;