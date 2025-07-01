// src/App.js
import React, { useState } from "react";

const weatherData = {
  Paris: { temp: 18, desc: "Nuageux", humidity: 70, wind: 5 },
  Tunis: { temp: 30, desc: "Ensoleillé", humidity: 40, wind: 3 },
  NewYork: { temp: 22, desc: "Pluvieux", humidity: 80, wind: 7 },
  Tokyo: { temp: 25, desc: "Clair", humidity: 60, wind: 4 },
};

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const handleCheckWeather = () => {
    if (weatherData[city]) {
      setWeather(weatherData[city]);
      setError("");
    } else {
      setWeather(null);
      setError("Ville non trouvée dans la liste");
    }
  };

  return (
    <div style={styles.container}>
      <h1>Météo simplifiée</h1>
      <select
        value={city}
        onChange={(e) => setCity(e.target.value)}
        style={styles.select}
      >
        <option value="">-- Choisis une ville --</option>
        {Object.keys(weatherData).map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>
      <button onClick={handleCheckWeather} style={styles.button}>
        Vérifier la météo
      </button>

      {error && <p style={styles.error}>{error}</p>}

      {weather && (
        <div style={styles.weatherBox}>
          <p>
            Température : <strong>{weather.temp}°C</strong>
          </p>
          <p>Description : {weather.desc}</p>
          <p>Humidité : {weather.humidity}%</p>
          <p>Vent : {weather.wind} m/s</p>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    maxWidth: 400,
    margin: "3rem auto",
    padding: 20,
    fontFamily: "Arial, sans-serif",
    textAlign: "center",
    border: "1px solid #ddd",
    borderRadius: 12,
  },
  select: {
    padding: 8,
    width: "80%",
    marginBottom: 10,
    fontSize: 16,
  },
  button: {
    padding: "8px 20px",
    fontSize: 16,
    cursor: "pointer",
    borderRadius: 6,
    border: "none",
    backgroundColor: "#007BFF",
    color: "white",
  },
  weatherBox: {
    marginTop: 20,
    padding: 15,
    borderRadius: 8,
    backgroundColor: "#f0f0f0",
  },
  error: {
    color: "red",
    marginTop: 15,
  },
};

export default App;
