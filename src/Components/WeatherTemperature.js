import React, { useState } from "react";
import "./WeatherTemperature.css";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celcius");

  function displayCelcius(event) {
    event.preventDefault();
    setUnit("celcius");
  }

  function displayFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function convertFahrenheit() {
    return (props.celcius * 9) / 5 + 32;
  }

  if (unit === "celcius") {
    return (
      <div className="temperature">
        <h3> {props.celcius} </h3>
        <div className="degreesSelection ">
          °C |
          <a href="/" onClick={displayFahrenheit}>
            °F
          </a>
        </div>
      </div>
    );
  } else {
    return (
      <div className="temperature">
        <h3> {Math.round(convertFahrenheit())} </h3>
        <div className="degreesSelection ">
          <a href="/" onClick={displayCelcius}>
            °C
          </a>{" "}
          | °F
        </div>
      </div>
    );
  }
}
