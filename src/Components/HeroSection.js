import React from "react";
import "./HeroSection.css";
import HeroImage from "./Hero.jpg"

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Advance Your Career in a Digitalized World</h1>
        <p>
        We provide you with unrestricted access to the greatest courses from the
         top specialists, allowing you to learn countless of practical lessons in a range
          of topics.
        </p>
        <div className="search-bar">
          <input type="text" placeholder="Search course, event or author" />
          <button>Courses</button>
        </div>
        <p className="popular-topics">Popular : UI Design, UX Research, Android, C++</p>
      </div>
      <div className="hero-image">
        <img src={HeroImage} alt="HeroImage"></img>
      </div>
    </section>
  );
}

export default HeroSection;