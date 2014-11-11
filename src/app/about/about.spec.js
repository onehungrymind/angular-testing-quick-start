describe('Unit: About', function () {
    var ctrl, messages;

    beforeEach(module('myApp.about'));
    beforeEach(module('myApp.models.messages'));
    beforeEach(module('ui.router'));

    beforeEach(inject(function ($controller, _Messages_) {
        messages = _Messages_;

        spyOn(messages, 'setMessage');
        spyOn(messages, 'getMessage').and.returnValue('Hello!');

        ctrl = $controller('AboutCtrl', {
            Messages: messages
        });
    }));

    describe('About Route', function () {
        var $state,
            $rootScope,
            state = 'about';

        beforeEach(inject(function (_$state_, $templateCache, _$rootScope_) {
            $state = _$state_;
            $rootScope = _$rootScope_;

            $templateCache.put('app/about/about.tmpl.html', '');
        }));

        it('should respond to URL', function() {
            expect($state.href(state)).toEqual('/about');
        });

        it('should activate the state', function() {
            $state.go(state);
            $rootScope.$digest();
            expect($state.current.name).toBe(state);
        });
    });

    describe('AboutCtrl', function () {
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
});