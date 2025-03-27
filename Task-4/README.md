# Weather Dashboard

## Overview
This project is a **Weather Dashboard** that provides real-time weather information for any city. It includes current weather details, hourly forecasts, air quality information, and a 5-day weather forecast. The application is built using HTML, CSS, and JavaScript and integrates with the OpenWeatherMap API to fetch weather data.

---

## Features
- **Search Functionality**:
  - Search for any city to get weather details.
  - Displays an error message if the city is not found.
- **Current Weather**:
  - Displays the city name, country, temperature, and weather icon.
- **Hourly Forecast**:
  - Provides weather updates for the next few hours, including time, temperature, and weather conditions.
- **Air Quality Information**:
  - Displays real feel temperature, wind speed, chance of rain, and atmospheric pressure.
- **5-Day Forecast**:
  - Shows daily weather conditions for the next 5 days, including temperature and weather icons.
- **Responsive Design**:
  - Adapts to various screen sizes for a seamless user experience.

---

## File Structure
```
Task-4/
├── index.html   # HTML file for the calculator
├── styles.css   # CSS file for styling the calculator
└── script.js    # JavaScript file for calculator functionality
```
---

## Workflow

### 1. **HTML Structure**
- **Sidebar**:
  - Contains navigation items like Weather, Cities, and Settings.
- **Main Content**:
  - Includes sections for current weather, hourly forecast, air quality, and 5-day forecast.

### 2. **CSS Styling**
- **Sidebar**:
  - Styled with a dark theme and hover effects for interactivity.
- **Main Content**:
  - Grid layout for organizing weather information.
  - Responsive design for mobile and desktop views.
- **Weather Cards**:
  - Styled with rounded corners, background overlays, and consistent spacing.

### 3. **JavaScript Functionality**
- **Search Weather**:
  - Fetches current weather data using the OpenWeatherMap API.
  - Updates the UI with city name, temperature, and weather icon.
- **Hourly Forecast**:
  - Fetches and displays hourly weather data, including time, temperature, and weather conditions.
- **Air Quality**:
  - Displays real feel temperature, wind speed, chance of rain, and pressure.
- **5-Day Forecast**:
  - Fetches and displays daily weather data for the next 5 days.

---
## API Integration
This project uses the [OpenWeatherMap API](https://openweathermap.org/api) to fetch weather data. You need an API key to use the application.

### API Endpoints:
- **Current Weather**: `https://api.openweathermap.org/data/2.5/weather`
- **Hourly & 5-Day Forecast**: `https://api.openweathermap.org/data/2.5/forecast`

---