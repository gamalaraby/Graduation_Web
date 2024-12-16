
import React from "react";
import PhoneInputComponent from "../PhoneInputComponent/PhoneInputComponent.jsx";
import style from './BasicInfo.module.css'
import topPatern from '../../Assets/Paterns/Patern1.svg'
import bottomPatern from '../../Assets/Paterns/Patern2.svg'
import ed from '../../Assets/Paterns/Ed.svg'
import 'react-phone-input-2/lib/style.css'
import { Link } from "react-router-dom";



export default function BasicInfo() {
  return (
    <div className="Basic">
      <div className="row container-fluid">
      <div className={`col-md-6 bg-main overflow-hidden text-white ${style.container}`}>
      
      <div className={`${style.patern} w-100`}>
       <img src={topPatern} alt="" className={`text-light ${style.patern} ${style.topPatern}`} />
       </div>
       <div className={style.text}>
       <h2 className='text-white'><img src={ed} alt="" className='' />EdTech</h2>
       <p>Create Your Online  <br />Course in 3 Easy Steps  <span className={`secondary-color ${style.span}`}>’’</span></p>
       </div>
      <div className={`${style.patern} w-100`}>
       <img src={bottomPatern} alt="" className={`text-light ${style.patern} ${style.bottomPatern}`} />
       </div>
     
      </div>
      <div className={`col-md-6 mt-3 bg-light ${style.content}`}>
      <div className={`row container-fluid ${style.content}`}>
     <div className="col-md-10 ">
        <div className={style.basicTops}>
        <div className={style.top1}><span>1</span> </div>
        <div className={style.top2}><span>2</span></div>
        <div className={style.top3}><span>3</span></div>
        </div>
        <div className={`${style.basicUps} my-4`}>
        <div className={style.top1}><span className={style.basicInfo}>Basic info</span> </div>
        <div className={style.top2}><span>Contact info</span></div>
        <div className={style.top3}><span className='loginInfo'>Login info</span></div>
        </div>

        <div className={`d-flex justify-content-center align-items-center ${style.autharButton}`}>
        <div className={`text-end ${style.choiceButton} `}>
          Auther
        </div>
        </div>

        <div className="userData d-flex justify-content-between align-items-center">
       <div className="firstName">
       <label className={`${style.label} mt-3 `} >First name</label>
       <input className='w-100 form-control my-1' type="text" ></input>
       </div>
       <div className="lastName">
       <label className={`${style.label} mt-3 mx-3`}>Last name</label>
       <input className='w-100 form-control mx-3 my-1'type='text'></input>
       </div>
        </div>
        
        <label className={`${style.label} mt-1`}>Phone number</label>
        <PhoneInputComponent />
        <label className={`mt-1 ${style.label}`} htmlFor="">What’s your date of birth?</label>
        <div className="dateLabels d-flex gap-4 justify-content-between align-items-center mt-1">
          <div className="month">
          <label className={style.label} htmlFor="">Month</label>
          <input className='w-100 form-control'  type="number" ></input>
          </div>
          <div className="date">
          <label className={style.label} htmlFor="">Date</label>
          <input  className='w-100  form-control'  type="number" ></input>
          </div>
         <div className="year">
         <label className={style.label} htmlFor="">Year</label>
         <input className='w-100  form-control' type="number"></input>
         </div>
        </div>

        <label className={ ` mt-2 ${style.label}`} htmlFor="">What’s your gender? (optional) </label>
        <div className="gender d-flex align-items-center text-start">
          <div className="male ">
        <input type="radio" id="male" name="gender" value="male"></input>
          <label className={ `${style.label2}`}  for="male">Male</label>
        </div>
        <div className="female mx-4">
          <input type="radio" id="female" name="gender" value="female"></input>
          <label className={ `${style.label2}`}  for="female">Female</label>
        </div>
        <div className="binary">
        <input type="radio" id="nonBinary" name="gender" value="nonBinary"></input>
          <label className={ `${style.label2}`} for="nonBinary">Non-binary</label>
        </div>
        </div>

        <div className=" d-flex justify-content-center">
        <button className={`text-white mt-1 ${style.buton}`}><Link to="/ContactInfo">Next</Link></button>
        </div>
     </div>
        </div>
      </div>
      </div>
    </div>
  )
}
