import React from 'react';

const WeatherRight = ({ wind, visibility, pressure, humidity }) => {
  return (
    <div className="weather-2">
        <div className="weather-2-1">
            <p>WIND</p>
            <h3 className="wind">{wind}km/h</h3>
        </div>
        <div className="weather-2-2">
            <p>VISIBILITY</p>
            <h3 className="visibility">{visibility}km</h3>
        </div>
        <div className="weather-2-3">
            <p>PRESSURE</p>
            <h3 className="pressure">{pressure}hPa</h3>
        </div>
        <div className="weather-2-4">
            <p>HUMIDITY</p>
            <h3 className="humidity">{humidity}%</h3>
        </div>
    </div>
  );
};

export default WeatherRight;
