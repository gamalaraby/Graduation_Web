import React, { useState } from "react";
import "./AllCourses.css"; 
import ImagCourse from "./Iteme.png"

const courses = [
  {
    title: "UX Design Foundations",
    author: "Sen Janson",
    duration: "40 Minutes",
    modules: 21,
    level: "Beginner",
    price: 128,
    rating: 4.8,
    image: "course1.jpg",
  },
  {
    title: "UX Design Foundations",
    author: "Sen Janson",
    duration: "40 Minutes",
    modules: 21,
    level: "Beginner",
    price: 128,
    rating: 4.8,
    image: "course1.jpg",
  },
  {
    title: "UX Design Foundations",
    author: "Sen Janson",
    duration: "40 Minutes",
    modules: 21,
    level: "Beginner",
    price: 128,
    rating: 4.8,
    image: "course1.jpg",
  },
  {
    title: "UX Design Foundations",
    author: "Sen Janson",
    duration: "40 Minutes",
    modules: 21,
    level: "Beginner",
    price: 128,
    rating: 4.8,
    image: "course1.jpg",
  },
  {
    title: "UX Design Foundations",
    author: "Sen Janson",
    duration: "40 Minutes",
    modules: 21,
    level: "Beginner",
    price: 128,
    rating: 4.8,
    image: "course1.jpg",
  },
  {
    title: "UX Design Foundations",
    author: "Sen Janson",
    duration: "40 Minutes",
    modules: 21,
    level: "Beginner",
    price: 128,
    rating: 4.8,
    image: "course1.jpg",
  },
  {
    title: "UX Design Foundations",
    author: "Sen Janson",
    duration: "40 Minutes",
    modules: 21,
    level: "Beginner",
    price: 128,
    rating: 4.8,
    image: "course1.jpg",
  },
  {
    title: "UX Design Foundations",
    author: "Sen Janson",
    duration: "40 Minutes",
    modules: 21,
    level: "Beginner",
    price: 128,
    rating: 4.8,
    image: "course1.jpg",
  },
  {
    title: "UX Design Foundations",
    author: "Sen Janson",
    duration: "40 Minutes",
    modules: 21,
    level: "Beginner",
    price: 128,
    rating: 4.8,
    image: "course1.jpg",
  },
  {
    title: "UX Design Foundations",
    author: "Sen Janson",
    duration: "40 Minutes",
    modules: 21,
    level: "Beginner",
    price: 128,
    rating: 4.8,
    image: "course1.jpg",
  },
  {
    title: "UX Design Foundations",
    author: "Sen Janson",
    duration: "40 Minutes",
    modules: 21,
    level: "Beginner",
    price: 128,
    rating: 4.8,
    image: "course1.jpg",
  },
  {
    title: "UX Design Foundations",
    author: "Sen Janson",
    duration: "40 Minutes",
    modules: 21,
    level: "Beginner",
    price: 128,
    rating: 4.8,
    image: "course1.jpg",
  },
  {
    title: "UX Design Foundations",
    author: "Sen Janson",
    duration: "40 Minutes",
    modules: 21,
    level: "Beginner",
    price: 128,
    rating: 4.8,
    image: "course1.jpg",
  },
  {
    title: "UX Design Foundations",
    author: "Sen Janson",
    duration: "40 Minutes",
    modules: 21,
    level: "Beginner",
    price: 128,
    rating: 4.8,
    image: "course1.jpg",
  },
  {
    title: "UX Design Terminology",
    author: "Sen Janson",
    duration: "40 Minutes",
    modules: 21,
    level: "Beginner",
    price: 128,
    rating: 4.8,
    image: "course2.jpg",
  },
  {
    title: "Common Design Patterns",
    author: "Sen Janson",
    duration: "40 Minutes",
    modules: 21,
    level: "Beginner",
    price: 128,
    rating: 4.8,
    image: "course3.jpg",
  },
];

const CourseCard = ({ title, author, duration, modules, level, price, rating, image }) => (
  <div className="course-card">
    <img src={ImagCourse} alt={title} className="course-image" />
    <div className="course-details">
      <h3>{title}</h3>
      <p>By {author}</p>
      <p>
        {duration} • {modules} Modules • {level} Level
      </p>
      <p>Rating: {rating} ⭐</p>
    </div>
    <div className="course-price">${price}</div>
  </div>
);

const AllCourses = () => {
  const [sortBy, setSortBy] = useState("Most Popular");

  const sortedCourses = [...courses].sort((a, b) => {
    if (sortBy === "Price: Low to High") return a.price - b.price;
    if (sortBy === "Price: High to Low") return b.price - a.price;
    return 0; 
  });

  return (
    <div className="all-courses">
      <div className="headerCourse">
        <h1>Showing {courses.length} results</h1>
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="Most Popular">Most Popular</option>
          <option value="Price: Low to High">Price: Low to High</option>
          <option value="Price: High to Low">Price: High to Low</option>
        </select>
      </div>
      <div className="courses-grid">
        {sortedCourses.map((course, index) => (
          <CourseCard key={index} {...course} />
        ))}
      </div>
      <div className="pagination">
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>...</span>
        <span>30</span>
      </div>
    </div>
  );
};

export default AllCourses;