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
            socket.emit('userLogin', { username });
            currentUser = username;
            localStorage.setItem('currentUser', username);
            document.getElementById('welcomeMessage').textContent = `Logged in as ${username}`;
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
                users[username] = { email, password };
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
            // This would actually be sent from the server
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
    const embeddedVideoPlayer = document.getElementById('embeddedVideoPlayer');
    const closeVideoButton = document.getElementById('closeVideoButton');
    const onlineUsersList = document.getElementById('onlineUsersList');
    const sendMessageButton = document.getElementById('sendMessageButton');
    const topicPopup = document.getElementById('topicPopup');
    const toDoList = document.getElementById('toDoList');
    const newTopicInput = document.getElementById('newTopic');
    const addTopicButton = document.getElementById('addTopicButton');
    const topicButton = document.getElementById('topicButton');

    let timerInterval;
    let timer = 0;

    function updateTimerDisplay() {
        const hours = Math.floor(timer / 3600);
        const minutes = Math.floor((timer % 3600) / 60);
        const seconds = timer % 60;
        hoursDisplay.textContent = String(hours).padStart(2, '0');
        minutesDisplay.textContent = String(minutes).padStart(2, '0');
        secondsDisplay.textContent = String(seconds).padStart(2, '0');
    }

    function startTimer() {
        timerInterval = setInterval(() => {
            timer++;
            updateTimerDisplay();
            socket.emit('updateTimer', { username: currentUser, timer });
        }, 1000);
    }

    function pauseTimer() {
        clearInterval(timerInterval);
    }

    function resetTimer() {
        clearInterval(timerInterval);
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
            }
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
            if (videoLinkValue.includes('youtube.com') || videoLinkValue.includes('youtu.be')) {
                const videoId = videoLinkValue.split('v=')[1] || videoLinkValue.split('/').pop();
                const embedLink = `https://www.youtube.com/embed/${videoId}`;
                embeddedVideoPlayer.src = embedLink;
                videoPlayerContainer.style.display = 'block';
            } else {
                alert('Please enter a valid YouTube link.');
            }
        }
    });

    closeVideoButton.addEventListener('click', () => {
        videoPlayerContainer.style.display = 'none';
        embeddedVideoPlayer.src = '';
    });

    profileButton.addEventListener('click', () => openPopup('profilePopup'));

    document.getElementById('profilePicture').addEventListener('change', (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                document.getElementById('profilePicturePreview').src = e.target.result;
                document.getElementById('profilePicturePreview').style.display = 'block';
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
        socket.emit('sendNotification', { message });
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
        messageElement.textContent = `${data.username}: ${data.message}`;
        document.querySelector('.chat-messages').appendChild(messageElement);
    });

    socket.on('receiveNotification', (data) => {
        alert(data.message);
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
        // Fetch and display the profile details of the user
        alert(`Viewing profile of ${username}`);
    };

    // Dark mode functionality
    const modeToggle = document.getElementById('modeToggle');
    const modeIcon = document.getElementById('modeIcon');
    const currentMode = localStorage.getItem('mode') || 'light';

    const applyMode = (mode) => {
        document.body.classList.toggle('dark-mode', mode === 'dark');
        document.querySelectorAll('header, footer, aside, .popup').forEach(el => {
            el.classList.toggle('dark-mode', mode === 'dark');
        });
        modeIcon.src = mode === 'dark' ? 'moon-icon.png' : 'sun-icon.png';
        localStorage.setItem('mode', mode);
    };

    modeToggle.addEventListener('click', () => {
        const newMode = document.body.classList.contains('dark-mode') ? 'light' : 'dark';
        applyMode(newMode);
    });

    applyMode(currentMode);
});
