import React from 'react';

const WeatherLeft = ({ icon, temperature, feelsLike, min, max }) => {
  return (
    <div className="weather-1">
      <div className="weather-1-1">
        <img className="icon" src={icon} alt="icon" />
      </div>
      <div className="weather-1-2">
        <h2 className="temperature">{temperature}°C</h2>
        <p className="feels">
          FEELS LIKE <span>{feelsLike}°C</span>
        </p>
      </div>
      <div className="weather-1-3">
        <p>MIN</p>
        <h3 className="min">{min}°C</h3>
      </div>
      <div className="weather-1-4">
        <p>MAX</p>
        <h3 className="max">{max}°C</h3>
      </div>
    </div>
  );
};

export default WeatherLeft;
