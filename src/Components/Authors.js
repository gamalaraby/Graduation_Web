import React from 'react';
import './Authors.css';
import Avatar from "./Avatar.png"

const authors = [
    { id: 1, name: 'Ahmet Cetin', courses: 16, price: 100, specialty: '3D Design', image: 'path/to/image1.jpg' },
    { id: 2, name: 'Ahmet Cetin', courses: 16, price: 100, specialty: 'Graphic Design', image: 'path/to/image2.jpg' },
    { id: 3, name: 'Ahmet Cetin', courses: 16, price: 100, specialty: 'Front-End', image: 'path/to/image3.jpg' },
    { id: 4, name: 'Ahmet Cetin', courses: 16, price: 100, specialty: 'Back-End', image: 'path/to/image4.jpg' },
    { id: 5, name: 'Ahmet Cetin', courses: 16, price: 100, specialty: 'Game Design', image: 'path/to/image5.jpg' },
    { id: 6, name: 'Ahmet Cetin', courses: 16, price: 100, specialty: 'IoT', image: 'path/to/image6.jpg' },
];

const AuthorCard = ({ name, courses, price, specialty, image }) => (
    <div className="author-card">
        <img src={Avatar} alt="NoPhoto" className="author-image" />
        <h3>{name}</h3>
        <p>{courses} Courses</p>
        <h4>${price}/hour</h4>
        <button className="specialty">{specialty}</button>
    </div>
);

const Authors = () => (
    <div className="authors-container bgcc ">
        <h2>Meet Our Authors</h2>
        <p className=''>Our authors are so good that they will teach you all you need to know to advance your career in the technology field, even if you have zero experience.</p>
        <div className="authors-grid">
            {authors.map((author) => (
                <AuthorCard key={author.id} {...author} />
            ))}
        </div>
    </div>
    
);


export default Authors;