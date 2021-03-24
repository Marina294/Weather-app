// import React from 'react'
import Titles from "./components/Titles"
import Form from "./components/Form"
import Weather from "./components/Weather"
import "./App.css";

import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';


const App = (props) => {
  // console.log(props)
  const [weather, setWeather] =useState();
  const [cityName, setCityName] =useState('Vancouver');
  const [countryName, setCountryName] =useState('Canada');

  // console.log(weather)
  // useEffect(()=>{
  //     if(props.cityName){
  //       const getWeather = async() => {
  //       const url = `http://api.openweathermap.org/data/2.5/weather?q=${cityName},&units=metric&appid=a69f91a75eaef12893f8ceb6edd05841&units=metric`
  //       const response = await axios.get(url);
  //       console.log('Got Wether!',response)
  //       setWeather(response.data)
  //     }
  //     getWeather()
  //   }
  // },[props.cityName])

  const getWeather = useCallback(async () => {
    if(cityName && countryName){
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${cityName},${countryName}&appid=a69f91a75eaef12893f8ceb6edd05841&units=metric`
      const response = await axios.get(url);
      console.log('Got Wether!',response)
      setWeather(response.data)
    }
  }, [cityName, countryName])

  console.log(weather)
  useEffect(()=>{
    getWeather()
  },[])

  if(!weather){
    return(
        <h1>Loading.....</h1>
    )
  }

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

// const API_KEY = "a69f91a75eaef12893f8ceb6edd05841";

// class App extends React.Component {
//   state = {
//     temperature: undefined,
//     city: undefined,
//     country: undefined,
//     humidity: undefined,
//     description: undefined,
//     error: undefined
//   }
//   getWeather = async (e) => {
//     e.preventDefault();
//     const city = e.target.elements.city.value;
//     const country = e.target.elements.country.value;
//     const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
//     const data = await api_call.json();
//     if (city && country) {
//       console.log(data);
//         this.setState({
//           temperature: data.main.temp,
//           city: data.name,
//           country: data.sys.country,
//           humidity: data.main.humidity,
//           description: data.weather[0].description,
//           error: ''
//         });
//     } else {
//       this.setState({
//         temperature: undefined,
//         city: undefined,
//         country: undefined,
//         humidity: undefined,
//         description: undefined,
//         error: 'Plese enter the city name'
//       });
//     }
//   }
//   render() {
//     return (
//       <div>
//         <Titles />
//         <Form getWeather={this.getWeather} />
//         <Weather 
//           temperature={this.state.temperature}
//           city={this.state.city}
//           country={this.state.country}
//           humidity={this.state.humidity}
//           description={this.state.description}
//           error={this.state.error}
//          />
//       </div>
//     )
//   }
// }

export default App

