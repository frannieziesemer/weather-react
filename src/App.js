import React from "react";
import "./index.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div>
      <div className="app">
        <Weather defaultCity="Berlin" />
      </div>

      <footer>
        <a href="https://github.com/frannieziesemer/weather-react">
          Open Source code
        </a>{" "}
        by Frannie Ziesemer
      </footer>
    </div>
  );
}
