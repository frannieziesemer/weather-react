import React, { useState } from "react";

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
      <div className="col-md-4 temperature">
        <h3> {props.celcius} </h3>
        <div className="degreesSelection float-left">
          °C |
          <a href="/" onClick={displayFahrenheit}>
            °F
          </a>
        </div>
      </div>
    );
  } else {
    return (
      <div className="col-md-4 temperature">
        <h3> {Math.round(convertFahrenheit())} </h3>
        <div className="degreesSelection float-left">
          <a href="/" onClick={displayCelcius}>
            °C |
          </a>
          °F
        </div>
      </div>
    );
  }
}
