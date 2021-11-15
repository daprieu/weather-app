import React, { useContext, useEffect}  from 'react';
import { ImageContext } from '../backgroundImg/ImageProvider';
import { WeatherContext } from './WeatherProvider';



export const WeatherCard = () => {

const { weather, weatherD, getWeather } = useContext(WeatherContext)
console.log('weatherDasdfasdfasf: ', weatherD);
const {image, getImage} = useContext(ImageContext)
console.log('image: ', image);
console.log('weather: ', weather);


function getCardinalDirection(angle) {
    const directions = ['N ↓', 'NE ↙', 'E ←', 'SE ↖', 'S ↑', 'SW ↗', 'W →', 'NW ↘'];
    return directions[Math.round(angle / 45) % 8];
}

useEffect(() => {
    getWeather().then(() => {
        console.log("what am i",weatherD)
        getImage(localStorage.getItem('wd'))
    })
    return weather, weatherD
}, [])


var backgroundStyle = {
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundImage: `url(${image})`
};


    return (
        <>
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
        </>
);
}
