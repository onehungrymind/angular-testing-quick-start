(function ()
{
    angular.module('app', ['ngRoute'])
            .config(function ($routeProvider)
            {
                $routeProvider.when('/about', {
                    templateUrl: 'modules/about/about.tpl.html',
                    controller: 'AboutCtrl as about',
                    controllerAs: 'about'
                });
                $routeProvider.when('/experiments', {
                    templateUrl: 'modules/experiments/experiments.tpl.html',
                    controller: 'ExperimentsCtrl',
                    controllerAs: 'experiments'
                });
                $routeProvider.when('/contacts', {
                    templateUrl: 'modules/contacts/contacts.tpl.html',
                    controller: 'ContactController',
                    controllerAs: 'contactCtrl'
                });
                $routeProvider.otherwise({ redirectTo: '/about' });

            });
})();
