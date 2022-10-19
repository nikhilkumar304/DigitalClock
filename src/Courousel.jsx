import React from 'react';

const img="https://picsum.photos/1350/500";
let style={
 borderRadius:'2%'
}

function courousel(){

    return(
     <React.Fragment>
       <div >
        <img src={img} alt="" style={style}/> 
       </div>

     </React.Fragment>

    );
}

export default courousel;