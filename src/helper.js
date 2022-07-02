


export function checkWin (correct,wrong,answer){
  
    let status = 'win';
    `${answer}`.split('').forEach(letter => {
        if(!correct.includes(letter)){
            status = '';
        }
      
        
    });


    if(wrong >= 4) status = 'lose';

    return status;

}


