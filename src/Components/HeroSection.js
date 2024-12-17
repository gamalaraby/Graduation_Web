import React from "react";
import "./HeroSection.css";
import HeroImage from "./hero.svg"
import Course from "./Course";
import Authors from "./Authors";
import AboutUs from "./AboutUs";
import Header from "./Header";
import topPatern from '../../src/Assets/Paterns/Patern1.svg'
import Footer from "../ComponentsReem/Footer/Footer";

function HeroSection() {
  return (
    <>
    
     <section className=" row g-0 p-0 bgc text-white">
      
      <div className="hero-content col-md-8 p-0">
        <h1>Advance Your Career <br/> in a Digitalized World</h1>
        <p>
        We provide you with unrestricted access to the greatest courses from the <br/>
         top specialists, allowing you to learn countless of practical lessons in a range <br/>
          of topics.
        </p>
        
        <div className="search-bar">
          <input type="text" placeholder="Search course event or author" />
          <button>Courses</button>
        </div>
        <p className="popular-topics">Popular : UI Design, UX Research, Android, C++</p>
       
      </div>
      <div className="hero-image col-md-4 p-0">
        <img src={HeroImage} alt="HeroImage" className="w-100 p-0 m-0"></img>
      </div>
    </section>
    <Course/>
    <Authors/>
    <AboutUs/>
    <Footer/>
    
    </>
   

  );
}

export default HeroSection;