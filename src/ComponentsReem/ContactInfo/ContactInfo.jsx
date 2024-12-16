import React from 'react'
import style from './ContactInfo.module.css'
import topPatern from '../../Assets/Paterns/Patern1.svg'
import bottomPatern from '../../Assets/Paterns/Patern2.svg'
import ed from '../../Assets/Paterns/Ed.svg'
import { Link } from 'react-router-dom'
export default function ContactInfo() {
  return (
    <>
    <div className="row container-fluid">
    <div className={`col-md-6 bg-main overflow-hidden text-white ${style.container}`}>
      
      <div className={`${style.patern} w-100`}>
       <img src={topPatern} alt="" className={`text-light ${style.patern} ${style.topPatern}`} />
       </div>
       <div className={style.text}>
       <h2 className='text-white'><img src={ed} alt="" className='' />EdTech</h2>
       <p>Ready to Earn Money  <br />  as an Author Today<span className={`secondary-color ${style.span}`}>’’</span></p>
       <p className={style.bottomText}>EdTech is a global online learning platform that offers anyone, <br /> anywhere access to online courses</p>

       </div>
      <div className={`${style.patern} w-100`}>
       <img src={bottomPatern} alt="" className={`text-light ${style.patern} ${style.bottomPatern}`} />
       </div>
     
      </div>
      
      <div className="col-md-6 bg-light">
        <div className={`row container-fluid ${style.content}`}>
     <div className="col-md-10 ">
        <div className={` ${style.contactTops}`}>
        <div className={style.top1}><span>1</span> </div>
        <div className={style.top2}><span>2</span></div>
        <div className={style.top3}><span>3</span></div>
        </div>
        <div  className={`${style.contactUps} my-4`}>
        <div className={style.top1}><span>Basic info</span> </div>
        <div className={style.top2}><span className={style.contactInfo}>Contact info</span></div>
        <div className={style.top3}><span >Login info</span></div>
        </div>
        <label className={`${style.label} mt-2`} >country of residence ?</label>
        <input className='w-100 form-control my-1' type="text" placeholder='Egypt' ></input>
        <label className={`${style.label} mt-3`}>How would you best describe your role?        </label>
        <input className='w-100 form-control my-1'type='text' placeholder='Designer ...'></input>
        <label className={`${style.label} mt-3`}>What is your job title?</label>
        <input className='w-100 form-control my-1'type='text' placeholder='Product Designer'></input>
        <label className={`${style.label} mt-3`}>What is your primary goal on EdTech?</label>
        <input className='w-100 form-control my-1'type='text'></input>
        
        <div className=" d-flex justify-content-center">
        <button className={`text-white  mt-3 ${style.buton}`}><Link to="/Login">Next</Link></button>
        </div>     </div>
        </div>
      </div>
    </div>
    </>
  )
}
