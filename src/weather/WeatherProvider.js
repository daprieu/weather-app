import React, { useState, createContext } from "react"


export const WeatherContext = createContext()

export const WeatherProvider = (props) => {
    const [weather, setWeather] = useState([])
    const key = process.env.REACT_APP_WEATHER_API_KEY
    

    const getWeather = () => {
        
        return fetch(`https://api.openweathermap.org/data/2.5/weather?q=Nashville&units=imperial&appid=${key}`)
        .then(res => res.json())
        .then(data => setWeather(data))
        
    }
    return (
        <WeatherContext.Provider value={{
            getWeather, setWeather, weather
            
        }}>
            {props.children}
        </WeatherContext.Provider>
            )
        }