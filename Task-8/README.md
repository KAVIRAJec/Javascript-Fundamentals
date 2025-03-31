# Single Page Application (SPA) with Hash-based Routing

## Overview
This project is a **Single Page Application (SPA)** that uses hash-based routing to navigate between different views without reloading the page. The application dynamically loads content from individual HTML files based on the current URL hash, providing a seamless user experience.

---

## Features
- **Hash-based Routing**:
  - Navigates between views using the `window.onhashchange` event.
  - Dynamically loads content from separate HTML files.
- **Dynamic Content Loading**:
  - Fetches and displays content for `Home`, `About`, `Product`, and `Contact` pages.
- **404 Error Handling**:
  - Displays an error message if the requested page is not found.
- **Responsive Design**:
  - Adapts to various screen sizes for a consistent user experience.

---

## File Structure

```
Task-8/
├── index.html       # Main HTML file with navigation
├── home.html        # Content for the Home page
├── about.html       # Content for the About page
├── product.html     # Content for the Product page
├── contact.html     # Content for the Contact page
├── styles.css       # CSS file for styling
└── script.js        # JavaScript file for hash-based routing
```

---

## Workflow

### 1. **HTML Structure**
- **Main File (`index.html`)**:
  - Contains the navigation bar with links to different sections (`#home`, `#about`, `#product`, `#contact`).
  - Includes a `div` with the class `content` where dynamic content is loaded.
- **Individual HTML Files**:
  - Each file (`home.html`, `about.html`, `product.html`, `contact.html`) contains the content for its respective section.

### 2. **CSS Styling**
- **Responsive Design**:
  - Ensures the application looks good on both desktop and mobile devices.
- **Consistent Layout**:
  - Provides a clean and modern design for all sections.

### 3. **JavaScript Functionality**
- **Dynamic Content Loading**:
  - The `loadContent` function fetches the appropriate HTML file based on the current hash and loads it into the `content` container.
- **Hash-based Routing**:
  - Listens for `hashchange` and `DOMContentLoaded` events to update the content dynamically.
- **Error Handling**:
  - Displays an error message if the requested HTML file cannot be loaded.
