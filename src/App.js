import React, { useState } from "react";
import "./index.css";
import axios from "axios";
import WeatherData from "./WeatherData";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="app">
      <Weather defaultCity="Berlin" />

      <small>
        <a href="https://github.com/frannieziesemer/weather-react">
          Open Source code
        </a>{" "}
        by Frannie Ziesemer
      </small>
    </div>
  );
}
