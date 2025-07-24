import React, { useState } from "react";
import axios from "axios";
import WeatherCard from "./WeatherCard";
import "./index.css";

const API_KEY = "3ae43de5aeb893e8cad931eabf4e8db9";

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

  const backgroundStyle = {
    backgroundImage: "url('/background.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    padding: "2rem",
    textAlign: "center",
  };

  return (
    <div style={backgroundStyle}>
      <div className="container">
        <h1>Check the weather in your city 🌤️</h1>
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

      <footer className="footer">Made with ❤️ by Madhura</footer>
    </div>
  );
}

export default App;
