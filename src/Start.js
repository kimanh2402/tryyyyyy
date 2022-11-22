import React from "react";
import BgImage from '../src/images/bg.png'
import Gif from '../src/images/giphy.gif'
import BiDo from '../src/images/bido.png'
import { useState } from "react";
import './index.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Game from './Game'

export default function Start() {
  // React state to manage form elements

  const [isReset, setIsReset] = useState(true);
  // Update state with user input

  const handleSubmit = () => {
    setIsReset(!isReset) ;

  };
  const abc =() =>{    
      ReactDOM.render(
      <BrowserRouter>
        <Game />
      </BrowserRouter>,
  document.getElementById("root")
);
  };

  // JSX code to accept user input
  const renderInputName = (
      <div style={{
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: '100%',
        background: `url(${BgImage})`,
        backgroundColor: `black`,
        margin: `auto`,
        backgroundRepeat:'no-repeat',
        backgroundPosition: `center center`
      }} className="intro">
        <div>
          <img src={Gif} alt='a'></img>
        <center>
          <button id="user-submit" style={{ marginTop: '-300px'}}onClick={handleSubmit}>
          Start
        </button>
        </center>
      </div>
      </div>
  );

  // JSX code to display entered value
  const renderResetName = (
      <div style={{
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: '100%',
        background: `url(${BgImage})`,
        backgroundColor: `black`,
        margin: `auto`,
        backgroundRepeat:'no-repeat',
        backgroundPosition: `center center`
      }} className="intro">
        <center style={{
        margin: 'auto',
        marginTop: '40px',
        width: '70%',
        height: '70%',
        backgroundColor: `rgba(240, 145, 74, 0.517)`
        }} >
        <h1>Bạn có biết quy luật của trò chơi?</h1>
        <h2>Bạn cần đánh bại những trái bí đỏ <img src={BiDo} style={{height:'15%',width:'6%'}} alt='a'></img> và ghi điểm, tuy nhiên bạn sẽ không thể đánh bại những con ma.</h2>
        <h2>Màn cuối bạn sẽ gặp một con ghost rất đáng sợ, hay cẩn thận nhé!</h2>
        <h2>Bạn hãy chọn hình ảnh ghost nếu như không muốn gặp ghost trong Round 2 nhé </h2>
        <img src={Gif} style={{marginTop:'-100px',marginLeft:'800px',height:'20%',width:'10%'}} alt='a'></img>    
        <br>
        </br>
        <center><button id="user-submit" 
                  onClick={abc}>
          Continue
        </button>
        </center>
      </center>
      </div>
  );
  // Conditional rendering based on isReset State value
  return (
    
    <div className="main">{ isReset ? renderInputName :renderResetName}
      </div>
  );
}
