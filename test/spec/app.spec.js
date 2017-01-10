ddescribe('Unit: App', function ()
{
    beforeEach(module('myApp'));
    beforeEach(module('myApp.about'));
    beforeEach(module('myApp.experiments'));
    beforeEach(module('myApp.home'));
    beforeEach(module('myApp.models.messages'));

    describe('App Abstract Route', function ()
    {
        var route;
        var rootScope;

        beforeEach(inject(function (_$route_, $templateCache, _$rootScope_)
        {
            route = _$route_;
            rootScope = _$rootScope_;
            // $templateCache.put('app/home/home.tmpl.html', '');
        }));

        it('verifies state configuration', function ()
        {
            console.log(route);
            expect(route.routes['/'].controller).toBe('MainCtrl');
        });
    });
});
