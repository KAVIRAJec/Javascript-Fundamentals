# Dynamic Quiz Application

## Overview
The **Dynamic Quiz Application** is a web-based quiz platform that dynamically fetches questions and answers from a JSON file. Users can answer multiple-choice questions, and their score is displayed at the end of the quiz. The application is built using HTML, CSS, and JavaScript.

---

## Features
- **Dynamic Question Loading**:
  - Fetches quiz questions, options, and answers from an external JSON file.
- **Multiple-Choice Questions**:
  - Displays four options for each question.
  - Allows users to select an answer.
- **Score Tracking**:
  - Tracks the user's score based on correct answers.
  - Displays the final score at the end of the quiz.
- **Responsive Design**:
  - Adapts to various screen sizes for a seamless user experience.
- **Interactive UI**:
  - Hover effects and smooth transitions for better interactivity.

---

## File Structure
```
Task-5/
├── index.html   # HTML file
├── styles.css   # CSS file
└── script.js    # JavaScript file
└── quiz.json   # JSON data containing the quiz details
```
---
## Workflow

### 1. **HTML Structure**
- **Header**:
  - Displays the title of the quiz.
- **Question Section**:
  - Shows the current question number and the question text.
- **Options Section**:
  - Displays four clickable options for each question.
- **Buttons Section**:
  - Includes a "Next" button to navigate to the next question.

### 2. **CSS Styling**
- **Main Layout**:
  - Centered layout with a clean and modern design.
  - Background image for visual appeal.
- **Options**:
  - Styled with hover effects and smooth transitions.
  - Grid layout for easy readability.
- **Responsive Design**:
  - Adjusts layout and font sizes for smaller screens.

### 3. **JavaScript Functionality**
- **Fetching Quiz Data**:
  - Fetches questions, options, and answers from a `quiz.json` file.
- **Displaying Questions**:
  - Dynamically updates the UI with the current question and options.
- **Answer Verification**:
  - Compares the selected answer with the correct answer.
  - Updates the score if the answer is correct.
- **Quiz Completion**:
  - Displays the final score and hides the options and "Next" button when the quiz is completed.

---