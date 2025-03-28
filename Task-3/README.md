# Image Gallery with Lightbox

## Overview
This project is an **Image Gallery with Lightbox** functionality built using HTML, CSS, and JavaScript. The gallery allows users to view images in a lightbox with navigation controls for a seamless and interactive experience.

---

## Features
- **Image Gallery**:
  - Displays a grid of thumbnail images.
  - Hover effect on thumbnails for interactivity.
- **Lightbox**:
  - Opens a full-screen modal to display the selected image.
  - Includes navigation buttons to view the previous and next images.
  - Displays adjacent images as previews.
- **Smooth Animations**:
  - Transition effects for navigating between images.
  - Hover effects for buttons and thumbnails.
- **Responsive Design**:
  - Adapts to various screen sizes, ensuring usability on mobile devices.

---

## File Structure
```
Task-2/
├── index.html   # HTML file
├── styles.css   # CSS file
└── script.js    # JavaScript
```

---

## Workflow

### 1. **HTML Structure**
- **Gallery**:
  - A `<div class="gallery">` contains multiple `<img>` elements for thumbnails.
- **Lightbox**:
  - A `<div id="lightbox" class="lightbox">` displays the selected image in a modal.
  - Includes navigation buttons (`<button id="prev">` and `<button id="next">`) and a close button (`<span id="close">`).

### 2. **CSS Styling**
- **Gallery**:
  - Styled with Flexbox for a responsive grid layout.
  - Thumbnails have hover effects for interactivity.
- **Lightbox**:
  - Styled as a full-screen modal with a dark background overlay.
  - Includes smooth transitions for opening and closing.
  - Navigation buttons and close button are styled for better usability.

### 3. **JavaScript Functionality**
- **Opening the Lightbox**:
  - Clicking a thumbnail opens the lightbox with the selected image.
- **Navigating Images**:
  - Previous and next buttons allow navigation through the gallery.
  - Adjacent images are displayed as previews.
- **Closing the Lightbox**:
  - Clicking the close button or the background overlay closes the lightbox.
- **Smooth Animations**:
  - Animations are applied when navigating between images.

---