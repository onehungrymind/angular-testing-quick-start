describe('Unit: Experiments', function () {
    var ctrl, messages, experiments;

    beforeEach(module('myApp.experiments'));
    beforeEach(module('myApp.models.messages'));
    beforeEach(module('ui.router'));

    describe('Experiments Route', function () {
        var $state,
            $rootScope,
            state = 'experiments';

        beforeEach(inject(function (_$state_, $templateCache, _$rootScope_) {
            $state = _$state_;
            $rootScope = _$rootScope_;
            $templateCache.put('app/experiments/experiments.tmpl.html', '');
        }));

        it('should respond to URL', function() {
            expect($state.href(state)).to.equal('/experiments');
        });

        it('should activate the state', function() {
            $state.go(state);
            $rootScope.$digest();
            expect($state.current.name).to.equal(state);
        });
    });

    describe('ExperimentsCtrl', function () {
        beforeEach(inject(function ($controller, _Messages_, _Experiments_, $q) {
            messages = _Messages_;
            experiments = _Experiments_;

            sinon.spy(messages, 'setMessage');
            sinon.stub(messages, 'getMessage').returns('Hello!');

            // TODO: Did I do this right?
            sinon.spy(experiments, 'getExperiments', function() {
              var deferred = $q.defer();
              deferred.resolve({data: []});
              return deferred.promise;
            });

            ctrl = $controller('ExperimentsCtrl', {
                Messages: messages,
                Experiments: experiments
            });
        }));

        it('should have title defined', function () {
            expect(ctrl.title).to.exist;
        });

        it('should have body defined', function () {
            expect(ctrl.body).to.exist;
        });

        it('should call Messages.getMessage', function () {
            expect(messages.getMessage).to.have.been.called;

            expect(ctrl.message).to.equal('Hello!');
        });

        it('should call updateMessage on message', function () {
            var message = 'Hello Message';

            ctrl.updateMessage(message);

            expect(messages.setMessage).to.have.been.calledWith(message);
        });
    });

    describe('Experiments Model', function () {
        afterEach(inject(function ($httpBackend) {
            $httpBackend.verifyNoOutstandingExpectation();
            $httpBackend.verifyNoOutstandingRequest();
        }));

        it('Should get experiments', inject(function (Experiments, $httpBackend, $rootScope) {
            var mockResponse = [];
            $httpBackend.when('GET', 'data/experiments.json').respond(mockResponse);

            var promise = Experiments.getExperiments();
            $httpBackend.flush();

            promise.then(function (result) {
                // TODO: For some reason this breaks if I don't use deep.equal
                expect(result.data).to.deep.equal(mockResponse);
            });
            $rootScope.$digest();
        }));
    });

    describe('Experiments Directive', function () {
        var element,
            experiment;

        beforeEach(inject(function ($rootScope, $compile) {
            $rootScope.experiment = {"name": "Experiment 1", "description": "This is an experiment", "completed": 0};
            element = angular.element('<experiment></experiement>');
            $compile(element)($rootScope);
        }));

        it('should increment experiment completed count', function () {
            var localScope = element.scope();

            expect(localScope.experiment.completed).to.equal(0);

            localScope.doExperiment();

            expect(localScope.experiment.completed).to.equal(1);
        });
    })
});