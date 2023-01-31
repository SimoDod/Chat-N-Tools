import classes from "./ThreeDayWeather.module.css";

const ThreeDayWeather = (props) => {
  if (!props.isWeather) return;

  let min = 0;
  let max = 0;

  const threeDayInfo = props.weatherData.list.map((list, i) => {
    const date = new Date(list.dt * 1000);
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    const hour = date.getHours();
    const dayIndex = date.getDay()

    if (hour === 5) {
      min = (Number(list.main.temp_min) - 273.15).toFixed(0);
    }

    if (hour === 14) {
      max = (Number(list.main.temp_max) - 273.15).toFixed(0);
    }

    const daysArray = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    const monthsArray = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec",
    ];

    if (i > 0 && hour === 17) {
        return (
          <div className={classes.container} key={Math.random().toString()}>
            <p className={classes.date}>
              {day} {monthsArray[month]} {year}
            </p>
            <p className={classes.day_name}>{daysArray[dayIndex]}</p>
            <p className={classes.temp}>
              {min}&deg; / {max}&deg;
            </p>
          </div>
        );
    }

    return "";
  });

  return threeDayInfo;
};

export default ThreeDayWeather;
