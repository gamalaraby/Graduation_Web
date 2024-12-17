import React from "react";
import "./Course.css";
import CourseList from "./CourseList";

function Course() {
  return (
    <div className="Course">
      <header className="header-course">
        <div className="header-pra">
        <h1>More Than 3.2K 
            Courses Will Guide You</h1>
        <p>
          We provide a range of categories to help you choose courses that fit your expertise.
          More than 3.2K courses will guide you from basic.
        </p>
        </div>
        
      </header>
      <nav className="categories">
          <button>UI/UX Design</button>
          <button>Graphic Design</button>
          <button>3D & Animation</button>
          <button>Front-End</button>
          <button>Back-End</button>
          <button>IOT</button>
        </nav>
      {/* <CourseList /> */}
      <footer>
        <button className="more-courses">More Courses</button>
      </footer>
    </div>
  );
}

export default Course;