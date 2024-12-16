import React, { Component } from 'react'
import style from '../Footer/Footer.module.css'
import logo1 from '../../Assets/img/Logo1.svg'
import logo2 from '../../Assets/img/Logo2.svg'
import logo3 from '../../Assets/img/Logo3.svg'
import logo4 from '../../Assets/img/Logo4.svg'
import logo5 from '../../Assets/img/Logo5.svg'
import mainLogo from '../../Assets/img/Fictional company logo.svg'
export default class Footer extends Component {
  render() {
    return (
      <>
        <div className="footer bg  pt-5 text-white ">
            <div className="col-md-10 w-75  m-auto ">
           <div className="container text-center ">
           <p className={`${style.header}`}>Ready to Start Your Courses and Grow Your Career</p>
            <p className={style.disc}>
            Experts teach you everything from the comfort of your own home. Improve your career today by enrolling in excellent courses at affordable prices.
            </p>
           </div>
            </div>
            <div className="d-flex">
            <button className="btn text-dark  prop-main text-center py-3 px-5 my-3">Get Started</button>
            </div>
            <div className=" m-auto py-4 ">
                <ul className={style.list}>
                    <li><img src={logo1}></img></li>
                    <li><img src={logo2}></img></li>
                    <li><img src={logo3}></img></li>
                    <li><img src={logo4}></img></li>
                    <li><img src={logo5}></img></li>
                </ul>
            </div>


            <div className="row container m-auto">
                <div className="col-md-5">
                    <div className="col-content">
                        <h4 className='my-4'><img src={mainLogo} alt="" /></h4>
                        <p className={style.footLogo}>EdTech is a global online learning platform that offers anyone, anywhere access to online courses</p>
                    </div>
                </div>

                <div className="col-md-7">
                <div className="row container ">
                <div className="col-md-4">
                   <div className="ul-col-content ">
                       <ul >
                        <li className='active'>Pages</li>
                        <li >Home</li>
                        <li>Courses</li>
                        <li>Events</li>
                        <li>Authors</li>
                        <li>About Us</li>
                        <li>Teach on Edtech</li> 
                       </ul>
                    </div>
                   </div>
                   <div className="col-md-4">
                   <div className="ul-col-content ">
                       <ul >
                        <li className='active'>Company</li>
                        <li >Terms Conditions</li>
                        <li>Privacy Policy</li>
                        <li>Cookies</li> 
                       </ul>
                    </div>
                   </div>
                   <div className="col-md-4">
                   <div className="ul-col-content ">
                       <ul >
                        <li className='active'>Community</li>
                        <li>Help Center</li>
                        <li>FAQ</li>
                       </ul>
                    </div>
                   </div>
                </div>
                </div>
                
            </div>

            <div className= {`mt-4 ${style.foot}`}>
                <div className={`container ${style.footContent}`}>
                <p className='foot-p'>©2022 EdTech. All rights reserved</p>
                <ul className='icons d-flex'>
                    <li ><i class="fa-brands fa-facebook fa-lg"></i></li>
                    <li><i class="fa-brands fa-instagram fa-lg"></i></li>
                    <li><i class="fa-brands fa-twitter fa-lg"></i></li>
                    <li><i class="fa-brands fa-linkedin fa-lg"></i></li>
                </ul>
                </div>
            </div>
        </div>
      </>
    )
  }
}
