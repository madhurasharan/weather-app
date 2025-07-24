import React, { useState } from "react";
import axios from "axios";
import WeatherCard from "./WeatherCard";
import "./index.css";

const API_KEY = "3ae43de5aeb893e8cad931eabf4e8db9"; // Replace this

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const fetchWeather = async () => {
    if (!city) return;
    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
      );
      setWeather(res.data);
    } catch (err) {
      alert("City not found");
      setWeather(null);
    }
  };

  return (
    <div className="container">
      <h1>🌦 Weather App</h1>
      <div className="search">
        <input
          type="text"
          placeholder="Enter city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={fetchWeather}>Search</button>
      </div>
      {weather && <WeatherCard data={weather} />}
    </div>
  );
}

export default App;
