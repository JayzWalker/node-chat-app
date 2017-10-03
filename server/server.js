/**
 * Created by jayzwalker on 10/3/17.
 */
const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log('New user connected');

    socket.emit('newMessage', {
        from: 'jayz@gmail.com',
        text: 'Hey, I am here',
        createAt: 123
    })
    // socket.emit('newEmail', {
    //     from: 'jayz@gmail.com',
    //     text: 'Hey, I am here',
    //     createAt: 123
    // });

    socket.on('createMessage', newMessage => {
        console.log('Create Message: ', newMessage);
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