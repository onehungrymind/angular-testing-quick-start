angular.module('myApp.experiments', [
    'ui.router',
    'myApp.models.messages'
])
    .config(function ($stateProvider) {
        $stateProvider
            .state('experiments', {
                url: '/experiments',
                templateUrl: 'app/experiments/experiments.tmpl.html',
                controller: 'ExperimentsCtrl as experiments'
            })
        ;
    })
    .controller('ExperimentsCtrl', function (Messages, Experiments) {
        var experiments = this;
        experiments.title = 'Experiments Page';
        experiments.body = 'This is the about experiments body';

        experiments.message = Messages.getMessage();

        Experiments.getExperiments()
            .then(function(result){
                experiments.experiments = result.data;
            });

        experiments.updateMessage = function (m) {
            Messages.setMessage(m);
        };
    })
    .service('Experiments', function ($http) {
        var service = this;

        service.getExperiments = function() {
            return $http.get('data/experiments.json');
        };
    })
    .directive('experiment', function(){
        var linker = function (scope, element, attrs) {
            element.on('click', function(){
                scope.doExperiment();
            })
        };

        var controller =  function($scope){
            $scope.doExperiment = function() {
                $scope.$apply(function(){
                    $scope.experiment.completed++;
                });
            };
        };

        return {
            scope: true,
            restrict: 'E',
            template: '<div class="experiment">' +
            '<h3>{{experiment.name}}</h3>' +
            '<p>{{experiment.description}}</p>' +
            '<p><strong>{{experiment.completed}}</strong></p>' +
            '</div>',
            link: linker,
            controller: controller
        }
    })
;