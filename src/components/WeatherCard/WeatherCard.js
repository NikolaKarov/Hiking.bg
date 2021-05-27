import "./WeatherCard.css";

const WeatherCard = (props) => {
  const symbols = {
    "01d": "☀",
    "01n": "☀",
    "02d": "🌤",
    "02n": "🌤",
    "03d": "🌤",
    "03n": "🌤",
    "04d": "☁",
    "04n": "☁",
    "09d": "🌧",
    "09n": "🌧",
    "10d": "🌧",
    "10n": "🌧",
    "11d": "⛈",
    "11n": "⛈",
    "13d": "❄",
    "13n": "❄",
    "50d": "🌫",
    "50n": "🌫",
  };

  const weatherInfo = {
    city: props.data?.name,
    minTemp: Math.ceil(Number(props.data?.main.temp_min) - 273.15),
    maxTemp: Math.ceil(Number(props.data?.main.temp_max) - 273.15),
    symbol: props.data?.weather[0].icon,
  };
  return (
    <article className="weather-card">
      <section className="weather-card-icon">{symbols[weatherInfo.symbol]}</section>
      <section className="weather-card-info">
        <section className="weather-card-degrees">
          <div className="weather-card-degrees-min">{weatherInfo.minTemp}°</div>
          <div className="weather-card-degrees-max">{weatherInfo.maxTemp}°</div>
        </section>
        <section className="weather-card-city">{weatherInfo.city}</section>
      </section>
    </article>
  );
};

export default WeatherCard;
