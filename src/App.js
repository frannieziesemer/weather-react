import React, { useState } from "react";
import "./index.css";
import axios from "axios";
import "./WeatherData";
import WeatherData from "./WeatherData";

export default function App(props) {
  let [city, setCity] = useState(null);
  let [weather, setWeather] = useState({});
  let [loaded, setLoaded] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=498800558a7c5bd6e9bc3ec1ccb9adfe`;
    axios.get(url).then(searchWeather);
  }

  function updatedCity(event) {
    setCity(event.target.value);
  }

  function searchWeather(response) {
    setLoaded(true);
    setWeather({
      description: response.data.weather[0].main,
      temperature: Math.round(response.data.main.temp),
      maximumTemp: Math.round(response.data.main.temp_max),
      minimumTemp: Math.round(response.data.main.temp_min),
      wind: Math.round(response.data.wind.speed),
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    });
    console.log(response.data);
  }

  let loadPage = (
    <div className="search app">
      <form onSubmit={handleSubmit}>
        <div className="citySearch">
          <input
            type="search"
            className="searchElement"
            autoComplete="off"
            placeholder="Search city..."
            onChange={updatedCity}
          />
        </div>
        <div className="searchButton">
          <button type="submit">
            <i className="fas fa-search" />
          </button>
        </div>
        <div className="locationButton">
          <button type="submit">Current Location</button>
        </div>
      </form>
      <div>
        <small>
          <a href="https://github.com/frannieziesemer/weather-react">
            Open Source code
          </a>{" "}
          by Frannie Ziesemer
        </small>
      </div>
    </div>
  );

  if (loaded) {
    return (
      <div className="app">
        <div className="search">
          <form onSubmit={handleSubmit}>
            <div className="citySearch">
              <input
                type="search"
                className="searchElement"
                autoComplete="off"
                placeholder="Search city..."
                onChange={updatedCity}
              />
            </div>
            <div className="searchButton">
              <button type="submit">
                <i className="fas fa-search" />
              </button>
            </div>
            <div className="locationButton">
              <button type="submit">Current Location</button>
            </div>
          </form>
        </div>
        <WeatherData weather={weather} city={city} />
        <small>
          <a href="https://github.com/frannieziesemer/weather-react">
            Open Source code
          </a>{" "}
          by Frannie Ziesemer
        </small>
      </div>
    );
  } else {
    return <div>{loadPage}</div>;
  }
}
