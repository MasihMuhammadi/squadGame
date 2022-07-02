import React,{useState} from 'react';

const Header = () =>{
    
   return(
       <div className=" ">
        <div className=" d-inline mx-5"><img className="logo" src="./logo.svg" alt="squad-game logo" /></div> 
      <div className="text-center">
        <a className="mx-3" href="http://www.linkedin.com/in/masih-muhammadi-7a1275233"><img width="40"src="./linkedin.svg" /></a>

        <a className="mx-3 " href="http://www.instagram.com/ma_3ih.qara__202" ><img src="./instagram.svg" /></a>
    </div>
        <div className=""><a href="http://www.github.com/MasihMuhammadi/squadGame"><img className="github" src="./github.svg" alt="github logo" /></a></div>

       </div>
   
   );

}

export default Header;
