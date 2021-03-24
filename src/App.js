// import React from 'react'
import Titles from "./components/Titles"
import Form from "./components/Form"
import Weather from "./components/Weather"
import "./App.css";

import React, { useState, useEffect } from 'react';
// import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';


const App = (props) => {
  // console.log(props)
  const [weather, setWeather] =useState();
  const [cityName, setCityName] =useState('Vancouver');
  const [countryName, setCountryName] =useState('Canada');


  // No useCallback
  async function getWeather () {
    if(cityName && countryName){
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${cityName},${countryName}&appid=a69f91a75eaef12893f8ceb6edd05841&units=metric`
      const response = await axios.get(url);
      console.log('Got Wether!',response)
      setWeather(response.data)
    }
  }

  // console.log(weather)
  useEffect(()=>{
    getWeather()
  },[])

  if(!weather){
    return(
        <h1>Loading.....</h1>
    )
  }


  // // useCallback
  // const getWeather = useCallback(async () => {
  //   if(cityName && countryName){
  //     const url = `http://api.openweathermap.org/data/2.5/weather?q=${cityName},${countryName}&appid=a69f91a75eaef12893f8ceb6edd05841&units=metric`
  //     const response = await axios.get(url);
  //     console.log('Got Wether!',response)
  //     setWeather(response.data)
  //   }
  // }, [cityName, countryName])

  // console.log(weather)
  // useEffect(()=>{
  //   getWeather()
  // },[])

  // if(!weather){
  //   return(
  //       <h1>Loading.....</h1>
  //   )
  // }

  
  return (
    <div className="wrap">
      <Titles />
      {/* <Form getWeather={props.getWeather} /> */}
      <Form 
        cityName={cityName} 
        countryName={countryName} 
        onSubmit={getWeather} 
        onChangeCityName={setCityName} 
        onChangeCountryName={setCountryName} 
      />
      <Weather 
        city={cityName}
        country={countryName}
        icon={weather.weather[0].icon}
        description={weather.weather[0].description}
        temperature={weather.main.temp}
        feelsLike={weather.main.feels_like}
        humidity={weather.main.humidity}
        winds={weather.wind.speed}
        // error={weather.error}
      />
    </div>
  )
}

export default App

