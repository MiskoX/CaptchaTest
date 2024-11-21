import React, { useState } from "react";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(false); // Stan ładowania
  const [message, setMessage] = useState(""); // Wiadomość do wyświetlenia

  const handleClick = () => {
    setLoading(true); // Ustaw stan ładowania
    setMessage(""); // Wyczyść poprzednią wiadomość
    setTimeout(() => {
      setLoading(false); // Wyłącz ładowanie
      setMessage("Jesteś robotem"); // Ustaw wiadomość
    }, 2000); // 2-sekundowe opóźnienie
  };

  return (
    <div className="App">
      <div className="captcha-container">
        <button
          className="captcha-button"
          onClick={handleClick}
          disabled={loading}
        >
          {loading ? "Proszę czekać..." : "Czy jesteś robotem?"}
        </button>
        {message && <p className="captcha-message">{message}</p>}
      </div>
    </div>
  );
}

export default App;
