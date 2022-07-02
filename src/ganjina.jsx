import React,{useEffect, useRef, useState} from 'react';

import Header  from './header';

import RandomQuestion from './randomQuestion';
import WrongLetters from './wrongLetters';

import PopUp from './popUp'

import { finalMessage} from './popUp';





const Ganjina = (props) =>{
  let questions = [
  'how many minutes does an ant sleep a day?',
  'what is the name of the most expensive flower in the world?',
   ' which country does not have a railway?',
  'which flower can help in radioactive cleaning of the soil?',
  ' what is a bow or violine made of?',
  'what is the name of the oldest curency in the world?',
  ' how many years do ant macs live?',
  ' how many toes does a donkey have?',
   'which reptile interferes in earth quake detection?',
   'what perecentage ot the worlds population has green eyes?', 
  ' which country has the most islands in the world?',
  'how much oxygen does the human brain use?',
  'how many bones are there in a human foot?',
  'what is the name of the plantet solar system style?',
  'what is the largest eye related to?',
  'how many earths can fit inside the sun (Approx)?',
  'which country has the highest per capita consumption of chocolate in the world?',
  'what was the first type of toy that was advertised on television?',
  'what is the name of smallest bone in human body?',
  'the largeest Tyrannosaurus Rex skeleton was found in which country?',
  'after antarctica,which is the least populated continent in the world?',
  'which country has the oldest coninulously used national flag?',
  'which animal has the loudest voice among the animals on earth?',
  'which of the planets in our solar system doest not have moons?',
  'which of the planets in our solar system doest not have moons?',
  'how many languages are written fro right to left?',
  'how many trees are there on earth?',
  'what is the name of largest glacier of the world',
  'what is the first animated filmm that was nominated for the academy award for best film?',
  'what are owl chicks called?',
   'what is the name of the only type of parrot that connot fly?',
   'what is the name of driest place on earth?',
   'where is diriest place on earth?',
   'what percentage of people in the world have black or brown hair?',
   'which country has the most fresh water in the world?',
   'who was the last defender who won the ballon d\'Or ?' ,
   'where are the oldest pottery workds in the world found?',
   'a strait in turkey that seperates asia from europe',
   'how many notes are there in music?',
   'what is the name of the white ball in snooker?',
   'how many points does a dice have?',
   'what is the name of the longest bony fish in the world?',
   'which team had the most presence in the world cup finals?',
   'which country has the highest consuption of eggs per capita?',
   'july month is named in honor whom?',
   'the oldest dress in history was found in which country?',
   'newborn giraffes are approximately how many eters tall on average?',
   'which country is the first producer of cocoa in the world?',
   'how many eyes do bees have?',
   'the largest country taht has only one time zhone?',
   'what geometric shape does the pupil of an octopus look like?',
   'where is the first revelation to prophet moses from the God?',
   'who was the american president which droped the atomic bomb on the poeple of hiroshima?',
   'which tree is a symobol of peace?',
   'where is the capital of bangaladesh?',
   'what is the name of the inventor of motorcycle?',
   'which language has the least number of alphabet letter in the languages of the world?',
   'who is inverted the first tape recorder',
   'who is the first light physics scientist in the world?',
   'which country is the largest country in west Asia?',
   'who was the investor of the car',
   'what is lightest metal in nature?',
   'the first satellite was launched by which country?',
   'which island in the world is known as the spice island?',
   'which country is the largest island in the world?',
   'which country is the birthplace of the yellow lilly?',
   'tripoli is the capital of which country?',
   'who is the inventro of dynamite?',
   'who is the author of the famous book Fund?',
   'who is the inventor of radio?',
   'what is the american panther called?',
   'which bird of prey searches for its prey by sound?',
   'what is the diamond measurement unit?',
   'who is the world\'s  first woment astronaut?',
   'what is the animal whose heart is in its head?',
   'which country was the first to know tea?',
   'how many milk teeth are there?',
   'in which country was color television created?',
   'in which country is the main tin mine?',
   'in which country was the first tobacco plant found?',
   'which country invented the guillotine?',
   'what percentage of the human body is made up water?',
   'which insect has the longest lifespan?',
   'which animal keeps one eye open while sleeping?',
   'which animal\'s eye is bigger than its brain?',
   'how many sounds can cats produce with their larynx?'

  ];

  
  let answers = [
  'sixteen',
  'zholit',
  'island',
  'chamelons',
  'horsehair',
  'britishpound',
  'thirty',
  'one',
  'snake',
  'two',
  'sweden',
  'twenty',
  'twentysix',
  'saturn',
  'squid',
  'onemilion',
  'swees',
  'poptatohead',
  'stiletto',
  'canada',
  'austraila',
  'denmanrk',
  'spermwhale',
  'mercury',
  'venus',
  'twelve',
  'threebilion',
  'lambertfisher',
  'beastandybeauty',
  'owlet',
  'kakapo',
  'atacama',
  'chile',
  'ninety',
  'brazil',
  'fabiocannavaro',
  'china',
  'bosphorus',
  'seven',
  'cuball',
  'twentyone',
  'bigpaddlefish',
  'germany',
  'japan',
  'juliuscaesar',
  'egypt',
  'two',
  'ivorycoast',
  'five',
  'china',
  'rectangle',
  'sinaimount',
  'harrytruman',
  'olive',
  'dhaka',
  'daimler',
  'rotokas',
  'thomasedison',
  'ibnhaytham',
  'saudiarabia',
  'karlbenz',
  'lithium',
  'sovietunion',
  'granada',
  'greenland',
  'siberia',
  'libya',
  'alferdnobel',
  'karlmarx',
  'elmomarkony',
  'jaguar',
  'owl',
  'carat',
  'tereshkova',
  'shrimp',
  'china',
  'twenty',
  'america',
  'bolivia',
  'america',
  'france',
  'sixty',
  'termite',
  'wolf',
  'ostrich',
  'hundred'

  ];
    
  
  
  let r = Math.floor(Math.random());

  let selectQues= questions[r * questions.length];
  let selectAns = answers[r * answers.length];
 
 
  const [score,setScore] = useState(0);
  const [canPlay, setCanPlay] = useState(true);
  const [correctLetter,setCorrectLetter] = useState([]);
  const [wrongLetter,setWrongLetter ]= useState([]);
  const [selectedQuestion,setSelectedQuestion] = useState(selectQues);
  const [selectedAnswer,setSelectedAnswer] = useState(selectAns);
  const [showNotification,setShowNotification] = useState('repeat-notification notification-light');
  const [q_number,setQ_number] = useState(1);
  const [chance ,setChance] = useState(5);
  const [time,setTime] = useState(30);
  const [circle,setCircle] = useState('circle');
  const [check, setCheck] = useState(false);
  const [body,setBody] = useState('bg-white');
  const [container,setContainer]= useState('bg-white');
  const [description,setDescription] = useState('descriptions description');
  const [keyboardBackground,setKeyboardBackground] = useState('');
  const [word,setWord] = useState('word');
  const [level,setLevel] = useState(1);
  const [popup_theme,setPopup_theme] = useState('popUp');
  const [next_theme,setNext_theme] = useState('next');
  const [goodOrBadMessage,setGoodOrBadMessage] = useState('wow, you going to new Level');
  const [alertStyle,setAlertStyle] = useState('newLevelOrLosing');


  useEffect(()=>{
    setTimeout(()=>{
      setShowNotification('repeat-notification notification-light');
    },1000)
  },[showNotification])

  useEffect(()=>{
    setTimeout(()=>{
       setAlertStyle(' newLevelOrLosing');
    },2500)
  },[alertStyle]);


  // useEffect(()=>{
  //  setTimeout(()=>{
  //     if(time == 0){
  //       let rr = Math.floor(Math.random() * answers.length)
  //       clearTimeout();
  //       setAlertStyle('newLevelOrLosing newLevelOrLosing-show');
  //       setGoodOrBadMessage('sorry! Your time is finish');
  //       setChance(chance - 1);
         
  //       if(chance == 1){
  //         setChance(5);
  //         setQ_number(1);
  //         setScore(0);

  //       }
  //         setTimeout(()=>{
  //           setSelectedAnswer(answers[rr]);
  //         setSelectedQuestion(questions[rr]);
  //         setTime(30)
  //         },4000)

  //     }
  //     else{
  //        setTime(time - 1);
  //     }
     
  //   },1000)
    
  // },[time])
  


const handleKeydown = (event) =>{
                      

  const letter = event.toLowerCase();

  if (canPlay == true  && `${selectedAnswer}`.includes(letter)) {
    
    if (!correctLetter.includes(letter)) {
      setCorrectLetter(currentletter => [...currentletter,letter]);
    }


    else{

      setShowNotification('notification-hidden repeat-notification');
     
    }
 
  } 
  else {

    if (!wrongLetter.includes(letter)) {
      setWrongLetter(wrongLetter => [...wrongLetter,letter]);

      
     
    }
     else {
     // showNotification();
     setShowNotification('notification-hidden repeat-notification');
    }
    
  }

  
     
      }



      //////*****          SHOW WIN AND LOOSE CHANCE QN  = ADN MISTAKESS */
      const playAgain = () =>{

        
        const random = Math.floor(Math.random () * questions.length)
          setCanPlay(true);
          setCorrectLetter([]);
          setWrongLetter([]);
          setSelectedAnswer(answers[random]);
          setSelectedQuestion(questions[random]);
          setQ_number(q_number + 1);
            setTime(30);
          
          
        if(finalMessage == 'congratulation You win'){
          setScore(score + 10);
          if( score == 40){
            setLevel(level + 1);
            setAlertStyle('newLevelOrLosing newLevelOrLosing-show')
            setWrongLetter([]);
            setChance(5);
          }
          else if(score == 90){
            setLevel(level + 1);
            setAlertStyle('newLevelOrLosing newLevelOrLosing-show')
            setWrongLetter([]);
            setChance(5);
          }
          else if(score == 140){
            setLevel(level + 1);
            setAlertStyle('newLevelOrLosing newLevelOrLosing-show')
            setWrongLetter([]);
            setChance(5);
          }
          else if(score == 190){
            setLevel(level + 1);
            setAlertStyle('newLevelOrLosing newLevelOrLosing-show')
            setWrongLetter([]);
            setChance(5);
          }
        }
        else if(finalMessage == 'Unfortunately You Lose'){
            
          if(chance == 1){
            setGoodOrBadMessage('oooh No!... You are too bad');
            setAlertStyle('newLevelOrLosing newLevelOrLosing-show')
            setScore(0);
            setLevel(0);
            setQ_number(0);
            setWrongLetter([]);
            setChance(0);
            setChance(5);
            }
            else {
              setChance(chance - 1);
            }
          
        }
        

      }
      const checkboxRef = useRef(check);

      const theme = (word,popup_theme) =>{
       setCheck(!check);
        if(!check){
  
          setCircle('circle-dark');
          setBody('bg-dark text-info');
          setDescription('descriptions-dark');
          setKeyboardBackground('btn-outline-info keyboard-dark');
          setWord('word-dark');
          setContainer('bg-dark');
          setPopup_theme('popUp-dark');
          setNext_theme('next-dark');
          setShowNotification('repeat-notification notification-dark');
          document.querySelector('body').style.background = 'rgb( 33, 37, 41)';
        } 
       
        else if( check){
       
          setCircle('circle');
          setBody('bg-white ');
          setDescription('descriptions')
          setKeyboardBackground('');
          setWord('word');
          setContainer('bg-white');
          setPopup_theme('popUp');
          setNext_theme('next');
          document.querySelector('body').style.background = 'white';
          setShowNotification('repeat-notification notification-light');
          
        }
      }
      
      return ( <>
      <div className={` ${container}`}>   
         <div className={`body ${body}`}>

    <Header />


    <div className={`${description} mt-5 text-left`}>
                            
        <div className="d-flex info-1 flex-row ">
            <input  type="checkbox " className='d-none' ref={checkboxRef}></input>
              <div className="circle-background" onClick={theme}><div  className={circle}></div></div>
              <span  className="col px-1">Score: {score}</span>
              <span  className="col px-1 mx-1">Level: {level}</span>
              <span  className="col px-1">time : {time}s </span>
        </div>
              
        <div className="mt-3  info-2 mb-3 d-flex flex-row">
              <span className="col px-1">Chance :{chance}</span>
              <span className="col px-1 mx-1">Wrongs:<WrongLetters wrongLetter={wrongLetter} /></span>
              <span className="col px-1">Q-N :{q_number} </span>
        </div>
               
    </div>

               <div className='question text-center mt-4 'style={{marginBottom:'60px'}}>


                 <div className="question ">
                   {selectedQuestion}
                    
                   <RandomQuestion word={word} correctLetter={correctLetter} selectedAnswer={selectedAnswer}/></div>
               
              
               </div>

 
               <div className={showNotification}>you entred this letter </div>
         
          <div className="row mt-5 mx-0">
         
         { ['q','w','e','r','t','y','u','i','o','p'].map(letter =>(
         <div className={`col keyboard btn mx-0 ${keyboardBackground}` }   value={letter} onClick={()=>handleKeydown(letter)}   key={letter}>{letter}</div>
                                
           )) }    
               </div>
          <div className="row mt-2 mx-2 px-1">
          { ['a','s','d','f','g','h','j','k','l'].map(letter =>(
         <div className={`col keyboard btn mx-0 ${keyboardBackground}` }   key={letter} onClick={()=>handleKeydown(letter)} value={letter} >{letter}</div>
                                
           )) }    
               </div>
        
        
          <div className="row mt-2 mx-3 px-1">
          { ['z','x','c','v','b','n','m'].map(letter =>(
         <div className={`col keyboard btn mx-1 ${keyboardBackground}`  }key={letter} onClick={()=>handleKeydown(letter)} value={letter} >{letter}</div>
                                
           )) }    
           
          </div>

          <PopUp setScore={setScore} next_theme={next_theme} popup_theme={popup_theme}   selectedAnswer={selectedAnswer} correctLetter={correctLetter} wrongLetter={wrongLetter} canPlay={canPlay} playAgain={playAgain} />
          
                        
          <div className={`${alertStyle}`}>
            {goodOrBadMessage}
          </div>
          </div>
          </div>

      </>
        
  );
  }

  export default Ganjina;