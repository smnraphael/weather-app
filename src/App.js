import React, { useState } from 'react';
import './App.css';
import clear_sky from'./Assets/01d.svg';
import few_clouds from'./Assets/02d.svg';
import scattered_clouds from'./Assets/03d.svg';
import shower_rain from'./Assets/09d.svg';
import rain from'./Assets/10d.svg';
import thunderstorm from'./Assets/11d.svg';
import snow from'./Assets/13d.svg';
import mist from'./Assets/50d.svg';

function App() {
  
  const API_KEY = process.env.REACT_APP_API_KEY;

  const [icon, setIcon] = useState(clear_sky);

  const search = async () => {
    const element = document.getElementsByClassName("input");

    if(element[0] === "") {
      return 0;
    }

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=metric&appid=${API_KEY}`;

    let response = await fetch(url);
    let data = await response.json();

    const city = document.getElementsByClassName("city");
    const temperature = document.getElementsByClassName("temperature");
    const feels = document.getElementsByClassName("feels");
    const min = document.getElementsByClassName("min");
    const max = document.getElementsByClassName("max");
    const wind = document.getElementsByClassName("wind");
    const humidity = document.getElementsByClassName("humidity");
    const pressure = document.getElementsByClassName("pressure");
    const visibility = document.getElementsByClassName("visibility");

    city[0].innerHTML = data.name;
    temperature[0].innerHTML = Math.floor(data.main.temp) + "°C";
    feels[0].innerHTML = "FEELS LIKE " + Math.floor(data.main.feels_like) + "°C";
    min[0].innerHTML = Math.floor(data.main.temp_min) + "°C";
    max[0].innerHTML = Math.floor(data.main.temp_max) + "°C";
    wind[0].innerHTML = Math.floor(data.wind.speed) + "km/h";
    humidity[0].innerHTML = Math.floor(data.main.humidity) + "%";
    pressure[0].innerHTML = Math.floor(data.main.pressure) + "hPa";
    visibility[0].innerHTML = Math.floor(data.visibility/1000) + "km";

    if (data.weather[0].icon === "01d" || data.weather[0].icon === "01n") {
      setIcon(clear_sky);
    } else if (data.weather[0].icon === "02d" || data.weather[0].icon === "02n") {
      setIcon(few_clouds);
    } else if (data.weather[0].icon === "03d" || data.weather[0].icon === "03n" || data.weather[0].icon === "04d" || data.weather[0].icon === "04n") {
      setIcon(scattered_clouds);
    } else if (data.weather[0].icon === "09d" || data.weather[0].icon === "09n") {
      setIcon(shower_rain);
    } else if (data.weather[0].icon === "10d" || data.weather[0].icon === "10n") {
      setIcon(rain);
    } else if (data.weather[0].icon === "11d" || data.weather[0].icon === "11n") {
      setIcon(thunderstorm);
    } else if (data.weather[0].icon === "13d" || data.weather[0].icon === "13n") {
      setIcon(snow);
    } else if (data.weather[0].icon === "50d" || data.weather[0].icon === "50n") {
      setIcon(mist);
    }

  }

  return (
    <div className="container">
      <div className="search-bar">
        <input className="input" placeholder="Search..."></input>
        <button className="button" onClick={()=>{search()}}><img className="search" src="search.svg"/></button>
      </div>
      <div className="cityinfo">
        <h1 className="city">-</h1>
      </div>
      <div className="weather">
        <div className="weather-1">
          <div className="weather-1-1">
            <img className="icon" src={icon} />
          </div>
          <div className="weather-1-2">
            <h2 className="temperature">-°C</h2>
            <p className="feels">FEELS LIKE <span>-°C</span></p>
          </div>
          <div className="weather-1-3">
              <p>MIN</p>
              <h3 className="min">-°C</h3>
          </div>
          <div className="weather-1-4">
            <p>MAX</p>
            <h3 className="max">-°C</h3>
          </div>
        </div>
        <div className="weather-2">
          <div className="weather-2-1">
            <p>WIND</p>
            <h3 className="wind">-km/h</h3>
          </div>
          <div className="weather-2-2">
            <p>VISIBILITY</p>
            <h3 className="visibility">-km</h3>
          </div>
          <div className="weather-2-3">
            <p>PRESSURE</p>
            <h3 className="pressure">-hPa</h3>
          </div>
          <div className="weather-2-4">
            <p>HUMIDITY</p>
            <h3 className="humidity">-%</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
