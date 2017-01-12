(function ()
{
    angular.module('app').controller('ContactController', function (ContactService)
    {
        var ctrl = this;
        ctrl.contacts = ContactService.list();

        ctrl.saveContact = function ()
        {
            ContactService.save(ctrl.newContact);
            ctrl.newContact = {};
        };


        ctrl.delete = function (id)
        {
            ContactService.delete(id);
            if (ctrl.newContact.id == id) {
                ctrl.newContact = {};
            }
        };

        ctrl.edit = function (id)
        {
            ctrl.newContact = angular.copy(ContactService.get(id));
        }
    });

})();
