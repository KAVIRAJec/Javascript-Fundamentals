# Simple Calculator

## Overview
This project is a **Simple Calculator** built using HTML, CSS, and JavaScript. The calculator allows users to perform basic arithmetic operations such as addition, subtraction, multiplication, and division. It features a clean and responsive design, with interactive buttons and error handling for invalid inputs.

---

## Features
- **Basic Arithmetic Operations**:
  - Perform addition, subtraction, multiplication, and division.
- **Clear Input**:
  - Reset the input field to "0" using the "C" button.
- **Error Handling**:
  - Displays "Error" for invalid mathematical expressions.
- **Responsive Design**:
  - The calculator is styled for a clean and user-friendly experience on all devices.
- **Interactive Buttons**:
  - Buttons have hover effects and scale animations for better user interaction.

---

## File Structure
```
Task-2/
├── index.html   # HTML file for the calculator
├── styles.css   # CSS file for styling the calculator
└── script.js    # JavaScript file for calculator functionality
```

---

## Workflow

### 1. **HTML Structure**
- **Input Field**:
  - Displays the current input or result.
- **Buttons**:
  - Includes buttons for numbers (0-9), operators (+, -, *, /), a decimal point, a clear button (C), and an equals button (=).

### 2. **CSS Styling**
- **Calculator Layout**:
  - Styled with Flexbox and Grid for a responsive and centered layout.
- **Button Styles**:
  - Buttons have rounded corners, hover effects, and scale animations.
- **Input Field**:
  - Styled for a clean and modern look, with right-aligned text.

### 3. **JavaScript Functionality**
- **Appending Values**:
  - The `append(value)` function adds numbers or operators to the input field.
- **Clearing Input**:
  - The `clearInput()` function resets the input field to "0".
- **Calculating Results**:
  - The `calculate()` function evaluates the mathematical expression in the input field and displays the result. It calculate using `eval()` function.
  - If the expression is invalid, it displays "Error".

---