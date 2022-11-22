import React from 'react'
import Bg from '../src/images/bg-game.jpg'
import Bido from '../src/images/bido.png'
import music from '../src/images/music.png'
import Ghost from '../src/images/ghost.png'
import Bua from "../src/images/bua.png"
import Back from '../src/images/back-icon.png'
import song from '../src/images/nhac_nen.mp3'
import tangdiem from '../src/images/tangdiem.mp3'
import giamdiem from '../src/images/thatbai.mp3'
import dam from '../src/images/dam.mp3'
import { Grid, Paper, Switch } from '@mui/material';
import { useState } from 'react'
import ReactDOM, { render } from "react-dom";
import { BrowserRouter, renderMatches } from "react-router-dom";
import './index.css'
import Start from './Start';
import Round2 from './Round2'
import UploadFile from './UploadFile'
export default  function Game() {
  var [food,setFood] = useState(randomNumberInRange(1, 2));
  const audio = new Audio(song);
  const addScore = new Audio(tangdiem);
  const subScore = new Audio(giamdiem);
  const hitSound = new Audio(dam);
  const [isClick, setisClick] = useState(0);
  const [isHit, setisHit] = useState('');
  const [state, setState] = useState(0);
  const [isPlaying,setIsPlaying] = useState(0);
  var [score,setScore] = useState(0);
  const pause = () => {
    audio.pause();
    setIsPlaying(!isPlaying) ;
  };
  const play = () => {
    audio.play();
    setIsPlaying(!isPlaying) ;
  };
  function randomNumberInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  
  const changePointer = () => {
        setisClick(!isClick);
        changeState();
  };

  const handleClick = (index) => {
      if (isClick == 1){
        hitSound.play();
      }
   //   alert(food);
    //  alert(isHit+''+food);
    if (state === index ){ 
      changeScore();
    }
    else setisHit('');
    
  };

  const changeState = (score)=>{
      let count = 0;
        const timeout = setInterval(() => {
            count ++;
            if (count>100) {
             clearInterval(timeout);
              ReactDOM.render(
            <BrowserRouter>
                <UploadFile score = {score} />
            </BrowserRouter>,
            document.getElementById("root")
            );
                } 
        
    // update food and state
        
       
     //  alert(food)
        setState(randomNumberInRange(1, 9));
        setFood(randomNumberInRange(1, 2));
       }, 3700);
       
  };
  const changeScore=()=>{
    
    if (food===1 ){
    //      setImg(Bido);
        setisHit('+50');
        const timeOut = setInterval(() => {},500);
        clearInterval(timeOut);
        setScore(score+50);
        addScore.play();
        endGame();
   }
   else if(food===2 ){
       
       setisHit('-50');
        setScore(score-50);
        subScore.play();
        endGame();
        
   }
   else  {
  //  alert(state);
    setScore(score);}
  };
  function endGame() {
    if (score<0){
        ReactDOM.render(
            <BrowserRouter>
                <UploadFile score = {score}/>
            </BrowserRouter>,
            document.getElementById("root")
            );
    }
  }
  const back = () =>{
    ReactDOM.render(
      <BrowserRouter>
        <Start />
      </BrowserRouter>,
  document.getElementById("root")
  );
}
    return (
        <div  class='contain'  style={{cursor: isClick ? "url("+Bua+"), auto":"pointer"}} >
        <div class="score" >
          Score: {score} 
          <br></br><div style={{color: 'orange'}}>{ isHit}</div>
        </div>  
        <div class="change_score" >
        </div>
        <div class='pointer' onClick={changePointer} >    
         <img src={Bua} alt='a' style={{ 
           }}></img>
        </div>
       <div class="container" >
       <center> <Grid container spacing={'50px'} style={{marginLeft :'75px'}}>
                     <Grid item onClick={() => handleClick(1)} >
                        <Paper sx={{ 
                            height: 140, 
                            width: 120, 
                            borderRadius: 120,
                            border: '2px solid black' ,
                            padding: 'auto',
                            background:  state ===1? "url("+ (food===1? Bido:Ghost)+")":'linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%)',
                            backgroundImage: state ===1? '':'linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%)',
                            backgroundRepeat:'no-repeat',
                            color: state ===1? 'rgba(255, 255, 255, 0)':'white',
                        }}>1</Paper>
                    </Grid>
                    <Grid item onClick={() => handleClick(2)} >
                        <Paper sx={{ 
                            height: 140, 
                            width: 120, 
                            borderRadius: 120,
                            border: '2px solid black' ,
                            padding: 'auto',
                            background:  state ===2? "url("+(food===1? Bido:Ghost)+")":'linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%)',
                            backgroundImage: state ===2? '':'linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%)',
                            backgroundRepeat:'no-repeat',
                            color: state ===2? 'rgba(255, 255, 255, 0)':'white'
                        }}>2</Paper>
                    </Grid>
                    <Grid item>
                        <Paper  onClick={() => handleClick(3)} sx={{ 
                            height: 140, 
                            width: 120, 
                            borderRadius: 120,
                            border: '2px solid black' ,
                            padding: 'auto',
                            background:  state ===3? "url("+(food===1? Bido:Ghost)+")":'linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%)',
                            backgroundImage: state ===3? '':'linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%)',
                            backgroundRepeat:'no-repeat',
                            color: state ===3? 'rgba(255, 255, 255, 0)':'white'
                        }}>3</Paper>
                    </Grid>
                    </Grid>
            <Grid container spacing={'50px'} style={{marginLeft :'75px'}}>
                    <Grid item>
                        <Paper  onClick={() => handleClick(4)} sx={{ 
                            height: 140, 
                            width: 120, 
                            borderRadius: 120,
                            border: '2px solid black' ,
                            padding: 'auto',
                            background:  state ===4? "url("+(food==1? Bido:Ghost)+")":'linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%)',
                            backgroundImage: state ===4? '':'linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%)',
                            backgroundRepeat:'no-repeat',
                            color: state ===4? 'rgba(255, 255, 255, 0)':'white'
                        }}>4</Paper>
                    </Grid>
                    <Grid item>
                        <Paper  onClick={() => handleClick(5)} sx={{ 
                            height: 140, 
                            width: 120, 
                            borderRadius: 120,
                            border: '2px solid black' ,
                            padding: 'auto',
                            background:  state ===5? "url("+(food===1? Bido:Ghost)+")":'linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%)',
                            backgroundImage: state ===5? '':'linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%)',
                            backgroundRepeat:'no-repeat',
                            color: state ===5? 'rgba(255, 255, 255, 0)':'white'
                        }}>5</Paper>
                    </Grid>
                    <Grid item>
                        <Paper  onClick={() => handleClick(6)} sx={{ 
                            height: 140, 
                            width: 120, 
                            borderRadius: 120,
                            border: '2px solid black' ,
                            padding: 'auto',
                            background:  state ===6? "url("+(food===1? Bido:Ghost)+")":'linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%)',
                            backgroundImage: state ===6? '':'linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%)',
                            backgroundRepeat:'no-repeat',
                            color: state ===6? 'rgba(255, 255, 255, 0)':'white'
                        }}>6</Paper>
                    </Grid>
                    </Grid>
                <Grid container spacing={'50px'} style={{marginLeft :'75px'}}>
                    <Grid item>
                        <Paper  onClick={() => handleClick(7)} sx={{ 
                            height: 140, 
                            width: 120, 
                            borderRadius: 120,
                            border: '2px solid black' ,
                            padding: 'auto',
                            background:  state ===7? "url("+(food===1? Bido:Ghost)+")":'linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%)',
                            backgroundImage: state ===7? '':'linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%)',
                            backgroundRepeat:'no-repeat',
                            color: state ===7? 'rgba(255, 255, 255, 0)':'white'
                        }}>7</Paper>
                    </Grid>
                    <Grid item>
                        <Paper  onClick={() => handleClick(8)} sx={{ 
                            height: 140, 
                            width: 120, 
                            borderRadius: 120,
                            border: '2px solid black' ,
                            padding: 'auto',
                            background:  state ===8? "url("+(food===1? Bido:Ghost)+")":'linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%)',
                            backgroundImage: state ===8? '':'linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%)',
                            backgroundRepeat:'no-repeat',
                            color: state ===8? 'rgba(255, 255, 255, 0)':'white'
                        }}>8</Paper>
                    </Grid>
                    <Grid item>
                        <Paper  onClick={() => handleClick(9)} sx={{ 
                            height: 140, 
                            width: 120, 
                            borderRadius: 120,
                            border: '2px solid black' ,
                            padding: 'auto',
                            background:  state ===9? "url("+(food===1? Bido:Ghost)+")":'linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%)',
                            backgroundImage: state ===9? '':'linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%)',
                            backgroundRepeat:'no-repeat',
                            color: state ===9? 'rgba(255, 255, 255, 0)':'white'
                        }}>9</Paper>
                    </Grid>
                    </Grid> 
                    <button onClick={back}>
                        <img src={Back}alt='a' 
                        style={{ bottom: '0',
                              left:'0',
                              position: 'fixed'}} ></img>
                     </button>
                      <button onClick={isPlaying? pause:play}>
                        <img src={music}alt='a' 
                        style={{ bottom: '0',
                              right:'0',
                              height: '70px',
                              width: '70px',
                              position: 'fixed'}} ></img>
                     </button>
                </center>                    
             </div>         
          </div>
    );
  //  return(<Result score = {food}/>) 

   }

