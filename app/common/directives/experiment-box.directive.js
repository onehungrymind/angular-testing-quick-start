(function ()
{
    angular.module('app').directive('experimentBox', function ()
    {
        var linker = function (scope, element, attrs, ctrl)
        {
            element.on('click', function ()
            {
                ctrl.doExperiment();
            })
        };

        var controller = function ($scope)
        {
            var ctrl = this;
            ctrl.doExperiment = function ()
            {
                $scope.$apply(function ()
                {
                    $scope.experiment.completed++;
                });
            };
        };

        return {
            scope: true,
            restrict: 'E',
            templateUrl: '/common/directives/experiment-box.tpl.html',
            link: linker,
            controller: controller,
            controllerAs: 'expBoxCtrl'
        }
    });
})();
