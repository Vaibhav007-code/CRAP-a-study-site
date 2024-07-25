require('dotenv').config();
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const path = require('path');
const sqlite3 = require('sqlite3').verbose();

// Create and configure the Express app
const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Connect to the SQLite database
const db = new sqlite3.Database(process.env.DATABASE_URL, (err) => {
    if (err) {
        console.error('Failed to connect to the database:', err.message);
    } else {
        console.log('Connected to the SQLite database.');
    }
});

app.use(express.static(path.join(__dirname, 'public'))); // Serve static files from the "public" directory

app.use(bodyParser.json()); // Middleware to parse JSON bodies
app.use(bodyParser.urlencoded({ extended: true })); // Middleware to parse URL-encoded bodies

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

// Catch-all route to serve index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
