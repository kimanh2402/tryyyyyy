import React from 'react'
import Bg from '../src/images/resultbg.gif'
import Heart from './Heart'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Game from './Game';
export default function Result(props){
  const change=()=>{
    ReactDOM.render(
      <BrowserRouter>
        <Heart />
      </BrowserRouter>,
  document.getElementById("root")
);
  };
  return(
    <div style={{backgroundColor:'black'}}>
    <center><div class='rs' 
    style={{ position: 'absolute',
        bottom: 0,
        width: '100%',
        height: '100%',
        background: `url(${Bg})`,
        backgroundColor: `black`,
        margin: `auto`,
        padding:`auto`,
        backgroundRepeat:'no-repeat',
        backgroundPosition: `center center`, 
        color:'white'
        }}>
      YOUR SCORE IS: {props.score}
     <br></br><button id="user-submit" style={{ marginTop: '300px'}}onClick={change}>
          CLICK HERE
        </button>
    </div></center>
    </div>
  )
};
