describe('Unit: Home', function () {
    var ctrl, messages;

    beforeEach(module('myApp.home'));
    beforeEach(module('myApp.models.messages'));
    beforeEach(module('ui.router'));

    beforeEach(module(function ($provide) {
        $provide.value('Messages', {
            message: 'Mock Message!',
            getMessage: function () { return this.message; },
            setMessage: function (m) { this.message = m; }
        });
    }));

    beforeEach(inject(function ($controller, _Messages_) {
        messages = _Messages_;

        spyOn(messages, 'setMessage');
        spyOn(messages, 'getMessage').and.callThrough();

        ctrl = $controller('HomeCtrl', {
            Messages: messages
        });
    }));

    describe('Home Route', function () {
        var $state,
            $rootScope,
            state = 'home';

        beforeEach(inject(function (_$state_, $templateCache, _$rootScope_) {
            $state = _$state_;
            $rootScope = _$rootScope_;
            $templateCache.put('app/home/home.tmpl.html', '');
        }));

        it('should respond to URL', function() {
            expect($state.href(state)).toEqual('/home');
        });

        it('should activate the state', function() {
            $state.go(state);
            $rootScope.$digest();
            expect($state.current.name).toBe(state);
        });
    });

    describe('HomeCtrl', function () {
        it('should have title defined', function () {
            expect(ctrl.title).toBeDefined();
        });

        it('should have body defined', function () {
            expect(ctrl.body).toBeDefined();
        });

        it('should call Messages.getMessage', function () {
            expect(messages.getMessage).toHaveBeenCalled();

            expect(ctrl.message).toEqual('Mock Message!');
        });

        it('should call updateMessage on message', function () {
            var message = 'Hello Message';

            ctrl.updateMessage(message);

            expect(messages.setMessage).toHaveBeenCalledWith(message);
        });
    });
});