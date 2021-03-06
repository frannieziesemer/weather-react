import React from "react";
import "./index.css";
import Weather from "./Components/Weather";

export default function App() {
  return (
    <div>
      <div className="app container-fluid">
        <Weather defaultCity="Berlin" />
      </div>

      <footer>
        Project by Frannie Ziesemer and{" "}
        <a href="https://github.com/frannieziesemer/weather-react">
          open sourced on GitHub
        </a>
      </footer>
    </div>
  );
}
