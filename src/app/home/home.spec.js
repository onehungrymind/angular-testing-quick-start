describe('Unit: Home', function () {
    var ctrl, messages;

    beforeEach(module('myApp.home'));
    beforeEach(module('myApp.models.messages'));
    beforeEach(module('ui.router'));

    beforeEach(inject(function ($controller, _Messages_) {
        messages = _Messages_;

        spyOn(messages, 'setMessage');
        spyOn(messages, 'getMessage').and.returnValue('Hello!');

        ctrl = $controller('HomeCtrl', {
            Messages: messages
        });
    }));

    describe('HomeCtrl', function () {
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