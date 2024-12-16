// components/CourseCard.js
import React from "react";
import "./CourseCard.css";
import Iteme from "./Iteme.png"

function CourseCard({ title, instructor, rating, reviews, price, duration, modules, level, imageUrl }) {
  return (
    <div className="course-card">
      <img src={Iteme} alt={title} className="course-image" />
      <h3>{title}</h3>
      <p>By {instructor}</p>
      <p>
        <span>⭐ {rating}</span> ({reviews})
      </p>
      <p>${price}</p>
      <div className="course-details">
        <span>{duration}</span> | <span>{modules} Modules</span> | <span>{level}</span>
      </div>
    </div>
  );
}

export default CourseCard;