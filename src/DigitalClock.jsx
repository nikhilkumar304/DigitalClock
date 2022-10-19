import React, { useState } from 'react';

function DigitalClock(){
    let date= new Date();
   // let time=date.toLocaleTimeString();
    const [ctime,setInverter]=useState();
    
const Update=()=>{

   const  time = date.toLocaleTimeString();
    setInverter(time);
    
    };

    return(
      <>
      <h1 id="Clock-heading">{ctime}</h1>
      <button id="Btn" onClick={Update}>Click me 📷</button>
      </>
    );
};

export default DigitalClock;