# Drag and Drop Sortable List

## Overview
This project implements a **Drag and Drop Sortable List** using the HTML5 Drag and Drop API. Users can reorder items in a list by dragging and dropping them into their desired positions. The application provides smooth visual feedback during drag operations and updates the DOM to reflect the new order.

---

## Features
- **Drag and Drop Functionality**:
  - Allows users to reorder list items by dragging and dropping.
- **Visual Feedback**:
  - Highlights the item being dragged and potential drop targets.
- **Dynamic DOM Updates**:
  - Updates the list order in real-time after a drop operation.
- **Responsive Design**:
  - Adapts to various screen sizes for a seamless user experience.

---

## File Structure
```
Task-6/
├── index.html   # HTML file for the calculator
├── styles.css   # CSS file for styling the calculator
└── script.js    # JavaScript file for calculator functionality
```

## Workflow

### 1. **HTML Structure**
- **Container**:
  - A `<div class="container-item">` contains multiple `<li>` elements representing the list items.
  - Each list item has the `draggable="true"` attribute to enable drag-and-drop functionality.

### 2. **CSS Styling**
- **List Items**:
  - Styled with rounded corners, background color, and hover effects.
  - The `dragging` class reduces opacity for the item being dragged.
- **Responsive Design**:
  - Adjusts the container width for smaller screens.

### 3. **JavaScript Functionality**
- **Drag Events**:
  - `dragstart`: Adds the `dragging` class to the item being dragged.
  - `dragend`: Removes the `dragging` class after the drag operation.
  - `dragover`: Determines the position of the dragged item relative to other items and updates the DOM accordingly.
- **Reordering Logic**:
  - Uses the `clientY` position of the mouse to find the closest item and inserts the dragged item before it.

---