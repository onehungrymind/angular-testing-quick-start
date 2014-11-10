angular.module('myApp', [
    'ui.router',
    'myApp.models.messages',
    'myApp.about',
    'myApp.experiments',
    'myApp.home'
])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('app', {
                url: '',
                abstract: true
            })
        ;
        
        $urlRouterProvider.otherwise('/home');
    })
;