import React from "react";

function WeatherCard({ data }) {
  const { name, main, weather } = data;

  return (
    <div className="card">
      <h2>{name}</h2>
      <h3>{main.temp}°C</h3>
      <p>{weather[0].main} - {weather[0].description}</p>
      <img
        src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
        alt={weather[0].description}
      />
    </div>
  );
}

export default WeatherCard;
