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

const IMAGE_BASE_URL = "https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80";

const backgroundStyle = {
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  width: "100%",
  backgroundImage: `url(${IMAGE_BASE_URL})`
};

      return (
    <div className="App" style={backgroundStyle}>
    <div className="App-header">
        <p>Todays weather</p>
        <p>{weather.name}</p>
        <p>Currently: {weather.weather?.map(description => description.description + ", ")}</p>
        <p>Temp: {weather.main?.temp}</p>
        <p>Feels Like: {weather.main?.feels_like} </p>
        <p>Wind: {getCardinalDirection(weather.wind?.deg)} {weather.wind?.speed} mph </p>
      </div>
    </div>
  );
}


