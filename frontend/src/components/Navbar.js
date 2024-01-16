import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css'
import logo from './logo.jpg';

const Navbar = () =>{
    return (
        <div className="navbar">
           <Link to='/'><img className="company_logo" src={logo} alt="Company_Logo" /> </Link> 
           <ul className="navbar-ul">
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/flashcard'>Flashcard</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
            <li><Link to='/faq'>FAQ</Link></li>
            <li className="login"><Link to='/login'>Login</Link></li>
           </ul>
        </div>
    )
}

export default Navbar;