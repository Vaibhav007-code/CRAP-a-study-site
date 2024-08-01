/* Existing styles */
body {
  font-family: 'Montserrat', sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f4f4f4;
  color: #333;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

#loginPage {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
}

#loginPage h1, #loginPage h2 {
  margin: 0;
  color: #0C8FCB;
}

#loginPage .logo {
  width: 100px;
  height: auto;
  margin: 20px 0;
}

#loginForm, #signUpForm, #forgotPasswordForm {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 300px;
}

#loginForm h2, #signUpForm h2, #forgotPasswordForm h2 {
  margin-bottom: 20px;
}

#loginForm input, #signUpForm input, #forgotPasswordForm input {
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ddd;
  border-radius: 5px;
}

#loginForm button, #signUpForm button, #forgotPasswordForm button {
  background-color: #0C8FCB;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
}

#loginForm button:hover, #signUpForm button:hover, #forgotPasswordForm button:hover {
  background-color: #0072ff;
}

#loginForm p, #signUpForm p, #forgotPasswordForm p {
  margin-top: 10px;
}

.error-message {
  color: red;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 30px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.logo {
  display: flex;
  align-items: center;
}

.logo img {
  width: 50px;
  height: auto;
  margin-right: 15px;
}

.site-info {
  display: flex;
  flex-direction: column;
}

.site-name {
  font-size: 28px;
  font-weight: bold;
  color: #333;
}

.tagline {
  font-size: 14px;
  color: #666;
}

/* Adjust nav ul for better control over position of elements */
nav ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  gap: 30px;
}

nav ul li {
  display: inline;
}

nav ul li a {
  text-decoration: none;
  color: #333;
  font-weight: bold;
  font-size: 18px;
}

.profile button {
  background-color: #0C8FCB;
  color: white;
  border: none;
  padding: 12px 25px;
  border-radius: 25px;
  cursor: pointer;
  font-size: 18px;
}
.profile button:hover {
  background-color: #45a049;
}

main {
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  padding: 20px 40px;
}

aside {
  flex: 0 0 250px;
  padding: 20px;
  background-color: #fff;
  box-shadow: 2px 0 4px rgba(0, 0, 0, 0.1);
  border-right: 1px solid #ddd;
}

.left-aside {
  margin-right: 20px;
}

.right-aside {
  margin-left: 20px;
}

.resources, .topic-check {
  text-align: left;
}

.resources h2, .topic-check h2 {
  font-size: 24px;
  color: #333;
  margin-bottom: 10px;
}

.resources ul, .topic-check ul {
  list-style: none;
  padding: 0;
}

.resources ul li, .topic-check ul li {
  margin-bottom: 10px;
}

.resources ul li a, .topic-check ul li a {
  text-decoration: none;
  color: #0C8FCB;
  font-weight: bold;
  font-size: 16px;
}

.timer-section {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.timer-section .background-img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
  border-radius: 5px;
}

.timer-display {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 96px;
  color: #fff;
  background: linear-gradient(45deg, #ff8c00, #ff0080);
  padding: 30px 60px;
  border-radius: 20px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  font-family: 'Digital-7', sans-serif;
  text-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
  animation: pulse 1.5s infinite alternate;
}

.timer-controls {
  position: absolute;
  top: calc(50% + 150px);
  display: flex;
  gap: 15px;
}

.timer-controls button {
  background-color: #C165DD;
  color: white;
  border: none;
  padding: 12px 25px;
  border-radius: 12px;
  cursor: pointer;
  font-size: 18px;
  font-weight: bold;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

@keyframes pulse {
  from {
    transform: scale(1);
    box-shadow: 0 0 20px #ff8c00, 0 0 40px #ff0080;
  }
  to {
    transform: scale(1.05);
    box-shadow: 0 0 40px #ff8c00, 0 0 80px #ff0080;
  }
}

/* Existing styles */
body {
  font-family: 'Montserrat', sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f4f4f4;
  color: #333;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

/* Rest of your existing CSS */

#liveChatButton {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #0C8FCB;
  color: white;
  border: none;
  padding: 15px 30px;
  border-radius: 50px;
  cursor: pointer;
  font-size: 18px;
  font-weight: bold;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1000;
}

.chat-box {
  display: none;
  position: fixed;
  bottom: 80px;
  right: 20px;
  width: 300px;
  height: 400px;
  background-color: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #ffffff; /* Solid background color */
}

.chat-header {
  background-color: #0C8FCB;
  color: white;
  padding: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.chat-header button {
  background: none;
  border: none;
  color: white;
  font-size: 20px;
  cursor: pointer;
}

.chat-messages {
  flex: 1;
  padding: 10px;
  overflow-y: auto;
  border-bottom: 1px solid #ddd;
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 300px;
}

.chat-message {
  display: flex;
  flex-direction: column;
}

.chat-message time {
  font-size: 12px;
  color: #666;
}

.chat-input-container {
  display: flex;
  align-items: center;
  padding: 10px;
  border-top: 1px solid #ddd;
  background-color: #f8f8f8;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}

.chat-input {
  flex: 1;
  border: none;
  padding: 10px;
  font-size: 16px;
}

.file-label, #voiceNoteButton, #sendMessageButton, #recordAudioButton, #pauseAudioButton, #stopAudioButton {
  background-color: #0C8FCB;
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 5px;
  cursor: pointer;
  margin: 0 5px;
  font-size: 20px;
}

/* New styles for pop-ups */
.popup {
  display: none;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  max-width: 500px;
  background-color: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  z-index: 1000;
  padding: 20px;
  animation: fadeIn 0.3s ease-in-out;
}

.popup-content {
  position: relative;
}

.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
}

h3 {
  margin-top: 0;
  color: #0C8FCB;
}

button {
  background-color: #0C8FCB;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
  transition: background-color 0.3s ease-in-out;
}

button:hover {
  background-color: #0072ff;
}

input[type="text"], input[type="file"], input[type="email"], input[type="password"] {
  width: 100%;
  padding: 10px;
  margin-top: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

@keyframes fadeIn {
  from {
      opacity: 0;
      transform: translate(-50%, -40%);
  }
  to {
      opacity: 1;
      transform: translate(-50%, -50%);
  }
}

/* Custom styles for profile popup */
#profilePicturePreview {
  display: block;
  margin-top: 10px;
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 50%;
  border: 2px solid #0C8FCB;
}

footer {
  background-color: #fff;
  box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.1);
  padding: 15px 30px;
  text-align: center;
  position: absolute;
  bottom: 0;
  width: 100%;
}

.controls {
  display: flex;
  justify-content: center;
  gap: 20px;
}

.controls button {
  background-color: #0072ff;
  color: white;
  border: none;
  padding: 12px 25px;
  border-radius: 25px;
  cursor: pointer;
  font-weight: bold;
  font-size: 18px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.controls .notify-break {
  background-color: #ff6f61;
}

.controls .streak-button {
  background-color: #0C8FCB;
  color: white;
  border-radius: 25px;
}

.popup {
  display: none;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
}

.popup-content {
  padding: 20px;
}

.popup .close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: #f4f4f4;
  border: none;
  padding: 5px;
  cursor: pointer;
}

.popup .close-button:hover {
  background-color: #ccc;
}

#profilePicturePreview {
  display: block;
  margin: 10px 0;
  max-width: 100%;
  height: auto;
}

