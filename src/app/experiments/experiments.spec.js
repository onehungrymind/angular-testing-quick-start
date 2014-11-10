describe('Unit: Experiments', function () {
    var ctrl, messages, experiments, mockResponse;

    beforeEach(module('myApp.experiments'));
    beforeEach(module('myApp.models.messages'));
    beforeEach(module('ui.router'));

    describe('ExperimentsCtrl', function () {
        beforeEach(inject(function ($controller, _Messages_, _Experiments_, $q) {
            messages = _Messages_;
            experiments = _Experiments_;

            spyOn(messages, 'setMessage');
            spyOn(messages, 'getMessage').and.returnValue('Hello!');

            spyOn(experiments,'getExperiments').and.callFake(
                function(){
                    var deferred = $q.defer();
                    deferred.resolve({data:[]});
                    return deferred.promise;
                }
            );

            ctrl = $controller('ExperimentsCtrl', {
                Messages: messages,
                Experiments: experiments
            });
        }));

        it('should have title defined', function () {
            expect(ctrl.title).toBeDefined();
        });

        it('should have body defined', function () {
            expect(ctrl.body).toBeDefined();
        });

        it('should call Messages.getMessage', function () {
            expect(messages.getMessage).toHaveBeenCalled();

            expect(ctrl.message).toEqual('Hello!');
        });

        it('should call updateMessage on message', function () {
            var message = 'Hello Message';

            ctrl.updateMessage(message);

            expect(messages.setMessage).toHaveBeenCalledWith(message);
        });
    });

    describe('Experiments Model', function(){
        afterEach(inject(function($httpBackend) {
            $httpBackend.verifyNoOutstandingExpectation();
            $httpBackend.verifyNoOutstandingRequest();
        }));

        it('Should get experiments', inject(function(Experiments, $httpBackend, $rootScope) {
            var mockResponse = [];
            $httpBackend.when('GET', 'data/experiments.json').respond(mockResponse);

            var promise = Experiments.getExperiments();
            $httpBackend.flush();

            promise.then(function(result) {
                expect(result.data).toEqual(mockResponse);
            });
            $rootScope.$digest();
        }));
    });

    describe('Experiments Directive', function(){
        var element,
            experiment;

        beforeEach(inject(function ($rootScope, $compile) {
            $rootScope.experiment = {"name": "Experiment 1", "description": "This is an experiment", "completed":0};
            element = angular.element('<experiment></experiement>');
            $compile(element)($rootScope);
        }));

        it('should increment experiment completed count', function() {
            var localScope = element.scope();

            expect(localScope.experiment.completed).toBe(0);

            localScope.doExperiment();

            expect(localScope.experiment.completed).toBe(1);
        });
    })
});