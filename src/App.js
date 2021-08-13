// import logo from './logo.svg';
import './App.css';
import React, { useContext, useEffect }  from 'react';
import { WeatherContext } from './components/weather/WeatherProvider';


export const WeatherApp = () => {

  const { weather, getWeather } = useContext(WeatherContext)
  console.log('weather: ', weather);

  function getCardinalDirection(angle) {
    const directions = ['N ↓', 'NE ↙', 'E ←', 'SE ↖', 'S ↑', 'SW ↗', 'W →', 'NW ↘'];
    return directions[Math.round(angle / 45) % 8];
}
  useEffect(() => {
    getWeather()
}, [])

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Todays weather
        </p>
        <p>{weather.name}</p>
        <p>Currently: {
          weather.weather?.map((description) => description.description)
          }</p>
        <p>Temp: {weather.main?.temp}</p>
        <p>Feels Like: {weather.main?.feels_like} </p>
        {/* <p>Current: {weather[0].main}</p> */}
        <p>Wind: {getCardinalDirection(weather.wind.deg)} {weather.wind.speed} mph </p>
      </header>
    </div>
  );
}


