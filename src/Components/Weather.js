import React, { useState } from "react";
import "../index.css";
import axios from "axios";
import WeatherData from "./WeatherData.js";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weather, setWeather] = useState({});
  const [loaded, setLoaded] = useState(false);

  function getData() {
    let apiKey = process.env.REACT_APP_OPEN_WEATHER_API;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    axios.get(url).then(searchWeather);
  }

  function handleSubmit(event) {
    event.preventDefault();
    getData();
  }
  
  function handleChange(event) {
    setCity(event.target.value);
  }

  function searchWeather(response) {
    const weatherData = response.data;
    setWeather({
      description: weatherData.weather[0].description,
      timestamp: new Date(weatherData.dt * 1000),
      temperature: Math.round(weatherData.main.temp),
      maximumTemp: Math.round(weatherData.main.temp_max),
      minimumTemp: Math.round(weatherData.main.temp_min),
      wind: Math.round(weatherData.wind.speed),
      icon: weatherData.weather[0].icon,
      city: weatherData.name,
      humidity: weatherData.main.humidity
    });
    setLoaded(true);

    console.log(response.data);
  }

  let form = (
    <form className="search" onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="searchElement col-auto">
          <input
            type="search"
            className="form-control "
            placeholder="Search city..."
            onChange={handleChange}
          />
        </div>
        <div className="submitButton col-auto">
          <button type="submit" className="btn btn-info mb-2">
            Submit
          </button>
        </div>
      </div>
    </form>
  );

  if (loaded) {
    return (
      <div className=" weather">
        {form}
        <div>
          <WeatherData weather={weather} city={weather.city} />
        </div>

        <div>
          <WeatherForecast weather={weather} city={weather.city} />
        </div>
      </div>
    );
  } else {
    getData();
    return "loading..";
  }
}
