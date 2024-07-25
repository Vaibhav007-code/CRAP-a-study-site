const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const nodemailer = require('nodemailer');
const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(express.static('public')); // Serve static files from the "public" directory

let onlineUsers = [];
let userTimers = {};

io.on('connection', (socket) => {
    console.log('A user connected');

    socket.on('disconnect', () => {
        console.log('A user disconnected');
        const user = onlineUsers.find(user => user.socketId === socket.id);
        if (user) {
            delete userTimers[user.username];
            onlineUsers = onlineUsers.filter(u => u.socketId !== socket.id);
            io.emit('onlineUsers', onlineUsers.map(user => user.username));
            io.emit('updateUserTimers', userTimers);
        }
    });

    socket.on('userLogin', (data) => {
        onlineUsers.push({ socketId: socket.id, username: data.username });
        userTimers[data.username] = 0;
        io.emit('onlineUsers', onlineUsers.map(user => user.username));
        io.emit('updateUserTimers', userTimers);
    });

    socket.on('chatMessage', (data) => {
        io.emit('chatMessage', data);
    });

    socket.on('requestOnlineUsers', () => {
        socket.emit('onlineUsers', onlineUsers.map(user => user.username));
    });

    socket.on('sendNotification', (data) => {
        io.emit('receiveNotification', data);
    });

    socket.on('updateTimer', (data) => {
        userTimers[data.username] = data.timer;
        io.emit('updateUserTimers', userTimers);
    });
});

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'youremail@gmail.com',
        pass: 'yourpassword'
    }
});

app.post('/send-otp', (req, res) => {
    const { email, otp } = req.body;
    const mailOptions = {
        from: 'youremail@gmail.com',
        to: email,
        subject: 'Your OTP Code',
        text: `Your OTP code is ${otp}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).send(error.toString());
        }
        res.status(200).send('OTP sent: ' + info.response);
    });
});

server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
