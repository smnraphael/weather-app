import React, { useState } from 'react';
import './App.css';
import './components/CityInfo/CityInfo.css';
import './components//SearchBar/SearchBar.css';
import './components/WeatherInfo/WeatherInfo.css';
import clear_sky from './assets/01d.svg';
import few_clouds from './assets/02d.svg';
import scattered_clouds from './assets/03d.svg';
import shower_rain from './assets/09d.svg';
import rain from './assets/10d.svg';
import thunderstorm from './assets/11d.svg';
import snow from './assets/13d.svg';
import mist from './assets/50d.svg';
import SearchBar from './components/SearchBar/SearchBar';
import CityInfo from './components/CityInfo/CityInfo';
import WeatherLeft from './components/WeatherInfo/WeatherLeft';
import WeatherRight from './components/WeatherInfo/WeatherRight';

function WeatherApp() {
  
  const API_KEY = process.env.REACT_APP_API_KEY;

  const [icon, setIcon] = useState(clear_sky);
  const city = '-';
  const temperature = '-';
  const feelsLike = '-';
  const min = '-';
  const max = '-';
  const wind = '-';
  const visibility = '-';
  const pressure = '-';
  const humidity = '-';

  const handleSearch = async () => {
    const element = document.getElementsByClassName("input");

    if(element[0] === "") {
      return 0;
    }
    
    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=metric&appid=${API_KEY}`);
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
      <SearchBar search={handleSearch} />
      <CityInfo city={city} />
      <div className="weather">
        <WeatherLeft
          icon={icon}
          temperature={temperature}
          feelsLike={feelsLike}
          min={min}
          max={max}
        />
        <WeatherRight 
          wind={wind}
          visibility={visibility}
          pressure={pressure}
          humidity={humidity}
        />
      </div>
    </div>
  );
}

export default WeatherApp;
