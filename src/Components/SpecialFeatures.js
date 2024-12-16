import React from 'react';
import './SpecialFeatures.css';
import Special from "./Frame 14623.png"

const SpecialFeatures = () => {
    return (
        <div className="special-features-container">
            <div className="features-list">
                <div className="feature-item">
                    <span className="icon">💬</span>
                    <h3>Discussion 24/7</h3>
                    <p>The community is always there for you if you have difficulty learning the course.</p>
                </div>
                <div className="feature-item">
                    <span className="icon">📅</span>
                    <h3>Schedule with Author</h3>
                    <p>Choose an order schedule with the author to get in-depth knowledge with 1 on 1 call.</p>
                </div>
                <div className="feature-item">
                    <span className="icon">📝</span>
                    <h3>Practice for Free</h3>
                    <p>Test your skills with practice tests that have been provided on our platform.</p>
                </div>
            </div>
            <div className="features-description">
                <h3>Why Us</h3>
                <h1>Our Special Features We Build for You</h1>
                <p>EdTech is a platform that helps students in advancing their career by providing solutions for simple and flexible online learning, allowing you to study anywhere and anytime at affordable prices.</p>
                <div className="feature-image">
                    <img src={Special} alt="Student working" />
                </div>
            </div>
        </div>
    );
};

export default SpecialFeatures;