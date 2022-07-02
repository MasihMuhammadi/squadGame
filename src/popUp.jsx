import React,{useState,useEffect} from 'react'
 import { checkWin } from  './helper';

export let finalAnswer;
export let finalMessage;

const PopUp = ({correctLetter,wrongLetter,selectedAnswer,setCanPlay,playAgain,popup_theme,next_theme}) =>{ 
    next_theme = 'btn btn-otuline-info next-dark'
    popup_theme;
    finalAnswer  = '';
    finalMessage = '';

    let canPlay = true;
   
    if(checkWin(correctLetter,wrongLetter,selectedAnswer) == 'win' ){
       
        finalMessage = 'congratulation You win';
        setFinalAnswer = selectedAnswer;
        canPlay = false;
     
         
    }else if(wrongLetter.length >= 4){
        finalAnswer = selectedAnswer;
        
        finalMessage = 'Unfortunately You Lose';
        canPlay = false;

    }

    useEffect(()=>{
        setCanPlay = false;
    },[])
    return(<>
          <div className={`${popup_theme} text-center`} style={finalMessage !== '' ? {display:'inline'} : {display:'none'}}>
             
            <div >{finalMessage}</div>
            <div>The answer is: <b>{finalAnswer}</b> </div>
            <button className={`${next_theme}`} onClick={playAgain}>Next</button>
             
        
           </div>
    </>)
    
}


export default PopUp;
