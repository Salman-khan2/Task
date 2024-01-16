import React from "react";
import { Link } from "react-router-dom";
import home_icon from './home_icon.png'
import './Main.css'
import { MdOutlineNavigateNext } from "react-icons/md";
 
const Main = () =>{
    return(
        <div className="main">
            <div className="icon">
                <img src={home_icon} alt="home" />
            </div>
            <MdOutlineNavigateNext className="icon1"/>
            <h4 className="fl"> Flashcard</h4>
            <MdOutlineNavigateNext className="icon1"/>
            <h4 className="fl">Mathematics</h4>
            <MdOutlineNavigateNext className="icon1"/>
            <h4 className="bl"> Relation and Function</h4>
            
        </div>

    )

}
export default Main;