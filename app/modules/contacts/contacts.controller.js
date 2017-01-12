(function ()
{
    angular.module('app').controller('ContactController', function (ContactService)
    {
        var ctrl = this;

        ctrl.newContact = {
            name: 'John',
            email: 'john@john.pl',
            phone: '123456789'
        };

        ctrl.contacts = ContactService.list();

        ctrl.saveContact = function ()
        {
            ContactService.save(ctrl.newContact);
            ctrl.newContact = {};
        };


        ctrl.deleteContact = function (id)
        {
            ContactService.delete(id);
        };

        ctrl.editContact= function (id)
        {
            ctrl.newContact = angular.copy(ContactService.get(id));
        }
    });

})();
