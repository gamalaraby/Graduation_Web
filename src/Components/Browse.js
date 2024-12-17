import React from "react";
import "./Browse.css";
import AllCourses from "./AllCourses";
import FooterPage from "./FooterPage";

function Browse() {
  return (
    <div>
    <section className="browse-page">
      <h1>Browse in EdTech</h1>
      <p>
        Browse learning content designed to help your business or career. You can learn by choosing a course, event or dive right in on a 1 on 1 call with the author.
      </p>
      <div className="search-bar">
        <input type="text" placeholder="Search course, event or author" />
        <button>Courses</button>
      </div>
      <p className="popular-topics">Popular : UI Design, UX Research, Android, C++</p>
    </section>
    <AllCourses/>
    {/* <FooterPage/> */}
    </div>
  );
}

export default Browse;