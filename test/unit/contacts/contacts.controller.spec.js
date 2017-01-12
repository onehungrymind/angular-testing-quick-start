ddescribe('HomeCtrl', function ()
{
    var homeCtrl;
    var ContactServiceMock;


    beforeEach(module('app'));

    beforeEach(inject(function ($controller)
    {
        ContactServiceMock = {
            list: function ()
            {
            },
            save: function ()
            {
            },
            delete: function ()
            {
            }
        };

        spyOn(ContactServiceMock, 'list');
        spyOn(ContactServiceMock, 'save');
        spyOn(ContactServiceMock, 'delete');

        homeCtrl = $controller('ContactController', {ContactService: ContactServiceMock});

    }));

    describe('initialization', function ()
    {
        // it('should set title to \'Home Page\'', function ()
        // {
        //     expect(homeCtrl.title).toBe('Home Page');
        // });
        it('should call ContactServiceMock.list', function ()
        {
            expect(ContactServiceMock.list).toHaveBeenCalled();
        })
    });

    // describe('get message', function ()
    // {
    //     it('should call Messages.getMessage', function ()
    //     {
    //         expect(MessagesMock.getMessage).toHaveBeenCalled();
    //     });
    //     it('should set message to \'Mock Message!\'', function ()
    //     {
    //         expect(homeCtrl.message).toBe('Mock Message!');
    //     });
    // });
    //
    // describe('set message ', function ()
    // {
    //     beforeEach(function ()
    //     {
    //         homeCtrl.updateMessage('Ha ha ha')
    //     });
    //     it('should call Messages.setMessage', function ()
    //     {
    //         expect(MessagesMock.setMessage).toHaveBeenCalled();
    //     });
    //     it('should call Messages.setMessage with \`Ha ha ha\` ', function ()
    //     {
    //         expect(MessagesMock.setMessage).toHaveBeenCalledWith('Ha ha ha');
    //     });
    //     it('should set message to \'Ha ha ha\'', function ()
    //     {
    //         expect(homeCtrl.newMessage).toBe('Ha ha ha');
    //     });
    // });
});
