import React from "react";
import "./FooterPage.css";
import logo from "./Vector.png" 
import logo1 from "./Vector1.png" 
import logo2 from "./Vector2.png" 
import logo3 from "./Vector3.png" 


const FooterPage = () => {
  return (
    <div className="footer-page">
      <div className="cta-section">
        <h1>Ready to Start Your Courses <br></br>and Grow Your Career</h1>
        <p>
          Experts teach you everything from the comfort of your own home.
          Improve your career today by<br></br> enrolling in excellent courses at
          affordable prices.
        </p>
        <button className="cta-button">Get Started</button>
      </div>

      <footer className="footer">
        <div className="footer-logos">
            <div><img src={logo} alt="Logo 1" />logoipusm</div>
            <div><img src={logo1} alt="Logo 1" />logoipusm</div> 
            <div><img src={logo2} alt="Logo 1" />logoipusm</div>      
            <div><img src={logo3} alt="Logo 1" />logoipusm</div>        
            <div><img src={logo} alt="Logo 1" />logoipusm</div>
        </div>
        <div className="footer-content">
          <div className="footer-about">
            <h3>EdTech</h3>
            <p>
              EdTech is a global online learning platform that offers anytime,
              anywhere access to online courses.
            </p>
          </div>
          <div className="footer-links">
            <h4>Pages</h4>
            <ul>
              <li>Home</li>
              <li>Courses</li>
              <li>Events</li>
              <li>Authors</li>
              <li>About Us</li>
              <li>Teach on EdTech</li>
            </ul>
          </div>
          <div className="footer-company">
            <h4>Company</h4>
            <ul>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
              <li>Cookies</li>
            </ul>
          </div>
          <div className="footer-community">
            <h4>Community</h4>
            <ul>
              <li>Help Center</li>
              <li>FAQ</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>©2022 EdTech. All rights reserved</p>
          <div className="social-icons">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-linkedin-in"></i>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FooterPage;