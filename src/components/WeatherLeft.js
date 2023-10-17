import React from 'react';

const WeatherLeft = () => {
    return (
        <div className="weather-1">
            <div className="weather-1-1">
                <img src="suncloud.svg" alt="cloud" />
            </div>
            <div className="weather-1-2">
                <h2>12°C</h2>
                <p className="feels">FEELS LIKE <span>10°C</span></p>
            </div>
            <div className="weather-1-3">
                <p>SUNRISE</p>
                <h3>7:19am</h3>
            </div>
            <div className="weather-1-4">
                <p>SUNSET</p>
                <h3>7:36pm</h3>
            </div>
        </div>
    );
}

export default WeatherLeft;
