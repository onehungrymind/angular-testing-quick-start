describe('ContactCtrl', function ()
{
    var contactsCtrl;
    var ContactServiceMock;

    var contacts;
    module.sharedInjector();

    beforeAll(module('app'));

    beforeAll(inject(function ($controller, _ContactService_)
    {
        contacts = [{
            name: 'John',
            email: 'john@john.pl',
            phone: '123456789'
        }, {
            name: 'Jack',
            email: 'jack@jack.pl',
            phone: '987654321'
        }];


        //callThrough() - wywołaj orginał
        ContactServiceMock = _ContactService_;
        spyOn(ContactServiceMock, 'list');
        spyOn(ContactServiceMock, 'save');
        spyOn(ContactServiceMock, 'delete');
        spyOn(ContactServiceMock, 'get').and.returnValue(contacts[1]);

        contactsCtrl = $controller('ContactController', {ContactService: ContactServiceMock});

    }));

    describe('initialization', function ()
    {
        it('should set newContact', function ()
        {
            expect(contactsCtrl.newContact).toEqual(contacts[0]);
        });
        it('should call ContactService.list', function ()
        {
            expect(ContactServiceMock.list).toHaveBeenCalled();
        });
        it('should call ContactService.list only once', function ()
        {
            expect(ContactServiceMock.list.calls.count()).toBe(1);
        })
    });

    describe('saveContact', function ()
    {
        beforeAll(function ()
        {
            contactsCtrl.saveContact();
        });
        it('should call ContactService.save', function ()
        {
            expect(ContactServiceMock.save).toHaveBeenCalled();
        });
        it('should call ContactService.save with new contact data', function ()
        {
            expect(ContactServiceMock.save).toHaveBeenCalledWith(contacts[0]);
        });
        it('should clear newContact object', function ()
        {
            expect(contactsCtrl.newContact).toEqual({});
        });
    });

    describe('deleteContact', function ()
    {
        beforeAll(function ()
        {
            contactsCtrl.deleteContact(1);
        });
        it('should call ContactService.delete', function ()
        {
            expect(ContactServiceMock.delete).toHaveBeenCalled();
        });
        it('should call ContactService.delete with contact id', function ()
        {
            expect(ContactServiceMock.delete).toHaveBeenCalledWith(1);
        });

    });
    describe('editContact', function ()
    {
        beforeAll(function ()
        {
            contactsCtrl.editContact(12);
        });

        it('should call ContactService.get', function ()
        {
            expect(ContactServiceMock.get).toHaveBeenCalled();

        });
        it('should call ContactService.get with contact id', function ()
        {
            expect(ContactServiceMock.get).toHaveBeenCalledWith(12);
        });
        it('should set newContact to edited contact data', function ()
        {
            expect(contactsCtrl.newContact).toEqual(contacts[1]);
        });

    });
});
