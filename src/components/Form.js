import React from 'react'
// import React, {useState} from 'react';
// import "./form.css";

const Form = props => {

  return (
    <div className='container'>
      <div className='row justify-content-center'>
        {/* <form　onSubmit={props.onSubmit}> */}
          <input
            type="text" 
            name='city' 
            placeholder='City...' 
            value={props.cityName}
            onChange={(e)=>{props.onChangeCityName(e.target.value)}}
          />
          <input
            type='text'
            name="country" 
            placeholder="Country..." 
            value='Canada' 
            value={props.countryName}
            onChange={(e)=>{props.onChangeCountryName(e.target.value)}}
          />
          <button onClick={props.onSubmit}>check it!</button>
        {/* </form> */}
      </div>
    </div>
  )
  
  // we do not need this comment out section
  
  // const onload = () => {
  //   const obj = document.forms;
  //   if (!obj) return;
  //   for (var i = 0; i < obj.length; i++) {
  //     var ele = obj[i].elements;
  //     for (var j = 0; j < ele.length; j++) {
  //       if (ele[j].type != "text") continue;
  //       ele[j].onfocus = value_clear;
  //       ele[j].onblur = value_default;
  //     }
  //   }
  // }
  // const value_clear=()=> {
  //   if (props.value == props.defaultValue) props.value = "";
  // }
  // const value_default=()=> {
  //   if (!props.value) props.value = props.defaultValue;
  // }
  // return (
  //   <div>
  //     <form onSubmit={props.getWeather}>
  //       <input 
  //         type="text" 
  //         name='city' 
  //         placeholder='City...' 
  //         value='Vancouver' 
  //         spellcheck='true' 
  //         onChange={changeCity}
  //         // onfocus="if (props.value == defaultValue) props.value = '';" 
  //         // onblur="if (!props.value) props.value = defaultValue;" 
  //       />
  //       <input 
  //         type="text" 
  //         name="country" 
  //         placeholder="Country..." 
  //         value='Canada' 
  //         spellcheck="true" 
  //         onChange={changeCountry}
  //         // onfocus="if (props.value == defaultValue) props.value = '';" 
  //         // onblur="if (!props.value) props.value = defaultValue;" 
  //       />
  //       <button>Get Weather</button>
  //     </form>
  //   </div>
  // )
}

export default Form;

