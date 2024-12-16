// components/CourseList.js
import React from "react";
import CourseCard from "./CourseCard";
import "./CourseList.css";

function CourseList() {
  const courses = [
    {
      title: "UX Design Foundations",
      instructor: "Ramazan Yenici",
      rating: 4.8,
      reviews: 122,
      price: 128,
      duration: "40 Min",
      modules: 21,
      level: "Beginner Level",
      imageUrl: "image-url-1"
    },
    {
      title: "UI/UX Design Terminology",
      instructor: "Ramazan Yenici",
      rating: 4.8,
      reviews: 122,
      price: 128,
      duration: "40 Min",
      modules: 21,
      level: "Beginner Level",
      imageUrl: "image-url-2"
    },
    {
      title: "Common Design Patterns",
      instructor: "Ramazan Yenici",
      rating: 4.8,
      reviews: 122,
      price: 128,
      duration: "40 Min",
      modules: 21,
      level: "Beginner Level",
      imageUrl: "image-url-3"
    },
  ];

  return (
    <div className="course-list">
      {courses.map((course, index) => (
        <CourseCard key={index} {...course} />
      ))}
    </div>
  );
}

export default CourseList;