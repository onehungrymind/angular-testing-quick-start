describe('Unit: About', function () {
    var ctrl, messages;

    beforeEach(module('myApp.about'));
    beforeEach(module('myApp.models.messages'));
    beforeEach(module('ui.router'));

    beforeEach(inject(function ($controller, _Messages_) {
        messages = _Messages_;

        sinon.spy(messages, 'setMessage');
        // TODO: Is this right?
        sinon.stub(messages, 'getMessage').returns('Hello!');

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
            expect($state.href(state)).to.equal('/about');
        });

        it('should activate the state', function() {
            $state.go(state);
            $rootScope.$digest();
            expect($state.current.name).to.equal(state);
        });
    });

    describe('AboutCtrl', function () {
        it('should have title defined', function () {
            should.exist(ctrl.title);
        });

        it('should have body defined', function () {
            should.exist(ctrl.body);
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
});