import React from "react";
import { Link } from "react-router-dom";
import './Faq.css';
import scrolldown_icon from './Down.png';

const Faq = () =>{
    return(
        <div className="faq">
         <h1>FAQ</h1>
         <div className="faq_footer">
            <h4> your Navbar component file. Adjust the styles</h4>
            <img className="scrolldown" src={scrolldown_icon} alt="icon" />
         </div>
         <div className="faq_footer">
            <h4> your Navbar component file. Adjust the styles</h4>
            <img className="scrolldown" src={scrolldown_icon} alt="icon" />
         </div>
         <div className="faq_footer">
            <h4> your Navbar component file. Adjust the styles</h4>
            <img className="scrolldown" src={scrolldown_icon} alt="icon" />
         </div>
        </div>
    )
}
export default Faq;