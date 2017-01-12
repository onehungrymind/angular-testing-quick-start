// ddescribe('HomeCtrl', function ()
// {
//     var homeCtrl;
//     var MessagesMock;
//     var myMockMethod;
//     beforeEach(module('app'));
//
//     beforeEach(inject(function ($controller)
//     {
//         MessagesMock = {
//             getMessage: function ()
//             {
//                 return 'Mock Message!';
//             },
//             setMessage: function (m)
//             {
//                 return m;
//             }
//         };
//
//         spyOn(MessagesMock, 'getMessage').and.callThrough();
//         spyOn(MessagesMock, 'setMessage').and.callThrough();
//
//         homeCtrl = $controller('HomeCtrl', {Messages: MessagesMock});
//
//     }));
//
//     describe('initialization', function ()
//     {
//         it('should set title to \'Home Page\'', function ()
//         {
//             expect(homeCtrl.title).toBe('Home Page');
//         });
//         it('should set body to \'This is the home body\'', function ()
//         {
//             expect(homeCtrl.body).toBe('This is the home body');
//         });
//     });
//
//     describe('get message', function ()
//     {
//         it('should call Messages.getMessage', function ()
//         {
//             expect(MessagesMock.getMessage).toHaveBeenCalled();
//         });
//         it('should set message to \'Mock Message!\'', function ()
//         {
//             expect(homeCtrl.message).toBe('Mock Message!');
//         });
//     });
//
//     describe('set message ', function ()
//     {
//         beforeEach(function ()
//         {
//             homeCtrl.updateMessage('Ha ha ha')
//         });
//         it('should call Messages.setMessage', function ()
//         {
//             expect(MessagesMock.setMessage).toHaveBeenCalled();
//         });
//         it('should call Messages.setMessage with \`Ha ha ha\` ', function ()
//         {
//             expect(MessagesMock.setMessage).toHaveBeenCalledWith('Ha ha ha');
//         });
//         it('should set message to \'Ha ha ha\'', function ()
//         {
//             expect(homeCtrl.newMessage).toBe('Ha ha ha');
//         });
//     });
// });
