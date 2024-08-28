
import React from 'react'
import { useState } from 'react'
import './User.css'
import {AiFillTwitterCircle,AiFillFacebook,AiFillGoogleCircle} from 'react-icons/ai'
import logo from '../Common/Images/travelmania-logo-01.jpg'
import{BsFillBagCheckFill} from 'react-icons/bs'
import {FaRupeeSign,FaUserAlt} from 'react-icons/fa'
import {AiFillMail,AiFillLock} from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Userr = () => {
  const[first,setfirst]=useState(1);
  return (
    <>
<div className='bdy'>
 <div className='content'>
  <img src={logo} alt=''></img> 
  <div className='text'>
    <h1>WELCOME!<br/>To <span>Travelmania</span></h1>
     <p>Jobs fill your pockets, adventures fill your soul.</p>
    <p>The journey of a thousand miles begins with a single step.</p>
    <div className='social'>
     <ul> <li><AiFillTwitterCircle/></li>
     <li> <AiFillFacebook/></li>
      <li><AiFillGoogleCircle/></li></ul>
    </div>
  </div>
 </div>
  <div className='logreg-box'>
 
 <div className='form-box register'>
    <form>
      <h2>Sign Up</h2>
      <div className='input-box'>
        <span className='icon'>
        <FaUserAlt/>
        </span>
        <input type='text' required></input>
        <label>Name</label>
      </div>
      <div className='input-box'>
        <span className='icon'>
        <AiFillMail/>
        </span>
        <input type='email' required onChange={((e)=>{
          setfirst({
            ...first,
            email:e.target.value
          })
        })}></input>
        <label>E-mail</label>
      </div>
      <div className='input-box'>
        <span className='icon'>
          <AiFillLock/>
        </span>
        <input type='password' required onChange={((e)=>{
          setfirst({
            ...first,
            passid:e.target.value
          })
        })}></input>
        <label>Password</label>
      </div>
      <div className='remember-forget'>
       <label><input type='checkbox'/>I Agree To The Terms & Conditions</label>
      
      </div> 
      <Link to='/login'>
      <button type='submit' className='btn' onClick={(()=>{
        alert('Thanks for signup');
        localStorage.setItem(first['email'],first['passid'])
      })}>Sign Up</button>
      </Link>
      <div className='login-register'>
        <p>Already Have An Account? <Link to='/login'>Sign In</Link></p>
      </div>
    </form>
  </div>  
  </div>
 </div>

 </>
  )
}

export default Userr