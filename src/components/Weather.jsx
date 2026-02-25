import React, { useState } from "react";
import "./Weather.css";

const weatherData = {
  Երևան: "☀️ +26°C",
  Գյումրի: "🌤 +21°C",
  Վանաձոր: "🌧 +18°C",
  Գորիս: "⛅ +23°C",
};

export default function Weather() {
  const [city, setCity] = useState("");
  const [open, setOpen] = useState(false);

  return (
    <div className="weather-container">
      <h2 className="weather-title">Եղանակ</h2>
      <div className="weather-dropdown">
        <div
          className="weather-dropdown-selected"
          onClick={() => setOpen(!open)}
        >
          {city || "Ընտրիր քաղաք"}
        </div>
        {open && (
          <ul className="weather-dropdown-list">
            {Object.keys(weatherData).map((c) => (
              <li
                key={c}
                className="weather-dropdown-item"
                onClick={() => {
                  setCity(c);
                  setOpen(false);
                }}
              >
                {c}
              </li>
            ))}
          </ul>
        )}
      </div>
      {city && (
        <p className="weather-result">
          {city}ում եղանակը՝ <b>{weatherData[city]}</b>
        </p>
      )}
    </div>
  );
}
