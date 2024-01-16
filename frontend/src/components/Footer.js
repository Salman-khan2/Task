import React from "react";
import './Footer.css';
import companyLogo  from './footer_icon.jpg';
import plus_icon from './plus_icon.png';

const Footer = () =>{
    return(
        <div className="main_footer">
            <div className="footer">
                <img className="footer_logo"  src={companyLogo} alt="company_logo" />
                <img className="plus_icon" src={plus_icon} alt="plus_icon" />
                <h4>Create Flashcard</h4>
            </div>
           
        </div>
    )
}
export default Footer;