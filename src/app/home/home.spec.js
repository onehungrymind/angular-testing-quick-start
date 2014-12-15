describe('Unit: Home', function () {
    var ctrl, Messages;

    beforeEach(module('myAppTemplates'));
    beforeEach(module('myApp.home'));
    beforeEach(module('myApp.models.messages'));
    beforeEach(module('ui.router'));

    beforeEach(module(function ($provide) {
        $provide.value('Messages', {
            message: 'Mock Message!',
            getMessage: function () {
                return this.message;
            },
            setMessage: function (m) {
                this.message = m;
            }
        });
    }));

    beforeEach(inject(function ($controller, _Messages_) {
        Messages = _Messages_;

        sinon.spy(Messages, 'setMessage');
        sinon.spy(Messages, 'getMessage');
    }));

    describe('Home Route', function () {
        var $state,
            $rootScope,
            state = 'home';

        beforeEach(inject(function (_$state_, $templateCache, _$rootScope_) {
            $state = _$state_;
            $rootScope = _$rootScope_;
        }));

        it('should respond to URL', function () {
            expect($state.href(state)).to.equal('/home');
        });

        it('should activate the state', function () {
            $state.go(state);
            $rootScope.$digest();
            expect($state.current.name).to.equal(state);
        });
    });

    describe('home page', function () {
        var element, render, ctrl, scope;
        beforeEach(inject(function ($injector) {

            var routeDetails = compileRouteTemplateWithController($injector, 'home');
            ctrl = routeDetails.controller;
            scope = routeDetails.scope;

            render = function () {
                element = routeDetails.render();
            };
        }));

        it('should render the page title', function () {
            scope.home.title = 'Hello';
            render();
            expect(element.find('h1').text()).to.equal('Hello');
        });

        it('should have body defined', function () {
            scope.home.body = 'body...';
            render();
            expect(element.find('p').text()).to.equal('body...');
        });

        it('should call Messages.getMessage', function () {
            render();
            expect(Messages.getMessage).to.have.been.called;

            ctrl.updateMessage('yo!');
            expect(Messages.setMessage).to.have.been.called;

            expect(scope.home.message).to.equal('yo!');
        });

        it('should call Messages.setMessage when submit is clicked', function () {
            render();
            element.find('input').val('Lukas');
            element.find('input').triggerHandler('input');
            scope.$digest();

            element.find('button').triggerHandler('click');
            scope.$digest();

            expect(Messages.getMessage).to.have.been.called;
            expect(scope.home.message).to.equal('Lukas');
        });

        it('should call updateMessage on message', function () {
            var message = 'Hello Message';

            ctrl.updateMessage(message);

            expect(Messages.setMessage).to.have.been.calledWith(message);
        });
    });
});
