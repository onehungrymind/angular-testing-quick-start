(function ()
{
    angular.module('myApp.home', ['myApp.models.messages']).controller('HomeCtrl', function (Messages)
    {
        var home = this;
        home.title = 'Home Page';
        home.body = 'This is the about home body';

        home.message = Messages.getMessage();

        home.updateMessage = function (m)
        {
            Messages.setMessage(m);
        };
    });
})();

