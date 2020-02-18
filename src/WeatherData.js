import React from "react";
import "./index.css";
import FormatDate from "./FormatDate";

export default function WeatherData(props) {
  return (
    <div className="WeatherData">
      <div>
        <h1 className="location"> {props.city} </h1>
        <FormatDate date={props.weather.timestamp} />
      </div>
      <div className="row currentInfo">
        <div className="currentData">
          <ul>
            <li> {props.weather.description} </li>
            <li>
              <i className="fas fa-thermometer-three-quarters" />
              <span> High: {props.weather.maximumTemp} </span>
            </li>
            <li>
              <i className="fas fa-thermometer-quarter" />
              <span> Low: {props.weather.minimumTemp} </span>
            </li>
            <li>
              <i className="fas fa-wind" />
              <span> {props.weather.wind} km/h </span>
            </li>
          </ul>
        </div>
        <div className="temperature">
          <h3> {props.weather.temperature} </h3>
          <div className="degreesSelection float-left">
            <a href="/" className="active">
              {" "}
              °C{" "}
            </a>
            |<a href="/">°F</a>
          </div>
        </div>
        <div className="currentIcon">
          <img src={props.weather.icon} alt={props.weather.description} />
        </div>
      </div>
    </div>
  );
}
