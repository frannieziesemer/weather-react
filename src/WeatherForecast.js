import React, { useState } from "react";
import "./WeatherForecast.css";
import Icon from "./Icon";
import axios from "axios";

export default function(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function displayForecast(response) {
    setForecast(response.data);
    console.log(response.data);
    setLoaded(true);
  }

  function formatTime(date) {
    let hours = date.getHours();
    if (hours < 10) {
      hours = `0${hours}`;
    }
    let minutes = date.getMinutes();
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
    return `${hours}:${minutes}`;
  }

  if (loaded && forecast.city.name === props.city) {
    return (
      <div className="WeatherForecast row">
        {forecast.list.slice(0, 4).map(function(forecastData) {
          return (
            <div className="col forecastBlock">
              <div>{formatTime(new Date(forecastData.dt * 1000))}</div>
              <div className="icon">
                <Icon code={forecastData.weather[0].icon} iconSize={45} />
              </div>
              <div>{Math.round(forecastData.main.temp)} °C</div>
            </div>
          );
        })}
      </div>
    );
  } else {
    let apiKey = "498800558a7c5bd6e9bc3ec1ccb9adfe";
    let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayForecast);
    return null;
  }
}
