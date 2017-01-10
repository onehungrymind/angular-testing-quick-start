describe('Unit: Message Model', function () {
    var messages;

    beforeEach(module('myApp.models.messages'));

    beforeEach(inject(function (_Messages_) {
        messages = _Messages_;
    }));

    it('should get and set a message', function() {
        var message = 'Test Message';

        messages.setMessage(message)

        expect(messages.getMessage()).toEqual(message);
    });
});