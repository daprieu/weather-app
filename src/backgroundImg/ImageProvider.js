import React, { useState, createContext, useContext, useEffect } from "react"
import { WeatherContext } from "../weather/WeatherProvider";


export const ImageContext = createContext()

export const ImageProvider = (props) => {
    const [image, setImage] = useState()


    const getImage = (description) => {
        
        return fetch(`https://imsea.herokuapp.com/api/1?q=${description}`)
        .then(res => res.json())
        .then(data => {
            setImage(data.results[Math.floor(Math.random()*data.results.length)])
            return data
        })
        
        
    }
    return (
        <ImageContext.Provider value={{
            getImage, setImage, image
            
        }}>
            {props.children}
        </ImageContext.Provider>
            )
        }