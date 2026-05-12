let cityName = document.querySelector(".weather_city");
let dateTime = document.querySelector(".weather_data_time");
let w_forecast = document.querySelector(".weather_forecast");
let w_temperature = document.querySelector(".weather_temperature");
let w_icon = document.querySelector(".weather_icon");
let w_minTem = document.querySelector(".weather_min");
let w_maxTem = document.querySelector(".weather_max");

let w_feelsLike = document.querySelector(".weather_feelsLike");
let w_humidity = document.querySelector(".weather_humidity");
let w_wind = document.querySelector(".weather_wind");
let w_pressure = document.querySelector(".weather_pressure");

let citySearch = document.querySelector(".weather_search");

let apiKey = window.OPENWEATHER_API_KEY || "";
let city = "Jaipur";

//search city
citySearch.addEventListener("submit", (e)=>{
    e.preventDefault();
    let cityInput = document.querySelector(".city_name");
    city = cityInput.value;
    getWeatherData();;
})

//get actual country name
const getCountryName = (code) =>{
    return new Intl.DisplayNames([code], {type:"region"}).of(code);
}

//get date and time
const getDateTime = (dt) =>{
    const currDate = new Date(dt*1000); //into ms

    const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric"
    }

    const formatter = new Intl.DateTimeFormat(currDate, options);
    return formatter.format(currDate);
}

const getWeatherData  = async () =>{
    if (!apiKey || apiKey === "YOUR_OPENWEATHER_API_KEY") {
        cityName.innerHTML = "Weather App";
        dateTime.innerHTML = "Add your OpenWeather API key in config.js";
        w_forecast.innerHTML = "Setup needed";
        return;
    }

    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const res = await fetch(weatherUrl);
        const data = await res.json(); // res.json() used to asychronously parse json string into js object

        const {main, name, weather, wind, sys, dt} = data;

        cityName.innerHTML = `${name}, ${getCountryName(sys.country)}`;
        dateTime.innerHTML = getDateTime(dt);

        w_forecast.innerHTML = weather[0].main;
        w_icon.innerHTML = `<img src="http://openweathermap.org/img/wn/${weather[0].icon}@4x.png"/>` ;
        

        w_temperature.innerHTML = `${main.temp}&#176`;
        w_minTem.innerHTML = `Min: ${main.temp_min.toFixed()}&#176`;
        w_maxTem.innerHTML = `Max: ${main.temp_max.toFixed()}&#176`;

        w_feelsLike.innerHTML = `${main.feels_like.toFixed(2)}&#176`
        w_humidity.innerHTML = `${main.humidity}%`
        w_wind.innerHTML = `${wind.speed} m/s`
        w_pressure.innerHTML = `${main.pressure} hPa`
    } catch (error) {
        console.log("Error fetching weather:", error);
    }
}


window.addEventListener("load", getWeatherData);
