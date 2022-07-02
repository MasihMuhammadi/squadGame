import React,{useState} from 'react';

const RandomQuestion = ({selectedAnswer,correctLetter,word}) =>{ 
   word == 'word-dark';
    return(<>
        
        <div className={`${word} mb-5`}>

      {`${selectedAnswer}`.split('').map((letter,i)=>{
        return(
          <span className="letter" key={i}>
            {correctLetter.includes(letter) ? letter : ' '}
          </span>
        )
      
      })}

    </div>
    </>
    )
}
export default RandomQuestion;