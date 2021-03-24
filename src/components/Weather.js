import React from 'react'


const Weather = props => {

  return (
    <div>
      <p>{props.city}</p>
      {/* Do we need Country? */}
      {/* <p>{props.country}</p> */}
      <div className="temp"><img src={`http://openweathermap.org/img/w/${props.icon}.png`} alt="" /></div>
      <p>{props.temperature} °c</p> 
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


