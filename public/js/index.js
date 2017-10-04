/**
 * Created by jayzwalker on 10/3/17.
 */
var socket = io();

socket.on('connect', function() {
    console.log('Connected to server');

    // socket.emit('createMessage', {
    //     to: 'meixing@gmail.com',
    //     text: 'Hi, bae'
    // });
});

socket.on('disconnect', function() {
    console.log('Disconnected from server');
});

socket.on('newMessage', function (message) {
    console.log('New Message: ', message)
    var li = jQuery('<li></li>');
    li.text(`${message.from}: ${message.text}`);
    jQuery('#messages').append(li);
})

// socket.emit('createMessage', {
//     from: 'meixing@gmail.com',
//     text: 'Hi, bae'
// }, function(data) {
//     console.log('Got it ', data);
// });


jQuery('#message-form').on('submit', function (event) {
    event.preventDefault();
    socket.emit('createMessage', {
        from: 'User',
        text: jQuery('[name=message]').val()
    }, function () {

    })
});