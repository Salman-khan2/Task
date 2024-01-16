import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Window.css';
import reload_icon from './reload.png';
import back_icon from './backward.jpg';
import next_icon from './forward.jpg';
import zoom_out from './zoom_out.jpg';

const Window = () =>{
    const [number,setNumber] = useState(1); 
    const handlbackClick = ()=>{
        setNumber(number-1);
    }
    const handleNextClick = () =>{
        setNumber(number+1);
    }
    return(
        <div>
            <h2 className="h2">Relati0n and Function (Mathmatics)</h2>
       <div className="main_window">
       
        <div className="window_header">
        <ul className="window-ul">
            <li><Link to='/study'>Study</Link></li>
            <li><Link to='/quiz'>Quiz</Link></li>
            <li><Link to='/test'>Test</Link></li>
            <li><Link to='/game'>Game</Link></li>
            <li><Link to='/others'>Others</Link></li>
           </ul>
        </div>
        <div className="window">
            <h3> 9 + 6 + 7x -2x -3 </h3>

        </div>
          <div className="icon_sec">
           <img className="reload" src={reload_icon} alt="reload_icon" />
           <img className="back_icon" src={back_icon} alt="back_icon" onClick={handlbackClick} />
           <h4>{number}/10</h4>
           <img className="next_icon" src={next_icon} alt="next_icon" onClick={handleNextClick} />
           <img className="zoom_out" src={zoom_out} alt="zoom_out" />
          </div>
       </div>
       </div>
    )
}
export default Window;