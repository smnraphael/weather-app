import React from 'react';
import './WeatherApp.css';
import SearchBar from './SearchBar';
import City from './City';
import WeatherLeft from './WeatherLeft';
import WeatherRight from './WeatherRight';

const WeatherApp = () => {
    return (
        <div className="container">
            <SearchBar />
            <City />
            <div className="weather">
                <WeatherLeft />
                <WeatherRight />
            </div>
        </div>
    );
}

export default WeatherApp;
