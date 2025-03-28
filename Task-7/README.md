# Real-time Chat Simulation

## Overview
This project is a **Real-time Chat Simulation** that mimics a chat application interface. Users can send messages, and the application simulates automated replies. Messages are stored in session storage to persist during the session, and the chat interface dynamically updates to display the conversation.

---

## Features
- **Real-time Messaging**:
  - Users can send messages, and the application simulates automated replies.
- **Session Storage**:
  - Messages are stored in session storage to persist during the session.
- **Dynamic UI Updates**:
  - The chat interface updates dynamically to display new messages.
- **Responsive Design**:
  - Adapts to various screen sizes for a seamless user experience.
- **Auto-reply Simulation**:
  - Simulates bot responses with random messages after a short delay.

---

## File Structure
```
Task-7/
├── index.html   # HTML file
├── styles.css   # CSS file
└── script.js    # JavaScript file
```

---
## Workflow

### 1. **HTML Structure**
- **Sidebar**:
  - Displays a list of users with their names, profile pictures, and last message.
- **Chat Section**:
  - Contains the chat header, message area, and input field for sending messages.
- **Footer**:
  - Includes an input field for typing messages and a send button.

### 2. **CSS Styling**
- **Chat Interface**:
  - Clean and modern design with a sidebar and chat window.
  - Styled messages with distinct alignment for user and bot messages.
- **Responsive Design**:
  - Adjusts layout and font sizes for smaller screens.

### 3. **JavaScript Functionality**
- **Message Rendering**:
  - Retrieves messages from session storage and dynamically displays them in the chat window.
- **Send Message**:
  - Adds user messages to session storage and updates the chat interface.
- **Auto-reply**:
  - Simulates bot responses with random messages after a 2-second delay.
- **Session Storage**:
  - Stores all messages (user and bot) in session storage to persist during the session.

---