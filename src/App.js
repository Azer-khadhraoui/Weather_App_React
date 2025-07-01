// src/App.js
import React, { useState } from "react";

const weatherData = {
  Paris: { temp: 18, desc: "Nuageux", humidity: 70, wind: 5 },
  Tunis: { temp: 30, desc: "Ensoleillé", humidity: 40, wind: 3 },
  NewYork: { temp: 22, desc: "Pluvieux", humidity: 80, wind: 7 },
  Tokyo: { temp: 25, desc: "Clair", humidity: 60, wind: 4 },
  Casablanca: { temp: 28, desc: "Partiellement ensoleillé", humidity: 50, wind: 6 },
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
    <div style={styles.page}>
      <h1 style={styles.title}>🌤️ Weather Wizard</h1>
      <div style={styles.card}>
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
            <p style={styles.temp}>{weather.temp}°C</p>
            <p style={styles.desc}>{weather.desc}</p>
            <div style={styles.details}>
              <span>💧 {weather.humidity}% Humidité</span>
              <span>💨 {weather.wind} m/s Vent</span>
            </div>
          </div>
        )}
      </div>
      <footer style={styles.footer}>© 2025 Weather Wizard</footer>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background:
      "radial-gradient(circle at top left, #667eea, #764ba2, #6b8dd6)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    padding: "2rem",
    color: "#fff",
  },
  title: {
    fontSize: "3rem",
    marginBottom: "1.5rem",
    textShadow: "2px 2px 5px rgba(0,0,0,0.3)",
  },
  card: {
    background: "rgba(255, 255, 255, 0.15)",
    padding: "2rem",
    borderRadius: "15px",
    boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
    backdropFilter: "blur(8.5px)",
    WebkitBackdropFilter: "blur(8.5px)",
    border: "1px solid rgba(255, 255, 255, 0.18)",
    width: "350px",
    textAlign: "center",
  },
  select: {
    width: "100%",
    padding: "0.75rem",
    fontSize: "1.1rem",
    borderRadius: "10px",
    border: "none",
    marginBottom: "1rem",
    cursor: "pointer",
    outline: "none",
  },
  button: {
    width: "100%",
    padding: "0.75rem",
    fontSize: "1.2rem",
    fontWeight: "700",
    borderRadius: "10px",
    border: "none",
    background:
      "linear-gradient(90deg, #667eea 0%, #764ba2 100%)",
    color: "#fff",
    cursor: "pointer",
    transition: "background 0.3s ease",
    boxShadow: "0 4px 15px rgba(102,126,234,0.4)",
  },
  error: {
    marginTop: "1rem",
    color: "#ff6b6b",
    fontWeight: "600",
  },
  weatherBox: {
    marginTop: "1.5rem",
    padding: "1.5rem",
    background: "rgba(255, 255, 255, 0.25)",
    borderRadius: "12px",
    color: "#222",
    fontWeight: "600",
    boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
  },
  temp: {
    fontSize: "3rem",
    margin: "0",
  },
  desc: {
    fontSize: "1.3rem",
    margin: "10px 0",
    fontStyle: "italic",
  },
  details: {
    display: "flex",
    justifyContent: "space-around",
    fontSize: "1rem",
    marginTop: "10px",
  },
  footer: {
    marginTop: "3rem",
    fontSize: "0.9rem",
    color: "rgba(255, 255, 255, 0.6)",
  },
};

export default App;
