import React from "react";
import "./WeatherData.css";
import FormatDate from "./FormatDate";
import Icon from "./Icon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherData(props) {
  return (
    <div className="WeatherData">
      <div>
        <h1 className="location"> {props.city} </h1>
        <FormatDate date={props.weather.timestamp} />
      </div>

      <div className="row currentInfo">
        <div className="col-sm-4">
          <WeatherTemperature celcius={props.weather.temperature} />
        </div>
        <div className="col-sm-4 currentIcon">
          <Icon code={props.weather.icon} iconSize={84} />
        </div>
        <div className="col-sm-4  currentData">
          <ul>
            <li className="weatherDescription">
              {" "}
              {props.weather.description}{" "}
            </li>

            <li>
              <i className="fas fa-tint" />
              <span> Humidity: {props.weather.humidity} %</span>
            </li>
            <li>
              <i className="fas fa-wind" />
              <span>Wind: {props.weather.wind} km/h </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
