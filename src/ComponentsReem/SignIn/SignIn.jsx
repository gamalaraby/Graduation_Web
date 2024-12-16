import React from 'react'
import style from './SignIn.module.css'
import topPatern from '../../Assets/Paterns/Patern1.svg'
import bottomPatern from '../../Assets/Paterns/Patern2.svg'
import ed from '../../Assets/Paterns/Ed.svg'
import { Link } from 'react-router-dom'
export default function SignIn() {
  return (
    <>
    <div className="row container-fluid">
    <div className={`col-md-6 bg-main overflow-hidden text-white ${style.container}`}>
      
      <div className={`${style.patern} w-100`}>
       <img src={topPatern} alt="" className={`text-light ${style.patern} ${style.topPatern}`} />
       </div>
       <div className={style.text}>
       <h2 className='text-white'><img src={ed} alt="" className='' />EdTech</h2>
       <p>Ready to Start Your Courses and Grow Your Career<span className={`secondary-color ${style.span}`}>’’</span></p>
       <p className={style.bottomText}>EdTech is a global online learning platform that offers anyone,<br /> anywhere access to online courses</p>
       </div>
      <div className={`${style.patern} w-100`}>
       <img src={bottomPatern} alt="" className={`text-light ${style.patern} ${style.bottomPatern}`} />
       </div>
     
      </div>
      <div className="col-md-6 bg-light">
        <div className={`row container-fluid ${style.content}`}>
     <div className="col-md-10  ">
     <h2 className='text-start my-4'>Sign in</h2>
        <label className={`${style.label} mt-2`} >User name or email address</label>
        <input className='w-100 form-control my-1' type="text" ></input>
        <label className={`${style.label} mt-2`}>Your password</label>
        <input className='w-100 form-control my-1' type="text" ></input>
        <p className={style.secondary}>Forget your password</p>
        <button className={`text-white ${style.secondaryColor} ${style.buton}`}>Sign in </button>
        <p className={`mt-2 ${style.label2}`}>Don’t have an acount? <span className={style.secondary}><Link to="/SignUp">Sign up</Link>  </span></p>
     </div>
        </div>
      </div>
    </div>
    </>
  )
}
