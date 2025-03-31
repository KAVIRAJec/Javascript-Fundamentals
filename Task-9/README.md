# Infinite Scroll Posts

## Overview
This project demonstrates an **Infinite Scroll** feature where posts are dynamically loaded as the user scrolls down the page. It uses the `scroll` event to detect when the user reaches the bottom of the page and fetches additional posts from an API. The application also includes a loading animation to indicate when new posts are being fetched.

---

## Features
- **Infinite Scrolling**:
  - Dynamically loads more posts as the user scrolls down.
- **Loading Animation**:
  - Displays a loader while new posts are being fetched.
- **Responsive Design**:
  - Adapts to various screen sizes for a seamless user experience.
- **API Integration**:
  - Fetches posts from the [JSONPlaceholder API](https://jsonplaceholder.typicode.com/posts).

---

## File Structure

```
Task-9/
├── index.html   # Main HTML file
├── styles.css   # CSS file for styling the posts and loader
└── script.js    # JavaScript file for infinite scrolling functionality
```

## Workflow

### 1. **HTML Structure**
- **Post Container**:
  - A `div` with the class `post-container` serves as the container for dynamically loaded posts.
- **Loader**:
  - A `div` with the class `loader` displays a bouncing animation while new posts are being fetched.

### 2. **CSS Styling**
- **Posts**:
  - Styled with a card-like appearance, including a title, body, and a number badge.
- **Loader**:
  - A bouncing animation is used to indicate loading progress.
- **Responsive Design**:
  - Ensures the layout looks good on both desktop and mobile devices.

### 3. **JavaScript Functionality**
- **Fetching Posts**:
  - The `getPosts()` function fetches posts from the API using pagination (`_limit` and `_page` query parameters).
- **Displaying Posts**:
  - The `showPosts()` function dynamically creates and appends post elements to the `post-container`.
- **Loading Animation**:
  - The `showLoading()` function displays the loader and fetches the next set of posts after a delay.
- **Scroll Detection**:
  - The `scroll` event listener detects when the user reaches the bottom of the page and triggers the loading of more posts.

---