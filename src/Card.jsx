import React from'react';
import './index.css';

function Card(props){
 return(
   <>
   <div className="container">
     <div className="card">
        <div className="face face1">
          <div className="content">
            <span className="stars"></span>
            <h2 className="content">{props.name}</h2>
            <p className="content">{props.content}</p>
          </div>
        </div>
     </div> 
    </div>      
   </>
 );

}

export default Card;