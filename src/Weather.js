import React, { useState } from "react";
import "./index.css";
import axios from "axios";
import WeatherData from "./WeatherData";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weather, setWeather] = useState({});
  const [loaded, setLoaded] = useState(false);

  function search() {
    let apiKey = "498800558a7c5bd6e9bc3ec1ccb9adfe";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    axios.get(url).then(searchWeather);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function updatedCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }

  function searchWeather(response) {
    setWeather({
      description: response.data.weather[0].main,
      timestamp: new Date(response.data.dt * 1000),
      temperature: Math.round(response.data.main.temp),
      maximumTemp: Math.round(response.data.main.temp_max),
      minimumTemp: Math.round(response.data.main.temp_min),
      wind: Math.round(response.data.wind.speed),
      icon: response.data.weather[0].icon,
      city: response.data.name,
      humidity: response.data.main.humidity
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
            onChange={updatedCity}
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
          <WeatherData weather={weather} city={city} />
        </div>
        {/* 
        DO NOT WANT TO ADD THIS AT THE MOMENT - NEED TO LEARN PROPERLY
        <div>
          <WeatherForecast weather={weather} city={weather.city} />
        </div> */}
      </div>
    );
  } else {
    search();
    return "loading..";
  }
}
