import React from 'react';
import AboutImage from "./image 111.png"
import './AboutUs.css';
import SpecialFeatures from './SpecialFeatures';

const AboutUs = () => {
    return (
        <>
         <div className="about-us-container">
            <div className="about-text">
                <h3>About Us</h3>
                <h1>We Help Grow Student Careers</h1>
                <p>We've been doing this for over a decade since we always want to give learning services that aren’t taught in schools.</p>
                <button className="read-more">Read More</button>
            </div>
            <div className="about-image">
                <img src={AboutImage} alt="Student studying" />
            </div>
            <div className="about-stats">
                <div>
                    <h2>54M</h2>
                    <p>Students already enroll for using it.</p>
                </div>
                <div>
                    <h2>3.2K+</h2>
                    <p>courses are available with various categories.</p>
                </div>
                <div>
                    <h2>600</h2>
                    <p>Experienced author who will teach you.</p>
                </div>
            </div>
        </div>
        <SpecialFeatures/>
        </>
       
        
    );
};

export default AboutUs;