import React, { useState } from "react";
import "./index.css";
import axios from "axios";
import WeatherData from "./WeatherData";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weather, setWeather] = useState({});
  const [loaded, setLoaded] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function updatedCity(event) {
    setCity(event.target.value);
  }

  function search() {
    let apiKey = "498800558a7c5bd6e9bc3ec1ccb9adfe";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    axios.get(url).then(searchWeather);
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
      city: response.data.name
    });
    setLoaded(true);

    console.log(response.data);
  }

  if (loaded) {
    return (
      <div className=" weather container-fluid">
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
              <button type="submit" class="btn btn-info mb-2">
                Submit
              </button>
            </div>
            <div className="col-auto locationButton">
              <button type="submit" className="btn btn-outline-info mb-2">
                Current Location
              </button>
            </div>
          </div>
        </form>
        <div>
          <WeatherData weather={weather} city={city} />
        </div>
      </div>
    );
  } else {
    search();
    return "loading..";
  }
}
