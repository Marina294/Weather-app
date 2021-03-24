import React from 'react'


const Weather = props => {
  return (
    <div>
      {/* <i className="wu wu-white wu-64 wu-chanceflurries"></i> */}
      { props.city && props.country && <p>Location: {props.city}, {props.country}</p> }
      { props.temperature && <p>Temperature: {props.temperature}</p> }
      { props.humidity && <p>Humidity: {props.humidity}</p> }
      { props.description && <p>Condition: {props.description}</p> }
      { props.error && <p>{props.error}</p> }
    </div>
  )
};

export default Weather;


