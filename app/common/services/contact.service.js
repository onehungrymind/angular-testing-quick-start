(function ()
{
    angular.module('app').service('ContactService', function () {
        var uid = 1;
        var contacts = [];

        this.save = function (contact) {
            if (contact.id == null) {
                contact.id = uid++;
                contacts.push(contact);
            } else {

                for (i in contacts) {
                    if (contacts[i].id == contact.id) {
                        contacts[i] = contact;
                    }
                }
            }
        };

        this.get = function (id) {
            for (i in contacts) {
                if (contacts[i].id == id) {
                    return contacts[i];
                }
            }

        };

        this.delete = function (id) {
            for (i in contacts) {
                if (contacts[i].id == id) {
                    contacts.splice(i, 1);
                }
            }
        };

        this.list = function () {
            return contacts;
        }
    });
})();
