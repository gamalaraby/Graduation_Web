import React from "react";
import Header from "./Components/Header";
import HeroSection from "./Components/HeroSection";
import Course from "./Components/Course";
import Authors from "./Components/Authors";
import AboutUs from "./Components/AboutUs";
import SpecialFeatures from "./Components/SpecialFeatures";
import StartCourses from "./Components/StartCourses";
import Browse from "./Components/Browse";
import BasicInfo from "./ComponentsReem/BasicInfo/BasicInfo";
import SignIn from "./ComponentsReem/SignIn/SignIn";
import Login from "./ComponentsReem/Login/Login"
import Footer from "./ComponentsReem/Footer/Footer"
import ContactInfo from "./ComponentsReem/ContactInfo/ContactInfo";
import { BrowserRouter as Router, Routes, Route, createBrowserRouter, Navigate } from "react-router-dom";
import "./App.css";
import Layout from "./Components/Layout/Layout";

function App() {
  const route = createBrowserRouter([
    {path: '',element: <Layout/>, children:[
      {path: '',element :<Navigate to={'herosection'}/>}
    ]}
  ])
  return (
    <div>
    {/* <Router>
      <div className="App">
      <Header/>
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/browse" element={<Browse />} />
          <Route path="/SignIn" element={<SignIn/>} />
          <Route path="/SignUp" element={<BasicInfo />} />
          <Route path="/ContactInfo" element={<ContactInfo/>}/>
          <Route path="/Login" element={<Login/>}/>
          <Route path="/Submit" element={<HeroSection/>} />

        </Routes>
      </div>
    </Router> */}
    <HeroSection/>
    {/* <AboutUs /> */}
   
   
    
    {/* <StartCourses/> */}
    {/* <Footer/> */}
    </div>
  );
}

export default App