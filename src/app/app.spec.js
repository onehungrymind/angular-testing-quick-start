describe('Unit: App', function () {
    beforeEach(module('myApp'));
    beforeEach(module('myApp.about'));
    beforeEach(module('myApp.experiments'));
    beforeEach(module('myApp.home'));
    beforeEach(module('myApp.models.messages'));
    beforeEach(module('ui.router'));

    describe('App Abstract Route', function () {
        var $state,
            $rootScope,
            state = 'app';

        beforeEach(inject(function (_$state_, $templateCache, _$rootScope_) {
            $state = _$state_;
            $rootScope = _$rootScope_;
            $templateCache.put('app/home/home.tmpl.html', '');
        }));

        it('verifies state configuration', function () {
            var config = $state.get(state);
            expect(config.abstract).toBeTruthy();
            expect(config.url).toBeUndefined();
        });
    });
});
