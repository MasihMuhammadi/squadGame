import React,{useState} from 'react';

const WrongLetters = ({wrongLetter}) =>{
return(    <div className='d-inline-flex  mx-1'>
        <div>
          
        {wrongLetter.length > 4 && <p>wrong</p>}
        {wrongLetter.map((letter,index)=><span className='d-inline' key={index}>{letter}</span>)
        .reduce((prev,curr) => prev == null ? [curr] : [prev, ', ', curr],null)
       
        }

       
       </div> 
    </div>
)
    
}
export default WrongLetters;