#resourcePlayer {
  margin-top: 20px;
}

#resourcePlayer video {
  width: 100%;
  border-radius: 5px;
}

#customVideoPlayer {
  width: 100%;
  border-radius: 5px;
}

.video-controls {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 10px;
}

.control-button {
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
}

/* Add this CSS to your existing style.css file */
#embeddedVideoPlayer {
  width: 100%;
  height: 315px;
}

.popup-content {
  position: relative;
}

#topicPopup input, #topicPopup button {
  width: calc(100% - 20px);
  margin: 10px;
}

#toDoList li.completed {
  text-decoration: line-through;
}

/* Dark mode styles */
body.dark-mode {
  background-color: #121212;
  color: #e0e0e0;
}

header.dark-mode, footer.dark-mode, aside.dark-mode, .popup.dark-mode {
  background-color: #1e1e1e;
  color: #e0e0e0;
}

nav ul li a.dark-mode, .site-name.dark-mode, .tagline.dark-mode, .resources h2.dark-mode, .popup-content h3.dark-mode {
  color: #e0e0e0;
}

button.dark-mode {
  background-color: #1a1919;
  color: #e0e0e0;
}

/* Responsive styles */
@media (max-width: 1200px) {
  main {
    flex-direction: column;
  }

  .left-aside, .right-aside {
    flex: 1 0 auto;
    margin: 10px 0;
    border: none;
    box-shadow: none;
  }

  .left-aside {
    margin-right: 0;
  }

  .right-aside {
    margin-left: 0;
  }

  .timer-section {
    margin: 20px 0;
  }
}

@media (max-width: 768px) {
  header {
    flex-direction: column;
    align-items: flex-start;
  }

  .logo {
    margin-bottom: 15px;
  }

  nav ul {
    flex-direction: column;
    align-items: flex-start;
    gap: 15px;
  }

  .profile {
    margin-top: 15px;
  }

  main {
    padding: 10px 20px;
  }

  .timer-display {
    font-size: 72px;
    padding: 20px 40px;
  }

  .timer-controls {
    top: calc(50% + 100px);
  }

  #liveChatButton {
    padding: 10px 20px;
    font-size: 16px;
  }

  .chat-box {
    width: 90%;
    height: 300px;
  }
}

@media (max-width: 480px) {
  .logo img {
    width: 40px;
  }

  .site-name {
    font-size: 22px;
  }

  .tagline {
    font-size: 12px;
  }

  nav ul li a {
    font-size: 16px;
  }

  .profile button {
    padding: 10px 20px;
    font-size: 16px;
  }

  .resources h2, .topic-check h2 {
    font-size: 20px;
  }

  .resources ul li a, .topic-check ul li a {
    font-size: 14px;
  }

  .timer-display {
    font-size: 48px;
    padding: 15px 30px;
  }

  .timer-controls button {
    padding: 10px 20px;
    font-size: 16px;
  }

  .popup {
    width: 90%;
  }

  .popup-content {
    padding: 15px;
  }

  .popup .close-button {
    font-size: 20px;
  }

  .controls button {
    padding: 10px 20px;
    font-size: 16px;
  }
}

/* Typing and Recording Indicators */
#typingIndicator,
#recordingIndicator {
  display: none; /* Initially hidden */
  color: #777;
  font-style: italic;
  margin-left: 10px;
}

#recordAudioButton, #pauseAudioButton, #stopAudioButton {
  display: none; /* Initially hidden */
}

.chat-input-container {
  position: relative;
}

#recordAudioButton, #pauseAudioButton, #stopAudioButton {
  position: absolute;
  right: 10px;
  bottom: 10px;
}
