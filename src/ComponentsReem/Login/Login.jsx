import React from 'react'
import style from './Login.module.css'
import topPatern from '../../Assets/Paterns/Patern1.svg'
import bottomPatern from '../../Assets/Paterns/Patern2.svg'
import ed from '../../Assets/Paterns/Ed.svg'
import { Link } from 'react-router-dom'
export default function Login() {
  return (
    <>
    <div className="row container-fluid">
    <div className={`col-md-6 bg-main overflow-hidden text-white ${style.container}`}>
      
      <div className={`${style.patern} w-100`}>
       <img src={topPatern} alt="" className={`text-light ${style.patern} ${style.topPatern}`} />
       </div>
       <div className={style.text}>
       <h2 className='text-white'><img src={ed} alt="" className='' />EdTech</h2>
       <p>Over 100+ Professionals <br />Trust Us<span className={`secondary-color ${style.span}`}>’’</span></p>
       <p className={style.bottomText}>EdTech is a global online learning platform that offers anyone,<br /> anywhere access to online courses</p>
       </div>
      <div className={`${style.patern} w-100`}>
       <img src={bottomPatern} alt="" className={`text-light ${style.patern} ${style.bottomPatern}`} />
       </div>
     
      </div>
      <div className="col-md-6 bg-light">
        <div className={`row container-fluid ${style.content}`}>
     <div className='col-md-10'>
        <div className={`${style.loginTops}`}>
        <div className={`${style.top1}`}><span>1</span> </div>
        <div className={`${style.top2}`}><span>2</span></div>
        <div className={`${style.top3}`}><span>3</span></div>
        </div>
        <div className={`my-4 ${style.loginUps}`}>
        <div className={`${style.top1}`}><span>Basic info</span> </div>
        <div className={`${style.top2}`}><span>Contact info</span></div>
        <div className={`${style.top3}`}><span className='loginInfo'>Login info</span></div>
        </div>
        <label className={`${style.label} mt-2`} >Email address</label>
        <input className='w-100 form-control my-1' type="email" ></input>
        <label className={`${style.label} mt-3`}>Password</label>
        <input className='w-100 form-control my-1'type='password'></input>
        <label className={`${style.label} mt-3`}> Rewrite Password</label>
        <input className='w-100 form-control my-1'type='password'></input>
        <div className={style.uls}> 
           <ul >
        <li className={`${style.label} ${style.lis} mt-1`}>Use 8 or more characters</li>
        <li className={`${style.label} ${style.lis} mt-1`}>Use a number (e.g. 1234)</li>
        
       </ul>
       <ul>
       <li className={`${style.label} ${style.lis} mt-1`}>Use upper and lower case letters (e.g. Aa)</li>
       <li className={`${style.label} ${style.lis} mt-1`}>Use a symbol (e.g. !@#$)</li>
       </ul></div>
        <div className="b d-flex justify-content-center">
        <Link to="/Submit"><button className={`text-white ${style.bgMain} ${style.buton}`}>Sign in</button></Link>
        </div>
        <p className={`mt-2 text-center ${style.terms}`}>By creating an account, you agree to the <span className={style.spans}>Terms of use</span> and  <span className={style.spans}> Privacy Policy. </span></p>
     </div>
        </div>
      </div>
    </div>
    </>
  )
}
