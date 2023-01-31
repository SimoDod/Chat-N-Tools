import React from "react";

import classes from "./TodayWeather.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloud,
  faCloudRain,
  faMagnifyingGlass,
  faSnowflake,
  faSun,
} from "@fortawesome/free-solid-svg-icons";
import Time from "./Time";

const weatherConditions = {
  thunderstorm: faCloudRain,
  drizzle: faCloudRain,
  rain: faCloudRain,
  snow: faSnowflake,
  clear: faSun,
  clouds: faCloud,
  magnifyingglass: faMagnifyingGlass,
};

const TodayWeather = (props) => {
  if (!props.isWeather) return;

  const currTemp = (
    Number(props.weatherData.list[0].main.temp) - 273.15
  ).toFixed(1);
  const feelsLike = (
    Number(props.weatherData.list[0].main.feels_like) - 273.15
  ).toFixed(1);
  const humidity = props.weatherData.list[0].main.humidity;
  let ws = props.weatherData.list[0].weather[0].main.toLowerCase();
  const stateInfo = props.weatherData.list[0].weather[0].main;

  if (!weatherConditions.hasOwnProperty(ws)) {
    ws = "magnifyingglass";
  }
  const element = (
    <FontAwesomeIcon className={classes.icon} icon={weatherConditions[ws]} />
  );

  const temperatur = (
    <div className={classes.temp}>
      <span className={classes.icon}>{element}</span>
      <p className={classes.current_temp}>
        {currTemp}
        <span className={classes.grad}>&#8451;</span>
      </p>
      <div className={classes.feels_like}>
        <p>
          RealFeel&#174; {feelsLike}
          <span className={classes.feelslike_grad}>&#8451;</span>
        </p>
      </div>
      <div className={classes.humidity}><p>Humidity: {humidity}%</p></div>
    </div>
  );

  const cityNcountry = (
    <h4>
      {props.weatherData.city.name}, {props.weatherData.city.country}
      <div>
        <p>{stateInfo}</p>
      </div>
    </h4>
  );

  return (
    <div className={classes["today-weather"]}>
      <div className={classes.time}>
        <h5>CURRENT WEATHER</h5>
        <Time />
        {cityNcountry}
      </div>
      {temperatur}
    </div>
  );
};

export default TodayWeather;
