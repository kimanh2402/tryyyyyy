import heart from '../src/images/heart.gif'
import React from "react";

export default function Heart(){

  return(
    <div style={{backgroundColor:'black'}}>
    <center><div 
    style={{ position: 'absolute',
        bottom: 0,
        width: '100%',
        height: '100%',
        background: `url(${heart})`,
        backgroundColor: `black`,
        margin: `auto`,
        padding:`auto`,
        backgroundRepeat:'no-repeat',
        backgroundPosition: `center center`, 
        color:'white'
        }}>
    </div></center>
    </div>
  )
};
