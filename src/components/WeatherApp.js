import React from 'react';
import './WeatherApp.css';

const WeatherApp = () => {
    return (
        <div className="container">
            <div className="search-bar">
                <input type="email" class="input" id="exampleInputEmail1" placeholder="Search..."></input>
                <button class="button" type="submit"><img className="search" src="search.svg"/></button>
            </div>
            <div className="city">
                <h1>New York</h1>
            </div>
            <div className="weather">
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
                <div className="weather-2">
                    <div className="weather-2-1">
                        <p>WIND</p>
                        <h3>15km/h</h3>
                    </div>
                    <div className="weather-2-2">
                        <p>HUMIDITY</p>
                        <h3>78%</h3>
                    </div>
                    <div className="weather-2-3">
                        <p>PRESSURE</p>
                        <h3>1014hPa</h3>
                    </div>
                    <div className="weather-2-4">
                        <p>UV</p>
                        <h3>0.16</h3>
                    </div>
                </div>
            </div>
        </div>
);
}

export default WeatherApp;
