import './App.css';
import SearchBar from './components/SearchBar';
import City from './components/City.js';
import WeatherLeft from './components/WeatherLeft';
import WeatherRight from './components/WeatherRight';

function App() {
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

export default App;
