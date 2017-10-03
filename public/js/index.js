/**
 * Created by jayzwalker on 10/3/17.
 */
var socket = io();

socket.on('connect', function() {
    console.log('Connected to server');

    socket.emit('createMessage', {
        to: 'meixing@gmail.com',
        text: 'Hi, bae'
    });
    // socket.emit('createEmail', {
    //     to: 'meixing@gmail.com',
    //     text: 'Hi, bae'
    // })
});

socket.on('disconnect', function() {
    console.log('Disconnected from server');
});

socket.on('newEmail', function (email) {
   console.log('New email', email);
});

socket.on('newMessage', function (message) {
    console.log('New Message: ', message)
})