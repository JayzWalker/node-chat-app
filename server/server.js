/**
 * Created by jayzwalker on 10/3/17.
 */
const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const {generateMessage} = require('./utils/message');
const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log('New user connected');

    // socket.emit emit to single connection
    // io.emit emit to all connections
    // socket.broadcast.emit broadcast to everyone except sender

    // socket.emit('newMessage', {
    //     from: 'jayz@gmail.com',
    //     text: 'Hey, I am here',
    //     createAt: 123
    // })
    // socket.emit('newEmail', {
    //     from: 'jayz@gmail.com',
    //     text: 'Hey, I am here',
    //     createAt: 123
    // });

    socket.emit('newMessage', generateMessage('Admin', 'Welcome to the chat app'));
    // socket.emit('newMessage', {
    //     from: 'Admin',
    //     text: 'Welcome to the chat app'
    // });
    socket.broadcast.emit('newMessage', generateMessage('Admin', 'New user joined'));
    // socket.broadcast.emit('newMessage', {
    //     from: 'Admin',
    //     text: 'New user joined',
    //     createAt: new Date().getTime()
    // })

    socket.on('createMessage', message => {
        console.log('Create Message: ', message);
        // io.emit('newMessage', {
        //     from: message.from,
        //     text: message.text,
        //     createAt: new Date().getTime()
        // })
        io.emit('newMessage', generateMessage(message.from, message.text));
        // socket.broadcast.emit('newMessage', {
        //     from: message.from,
        //     text: message.text,
        //     createAt: new Date().getTime()
        // });
    });

    socket.on('createEmail', newEmail => {
        console.log('Create email', newEmail);
    })

    socket.on('disconnect', () => {
        console.log('User was disconnected');
    })
})

server.listen(port, () => {
    console.log(`Server started on port ${port}`);
})