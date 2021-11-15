// import logo from './logo.svg';
import './App.css';
import React, {useContext, useEffect} from 'react';
import { WeatherContext, WeatherProvider } from './weather/WeatherProvider';
import { ImageContext, ImageProvider } from './backgroundImg/ImageProvider';
import { WeatherCard } from './weather/weatherCard';

export const WeatherApp = () => {


    return (
    <>
    <WeatherProvider>
    <ImageProvider>
    <WeatherCard/>
    
    </ImageProvider>
    </WeatherProvider>
    </>
  );
}
