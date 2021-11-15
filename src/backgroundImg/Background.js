import React, { useContext, useEffect, useState}  from 'react';
import { WeatherContext } from '../weather/WeatherProvider';
import { ImageContext } from './ImageProvider';



export const Background = () => {
const { weatherD} = useContext(WeatherContext)
console.log('weatherDasdfadsf: ', weatherD);
const { image, getImage } = useContext(ImageContext)

// if (weather != undefined){
//     const wethDesc = weather.weather.map(w => w)
//     console.log('wethDesc: ', wethDesc);

// }

// console.log('desc: ', desc);
if (weatherD[0].description !== undefined){
    getImage(weatherD[0].description)
    
}




}