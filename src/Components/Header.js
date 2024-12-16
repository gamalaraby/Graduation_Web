import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "./Vector.png"

function Header() {
  return (
    <header className="header">
      <div className="logo"><img src={logo} alt="logo"></img>EdTech</div>
    
      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/browse">Browse</Link>
        <Link to="/TeachOnEd">Teach on Edtech</Link>
        <Link to="#">About Us</Link>
      </nav>
      <div className="auth-buttons">
        <Link to="/SignIn"><button className="sign-in">Sign In</button></Link>
        <Link to="/SignUp"><button className="sign-up">Sign Up</button></Link>
      </div>
    </header>
  );
}

export default Header;