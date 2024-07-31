document.addEventListener('DOMContentLoaded', () => {
    const loginButton = document.getElementById('loginButton');
    const loginPage = document.getElementById('loginPage');
    const mainPage = document.getElementById('mainPage');
    const loginUsernameInput = document.getElementById('loginUsername');
    const loginPasswordInput = document.getElementById('loginPassword');
    const loginError = document.getElementById('loginError');
    const signUpForm = document.getElementById('signUpForm');
    const loginForm = document.getElementById('loginForm');
    const signUpUsernameInput = document.getElementById('signUpUsername');
    const signUpEmailInput = document.getElementById('signUpEmail');
    const signUpPasswordInput = document.getElementById('signUpPassword');
    const signUpButton = document.getElementById('signUpButton');
    const signUpError = document.getElementById('signUpError');
    const forgotPasswordForm = document.getElementById('forgotPasswordForm');
    const forgotPasswordEmailInput = document.getElementById('forgotPasswordEmail');
    const sendOTPButton = document.getElementById('sendOTPButton');
    const otpInput = document.getElementById('otp');
    const newPasswordInput = document.getElementById('newPassword');
    const resetPasswordButton = document.getElementById('resetPasswordButton');
    const forgotPasswordError = document.getElementById('forgotPasswordError');

    const users = JSON.parse(localStorage.getItem('users')) || {};

    function saveUsers() {
        localStorage.setItem('users', JSON.stringify(users));
    }

    let currentUser = '';

    loginButton.addEventListener('click', () => {
        const username = loginUsernameInput.value.trim();
        const password = loginPasswordInput.value.trim();
        if (users[username] && users[username].password === password) {
            loginPage.style.display = 'none';
            mainPage.style.display = 'block';
            socket.emit('userLogin', { username, profilePicture: users[username].profilePicture });
            currentUser = username;
            localStorage.setItem('currentUser', username);
            document.getElementById('welcomeMessage').textContent = `Logged in as ${username}`;
            if (users[username].profilePicture) {
                document.getElementById('profilePicturePreview').src = users[username].profilePicture;
                document.getElementById('profilePicturePreview').style.display = 'block';
            }
            checkAndUpdateStreak(username);
        } else {
            loginError.textContent = 'Invalid username or password';
        }
    });

    signUpButton.addEventListener('click', () => {
        const username = signUpUsernameInput.value.trim();
        const email = signUpEmailInput.value.trim();
        const password = signUpPasswordInput.value.trim();
        if (username && email && password) {
            if (!users[username]) {
                users[username] = { email, password, profilePicture: '', streak: { count: 0, lastLogin: '' } };
                saveUsers();
                signUpError.textContent = 'Sign up successful. Please login.';
                signUpForm.style.display = 'none';
                loginForm.style.display = 'flex';
            } else {
                signUpError.textContent = 'Username already exists';
            }
        } else {
            signUpError.textContent = 'Please fill in all fields';
        }
    });

    sendOTPButton.addEventListener('click', () => {
        const email = forgotPasswordEmailInput.value.trim();
        let userExists = false;
        let userName = "";
        for (const user in users) {
            if (users[user].email === email) {
                userExists = true;
                userName = user;
                break;
            }
        }
        if (userExists) {
            const otp = Math.floor(100000 + Math.random() * 900000);
            users[userName].otp = otp;
            saveUsers();
            console.log(`OTP for ${email}: ${otp}`);
            forgotPasswordError.textContent = 'OTP sent to your email';
            otpInput.style.display = 'block';
            newPasswordInput.style.display = 'block';
            resetPasswordButton.style.display = 'block';
        } else {
            forgotPasswordError.textContent = 'Email not found';
        }
    });

    resetPasswordButton.addEventListener('click', () => {
        const otp = otpInput.value.trim();
        const newPassword = newPasswordInput.value.trim();
        let validOtp = false;
        let userName = "";
        for (const user in users) {
            if (users[user].otp === otp) {
                validOtp = true;
                userName = user;
                break;
            }
        }
        if (validOtp) {
            users[userName].password = newPassword;
            delete users[userName].otp;
            saveUsers();
            forgotPasswordError.textContent = 'Password reset successful. Please login.';
            forgotPasswordForm.style.display = 'none';
            loginForm.style.display = 'flex';
        } else {
            forgotPasswordError.textContent = 'Invalid OTP';
        }
    });

    document.getElementById('showSignUp').addEventListener('click', () => {
        loginForm.style.display = 'none';
        signUpForm.style.display = 'flex';
    });

    document.getElementById('showLogin').addEventListener('click', () => {
        signUpForm.style.display = 'none';
        loginForm.style.display = 'flex';
    });

    document.getElementById('showForgotPassword').addEventListener('click', () => {
        loginForm.style.display = 'none';
        forgotPasswordForm.style.display = 'flex';
    });

    document.getElementById('showLoginFromForgot').addEventListener('click', () => {
        forgotPasswordForm.style.display = 'none';
        loginForm.style.display = 'flex';
    });

    const timerDisplay = document.getElementById('timerDisplay');
    const hoursDisplay = document.getElementById('hours');
    const minutesDisplay = document.getElementById('minutes');
    const secondsDisplay = document.getElementById('seconds');
    const playButton = document.querySelector('.play-button');
    const pauseButton = document.querySelector('.pause-button');
    const resetButton = document.querySelector('.reset-button');
    const liveChatButton = document.getElementById('liveChatButton');
    const chatBox = document.getElementById('chatBox');
    const closeChatButton = document.querySelector('.popup-content .close-button');
    const chatInput = document.querySelector('.chat-input');
    const usersLink = document.getElementById('usersLink');
    const rewardsLink = document.getElementById('rewardsLink');
    const aboutLink = document.getElementById('aboutLink');
    const hourCountButton = document.getElementById('hourCountButton');
    const notifyBreakButton = document.getElementById('notifyBreakButton');
    const streakButton = document.getElementById('streakButton');
    const resourcesButton = document.getElementById('resourcesButton');
    const profileButton = document.getElementById('profileButton');
    const resourceOptions = document.getElementById('resourceOptions');
    const addMusicButton = document.getElementById('addMusicButton');
    const addVideoButton = document.getElementById('addVideoButton');
    const videoInput = document.getElementById('videoInput');
    const videoLink = document.getElementById('videoLink');
    const addVideoLinkButton = document.getElementById('addVideoLinkButton');
    const videoPlayerContainer = document.getElementById('videoPlayerContainer');
    const customVideoPlayer = document.getElementById('customVideoPlayer');
    const closeVideoButton = document.getElementById('closeVideoButton');
    const playPauseButton = document.getElementById('playPauseButton');
    const fullScreenButton = document.getElementById('fullScreenButton');
    const onlineUsersList = document.getElementById('onlineUsersList');
    const sendMessageButton = document.getElementById('sendMessageButton');
    const topicPopup = document.getElementById('topicPopup');
    const toDoList = document.getElementById('toDoList');
    const newTopicInput = document.getElementById('newTopic');
    const addTopicButton = document.getElementById('addTopicButton');
    const topicButton = document.getElementById('topicButton');
    const typingIndicator = document.getElementById('typingIndicator');

    let timerInterval;
    let timer = 0;
    let studyStartTime;

    function updateTimerDisplay() {
        const hours = Math.floor(timer / 3600);
        const minutes = Math.floor((timer % 3600) / 60);
        const seconds = timer % 60;
        hoursDisplay.textContent = String(hours).padStart(2, '0');
        minutesDisplay.textContent = String(minutes).padStart(2, '0');
        secondsDisplay.textContent = String(seconds).padStart(2, '0');
    }

    function startTimer() {
        if (!timerInterval) {
            studyStartTime = new Date();
            timerInterval = setInterval(() => {
                timer++;
                updateTimerDisplay();
                if (timer === 600) {
                    alert("Break le, kitna padhega!");
                }
                socket.emit('updateTimer', { username: currentUser, timer });
            }, 1000);
        }
    }

    function pauseTimer() {
        clearInterval(timerInterval);
        timerInterval = null;
    }

    function resetTimer() {
        clearInterval(timerInterval);
        timerInterval = null;
        timer = 0;
        updateTimerDisplay();
    }

    playButton.addEventListener('click', startTimer);
    pauseButton.addEventListener('click', pauseTimer);
    resetButton.addEventListener('click', resetTimer);

    liveChatButton.addEventListener('click', () => {
        chatBox.style.display = 'block';
    });

    closeChatButton.addEventListener('click', () => {
        chatBox.style.display = 'none';
    });

    chatInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            const message = chatInput.value.trim();
            if (message) {
                socket.emit('chatMessage', { username: currentUser, message });
                chatInput.value = '';
                typingIndicator.style.display = 'none';
            }
        } else {
            socket.emit('typing', { username: currentUser });
        }
    });

    sendMessageButton.addEventListener('click', () => {
        const message = chatInput.value.trim();
        if (message) {
            socket.emit('chatMessage', { username: currentUser, message });
            chatInput.value = '';
        }
    });

    function openPopup(popupId) {
        document.getElementById(popupId).style.display = 'block';
    }

    function closePopup(popupId) {
        document.getElementById(popupId).style.display = 'none';
    }

    document.addEventListener('click', (event) => {
        if (!event.target.closest('.popup') && !event.target.closest('#resourcesButton')) {
            closePopup('resourceOptions');
        }
    });

    usersLink.addEventListener('click', () => {
        socket.emit('requestOnlineUsers');
        openPopup('usersPopup');
    });

    rewardsLink.addEventListener('click', () => openPopup('rewardsPopup'));
    aboutLink.addEventListener('click', () => openPopup('aboutPopup'));
    hourCountButton.addEventListener('click', () => openPopup('hourCountPopup'));
    notifyBreakButton.addEventListener('click', () => openPopup('notifyBreakPopup'));
    streakButton.addEventListener('click', () => openPopup('streakPopup'));
    resourcesButton.addEventListener('click', () => {
        resourceOptions.style.display = 'block';
    });

    addMusicButton.addEventListener('click', () => {
        alert('Add Music functionality coming soon!');
    });

    addVideoButton.addEventListener('click', () => {
        videoInput.style.display = 'block';
    });

    addVideoLinkButton.addEventListener('click', () => {
        const videoLinkValue = videoLink.value.trim();
        if (videoLinkValue) {
            const videoId = getYouTubeVideoId(videoLinkValue);
            if (videoId) {
                const iframe = document.createElement('iframe');
                iframe.src = `https://www.youtube.com/embed/${videoId}`;
                iframe.width = '560';
                iframe.height = '315';
                iframe.frameBorder = '0';
                iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
                iframe.allowFullscreen = true;
                videoPlayerContainer.innerHTML = '';
                videoPlayerContainer.appendChild(iframe);
                videoPlayerContainer.style.display = 'block';
            } else {
                alert('Invalid YouTube link');
            }
        }
    });

    function getYouTubeVideoId(url) {
        const regex = /(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
        const match = url.match(regex);
        return match ? match[1] : null;
    }

    closeVideoButton.addEventListener('click', () => {
        videoPlayerContainer.style.display = 'none';
        videoPlayerContainer.innerHTML = '';
    });

    profileButton.addEventListener('click', () => openPopup('profilePopup'));

    document.getElementById('profilePicture').addEventListener('change', (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                document.getElementById('profilePicturePreview').src = e.target.result;
                document.getElementById('profilePicturePreview').style.display = 'block';
                if (currentUser) {
                    users[currentUser].profilePicture = e.target.result;
                    saveUsers();
                    socket.emit('updateProfilePicture', { username: currentUser, profilePicture: e.target.result });
                }
            };
            reader.readAsDataURL(file);
        }
    });

    document.getElementById('profileForm').addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Profile saved!');
        closePopup('profilePopup');
    });

    topicButton.addEventListener('click', () => {
        openPopup('topicPopup');
    });

    addTopicButton.addEventListener('click', () => {
        const newTopic = newTopicInput.value.trim();
        if (newTopic) {
            const listItem = document.createElement('li');
            listItem.textContent = newTopic;
            listItem.addEventListener('click', () => {
                listItem.classList.toggle('completed');
            });
            toDoList.appendChild(listItem);
            newTopicInput.value = '';
        }
    });

    window.closePopup = closePopup;

    window.sendNotification = (message) => {
        socket.emit('sendNotification', { message, username: currentUser });
    };

    window.sendCustomMessage = () => {
        const customMessage = document.getElementById('customMessage').value.trim();
        if (customMessage) {
            window.sendNotification(customMessage);
        } else {
            alert('Please enter a custom message.');
        }
    };

    const socket = io();

    socket.on('onlineUsers', (users) => {
        onlineUsersList.innerHTML = users.map(user => `<li>${user} <button onclick="viewProfile('${user}')">View Profile</button></li>`).join('');
    });

    socket.on('chatMessage', (data) => {
        const messageElement = document.createElement('div');
        messageElement.classList.add('chat-message');
        messageElement.innerHTML = `<span>${data.username}: ${data.message}</span><time>${new Date().toLocaleTimeString()}</time>`;
        document.querySelector('.chat-messages').appendChild(messageElement);
        document.querySelector('.chat-messages').scrollTop = document.querySelector('.chat-messages').scrollHeight;
    });

    socket.on('typing', (data) => {
        typingIndicator.style.display = 'block';
        setTimeout(() => {
            typingIndicator.style.display = 'none';
        }, 1000);
    });

    socket.on('receiveNotification', (data) => {
        alert(`${data.username} says: ${data.message}`);
    });

    socket.on('updateUserTimers', (userTimers) => {
        const userTimersList = document.getElementById('userTimersList');
        userTimersList.innerHTML = '';
        for (const [username, timer] of Object.entries(userTimers)) {
            const timerElement = document.createElement('li');
            timerElement.textContent = `${username}: ${timer}`;
            userTimersList.appendChild(timerElement);
        }
    });

    window.viewProfile = (username) => {
        const user = users[username];
        if (user) {
            const profilePicture = user.profilePicture || 'default-profile.png';
            document.getElementById('profilePicturePreview').src = profilePicture;
            document.getElementById('profilePicturePreview').style.display = 'block';
            openPopup('profilePopup');
        }
    };

    const modeToggle = document.getElementById('modeToggle');
    const modeIcon = document.getElementById('modeIcon');
    const currentMode = localStorage.getItem('mode') || 'light';

    const applyMode = (mode) => {
        document.body.classList.toggle('dark-mode', mode === 'dark');
        document.querySelectorAll('header, footer, aside, .popup').forEach(el => {
            el.classList.toggle('dark-mode', mode === 'dark');
        });
        document.querySelectorAll('nav ul li a, .site-name, .tagline, .resources h2, .popup-content h3').forEach(el => {
            el.classList.toggle('dark-mode', mode === 'dark');
        });
        modeIcon.textContent = mode === 'dark' ? '🌜' : '🌞';
        localStorage.setItem('mode', mode);
    };

    modeToggle.addEventListener('click', () => {
        const newMode = document.body.classList.contains('dark-mode') ? 'light' : 'dark';
        applyMode(newMode);
    });

    applyMode(currentMode);

    // Additional Functions for Streak
    function checkAndUpdateStreak(username) {
        const today = new Date().toISOString().split('T')[0];
        const userStreak = users[username].streak;

        if (userStreak.lastLogin !== today) {
            const yesterday = new Date();
            yesterday.setDate(yesterday.getDate() - 1);
            const yesterdayStr = yesterday.toISOString().split('T')[0];

            if (userStreak.lastLogin === yesterdayStr) {
                userStreak.count++;
            } else {
                userStreak.count = 1;
            }
            userStreak.lastLogin = today;
            saveUsers();
        }

        const streakPopup = document.getElementById('streakPopup');
        const streakCalendar = document.getElementById('streakCalendar');
        streakCalendar.textContent = `Your current streak is: ${userStreak.count} days.`;
        streakPopup.style.display = 'block';
    }

    streakButton.addEventListener('click', () => {
        const username = localStorage.getItem('currentUser');
        if (username) {
            checkAndUpdateStreak(username);
        }
    });
});
