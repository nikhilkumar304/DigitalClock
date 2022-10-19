import React, { useState } from 'react';
const date= new Date();
const time=date.getHours();
let greeting ='';
let cssStyle={};
let style={
  textAlign:'center'
};
    if(time>=1 && time<12){
      greeting="Good Morning";
      cssStyle.color="green";
    }
    else if(time>=12 && time<=17){
     greeting = "Good Afternoon";
     cssStyle.color="orange";
    }
    else if(time>=18 && time<=21)
    {
        greeting="Good Evening";
        cssStyle.color="blue";
    }
    else{
        greeting="Good Night";
        cssStyle.color="black"
        ;
    }
  
function App(){
  let Time = date.toLocaleTimeString();
  const [Ctime,setCtime] = useState(Time);
  setInterval(()=>{
    Time = date.toLocaleTimeString();
    setCtime(Time);
  },1000);
   return (
    <div style={style}>
     <h1>Hello Nikhil 😄,<span style={cssStyle}>{greeting}</span></h1>
     <h2>{Ctime}</h2>
    </div>
   
  );
};
export default App;