import React from 'react'


const Weather = props => {

  return (
    <div>
      <h3>{props.city}</h3>
      {/* Do we need Country Input? */}
      {/* <p>{props.country}</p> */}
      <div className="temp-img"><img src={`http://openweathermap.org/img/w/${props.icon}.png`} alt="" /></div>
      <div className="temp"><h1>{props.temperature} <span>°c</span></h1></div> 
      <p>Feels Like {props.feelsLike} °c</p>
      <p>Humidity {props.humidity} %</p>
      <p>Wind {props.winds} km/h</p>
      
      {/* { props.city && props.country && <p>Location: {props.city}, {props.country}</p> }
      { props.temperature && <p>Temperature: {props.temperature}</p> }
      { props.humidity && <p>Humidity: {props.humidity}</p> }
      { props.description && <p>Condition: {props.description}</p> }
      { props.error && <p>{props.error}</p> } */}
    </div>
  )
};

export default Weather;


