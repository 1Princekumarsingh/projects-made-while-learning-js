# Projects Made While Learning JS

A collection of small JavaScript practice projects built while learning core web development concepts. The repository includes projects for DOM manipulation, browser events, local storage, random color generation, live time updates, and API-based data fetching.

## Projects

### Digital Clock

Location: `index.html`

A simple live digital clock that updates every second using `Date`, `setInterval`, and DOM updates.

### Todo List

Location: `To-list/`

A browser-based todo list where users can add and delete tasks. Todos are saved in `localStorage`, so they stay available after refreshing the page.

### Background Gradient Generator

Location: `background-gradient/`

A gradient generator that creates random hex colors, updates the page background, and lets users copy the generated CSS gradient code.

### Weather Application

Location: `weather-application/`

A weather app that fetches live city weather data from the OpenWeather API and displays temperature, forecast, humidity, wind speed, pressure, and min/max temperature.

## Folder Structure

```text
projects-made-while-learning-js/
|-- index.html
|-- README.md
|-- To-list/
|   |-- to-do-list.html
|   `-- to-do-list.css
|-- background-gradient/
|   `-- index.html
`-- weather-application/
    |-- weather-app.html
    |-- weather-app.css
    |-- weather_app.js
    `-- config.example.js
```

## How to Run

No build setup or package installation is required.

1. Clone the repository.
2. Open any project HTML file directly in your browser.
3. For the weather app, add your OpenWeather API key before running it.

## Weather API Setup

The weather app needs an OpenWeather API key.

1. Open `weather-application/config.example.js`.
2. Copy it as `weather-application/config.js`.
3. Replace `YOUR_OPENWEATHER_API_KEY` with your actual API key.
4. Open `weather-application/weather-app.html` in your browser.

`config.js` is ignored by Git so your personal API key is not pushed to GitHub.

## Concepts Practiced

- HTML page structure
- CSS styling and layouts
- DOM selection and updates
- Event listeners
- Form handling
- Local storage
- Random color generation
- Clipboard API
- Async JavaScript
- Fetch API
- Working with third-party APIs

## Tech Stack

- HTML
- CSS
- JavaScript
