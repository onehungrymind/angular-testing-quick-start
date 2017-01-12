fdescribe('ContactService', function ()
{
    var contactService;
    var contacts;

    beforeEach(module('app'));

    beforeEach(inject(function (_ContactService_)
    {
        contactService = _ContactService_;
    }));

    describe('save', function ()
    {
        describe('when contact id doesn\'t exist', function ()
        {
            beforeEach(function ()
            {
                contactService.save({id: null, name: 'Gepard'});
            });
            afterAll(function ()
            {
                contactService.delete(1);
            });

            it('should add new contact', function ()
            {
                expect(contactService.list()).toEqual([{id: 1, name: 'Gepard'}])
            });
        });
        describe('when contact id exists in contacts', function ()
        {
            var notUpdatedContactList;
            var updatedContactList;

            beforeEach(function ()
            {
                notUpdatedContactList = [
                   {id: 1, name: 'Aborygen'}, {id: 2, name: 'Stefan'}
                ];
                updatedContactList = [
                   {id: 1, name: 'Aborygen'}, {id: 2, name: 'Marty'}
                ];
                contactService.save({id: null, name: 'Aborygen'});
                contactService.save({id: null, name: 'Stefan'});
            });

            it('should return list of added contacts', function ()
            {
                expect(contactService.list()).toEqual(notUpdatedContactList)
            });

            it('should update indicated contact', function ()
            {
                contactService.save({id: 2, name: 'Marty'});
                expect(contactService.list()).toEqual(updatedContactList)
            });
        });
    });
});
