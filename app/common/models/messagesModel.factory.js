(function ()
{
    angular.module('app').factory('Messages', function ()
    {
        var message = 'Hello Message';
        var getMessage = function ()
        {
            return message;
        };
        var setMessage = function (m)
        {
            message = m;
            return m;
        };

        return {
            getMessage: getMessage,
            setMessage: setMessage
        }
    });
})();
