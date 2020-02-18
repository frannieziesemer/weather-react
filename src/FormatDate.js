import React from "react";
import "./index.css";

export default function FormatDate(props) {
  // let days = [
  //   "Sunday",
  //   "Monday",
  //   "Tuesday",
  //   "Wednesday",
  //   "Thursday",
  //   "Friday",
  //   "Saturday"
  // ];

  let day = props.date.getDay();
  let hour = props.date.getHours();

  return (
    <div>
      {hour}
      {/*  {day}:{minutes} */}
    </div>
  );
}
