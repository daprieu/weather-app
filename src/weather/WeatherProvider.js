import React, { useState, createContext } from "react"


export const WeatherContext = createContext()

export const WeatherProvider = (props) => {
    const [weather, setWeather] = useState({})
    const [weatherD, setWeatherD] = useState()
    const key = process.env.REACT_APP_WEATHER_API_KEY
    

    const getWeather = () => {
        
        return fetch(`https://api.openweathermap.org/data/2.5/weather?q=Nashville&units=imperial&appid=${key}`)
        .then(res => res.json())
        .then(data => {
            setWeather(data)
            setWeatherD(data.weather[0].description)
            localStorage.setItem('wd', data.weather[0].description)
            return data})
        
    }
    return (
        <WeatherContext.Provider value={{
            getWeather, setWeather, weather, weatherD
            
        }}>
            {props.children}
        </WeatherContext.Provider>
            )
        }