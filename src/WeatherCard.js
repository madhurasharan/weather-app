import React from "react";

function WeatherCard({ data }) {
  return (
    <div className="card">
      <h2>{data.name}, {data.sys.country}</h2>
      <h3>{Math.round(data.main.temp)}°C</h3>
      <p>{data.weather[0].main} - {data.weather[0].description}</p>
      <img
        src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
        alt="weather icon"
      />
    </div>
  );
}

export default WeatherCard;
