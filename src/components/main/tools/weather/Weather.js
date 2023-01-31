import React, { useState } from "react";
import LocationInput from "./LocationInput";
import ThreeDayWeather from "./ThreeDayWeather";
import TodayWeather from "./TodayWeather";
import WWrapper from "./WWrapper";

const Weather = () => {
  const [weatherData, setWeatherData] = useState([]);
  const [isTrue, setisTrue] = useState(false);

  const handleClickScroll = () => {
    const element = document.getElementById("weatherScroll");
    element.scrollIntoView({ behavior: "smooth" });
  };

  setTimeout(handleClickScroll, isTrue);

  const infoHandler = (enteredCity) => {
    (async function getWeatherData() {
      const url = `https://api.openweathermap.org/data/2.5/forecast?q=${enteredCity}&appid=4144766c4a07f5023bffaee29f76dddc`;

      try {
        const response = await fetch(url);

        if (response.ok !== true) {
          const error = await response.json();
          throw new Error(error.message);
        }

        const data = await response.json();
        setWeatherData(data);
        setisTrue(true);
      } catch (error) {
        window.alert(error);
      }
    })();
  };

  return (
    <WWrapper>
      <LocationInput clickHandler={infoHandler} />
      <TodayWeather isWeather={isTrue} weatherData={weatherData} />
      <ThreeDayWeather isWeather={isTrue} weatherData={weatherData} />
      <p id="weatherScroll"></p>
    </WWrapper>
  );
};

export default Weather;
