# Interactive To-Do List Application

## Overview
This project is a simple **Interactive To-Do List Application** built using HTML, CSS, and JavaScript. The app allows users to add tasks, mark them as complete, and delete them. Tasks are stored in `localStorage`, ensuring persistence across page reloads.

---

## Features
- **Add Tasks**:
  - Users can add new tasks using an input field and a button.
- **Mark Tasks as Complete**:
  - Tasks can be marked as complete, with a visual indication (strikethrough and color change).
- **Delete Tasks**:
  - Users can remove tasks from the list.
- **Persistent Storage**:
  - Tasks are saved in `localStorage` and reloaded when the page is refreshed.
- **Responsive Design**:
  - The app is styled for a clean and user-friendly experience on all devices.

---

## File Structure
```
Task-1/
├── index.html   # HTML file for the to-do list app
├── styles.css   # CSS file for styling the app
└── script.js    # JavaScript file for app functionality
```

---

## Workflow

### 1. **HTML Structure**
- The app includes:
  - An input field for entering tasks.
  - A button to add tasks.
  - An unordered list to display tasks.

### 2. **CSS Styling**
- The app is styled with:
  - A modern and clean design.
  - Hover effects for buttons.
  - Visual feedback for completed tasks (Change color).

### 3. **JavaScript Functionality**
- **Adding Tasks**:
  - Users can add tasks by typing in the input field and clicking the "Add Task" button or pressing Enter.
- **Marking Tasks as Complete**:
  - Clicking the "✔" button toggles the completion status of a task.
- **Deleting Tasks**:
  - Clicking the "✖" button removes the task from the list.
- **Persistence**:
  - Tasks are saved in `localStorage` and reloaded on page refresh.

---
