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

        spyOn(Messages, 'setMessage').and.callThrough();
        spyOn(Messages, 'getMessage').and.callThrough();
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
            expect($state.href(state)).toEqual('/home');
        });

        it('should activate the state', function () {
            $state.go(state);
            $rootScope.$digest();
            expect($state.current.name).toBe(state);
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
            expect(element.find('h1').text()).toBe('Hello');
        });

        it('should have body defined', function () {
            scope.home.body = 'body...';
            render();
            expect(element.find('p').text()).toBe('body...');
        });

        it('should call Messages.getMessage', function () {
            render();
            expect(Messages.getMessage).toHaveBeenCalled();

            ctrl.updateMessage('yo!');
            expect(Messages.setMessage).toHaveBeenCalled();
        });

        it('should call Messages.setMessage when submit is clicked', function () {
            render();
            element.find('input').val('Lukas');
            element.find('input').triggerHandler('input');
            scope.$digest();

            element.find('button').triggerHandler('click');
            scope.$digest();

            expect(Messages.getMessage).toHaveBeenCalled();
            expect(scope.home.message).toEqual('Lukas');
        });

        it('should call updateMessage on message', function () {
            var message = 'Hello Message';

            ctrl.updateMessage(message);

            expect(Messages.setMessage).toHaveBeenCalledWith(message);
        });
    });
});
