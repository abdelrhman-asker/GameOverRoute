import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import MainNav from '../NavFooter/MainNav'
import signinimage from "./images/gaming.ebaf2ffc84f4451d.jpg";
import axios from "axios"
import BeatLoader from "react-spinners/BeatLoader";

const SignUp = () => {
  const [error, setError] = useState('')
  const [loading , setLoading] = useState(false)
  const navigate = useNavigate()
  const [user , setUser] = useState({
    first_name:"",
    last_name:"",
    email:"",
    password:"",
    age:""
  })

const getUserData = (e) =>{
  const myUser = {...user}
  myUser[e.target.name] = e.target.value;
  setUser(myUser)
  console.log(myUser)
  // console.log(e.target.value)
}
const url= "https://route-egypt-api.herokuapp.com/signup"

const SendRegisteredDataApi = async () => {
  let {data} =await axios.post(url,user)
  // console.log(data)
   if(data.message == "success"){
    setLoading(true)
    navigate("./SignIn")

   } else {
    setError(data.message)
    setLoading(false)

   }

}
const submitregisterform = (e) => {
  e.preventDefault();
  SendRegisteredDataApi()
  setLoading(true)

}
  return (
    <div className='SignUpMainDivEver'>
      <MainNav />
      <div className='SignUpMainDataDiv container'>
      <div className='col-lg-6 mainIMageDivSign '>
        <img height="500px"  className='col-lg-12'  src={signinimage} />
        </div>  
      
      
      <div className='col-11 col-lg-6'>
        {
          error.length > 0 
          ?
            <h3 className='alert alert-danger alertMainH'>
              {error}
            </h3> 
          :
          ""
        }
          
<form onSubmit={submitregisterform} className='FormManDiv'>
    <div className='col-md-12'>
      <h3>
        Create My Account!
      </h3>
    </div>
    
 
<div className='FirstTwoInputs'>
  


  <input value={user.first_name} onChange={getUserData} type="text" name='first_name' placeholder='First Name'  />
  <input value={user.last_name} onChange={getUserData} type="text" name='last_name' placeholder='Last Name'  />
  
  
</div>
<input onChange={getUserData} type="email" name='email' placeholder='Email Address'  />
<input onChange={getUserData} type="number" name='age' placeholder='Age'  />
<input onChange={getUserData} type="password" name='password' placeholder='Password'  />
{
  loading == true 
  ?
  <BeatLoader color="hsla(168, 100%, 87%, 1)" />
  :
<button type='submit' >Create Account</button>

}
<h4>
This site is protected by reCAPTCHA and the Google <a target="_blank" href='https://policies.google.com/privacy'> Privacy Policy </a > and <a target="_blank" href="https://policies.google.com/terms"> Terms of Service </a> apply.

</h4>
<hr className='HrClass' />
<div>
  <h4>
    Already a member? <Link to="/SignIn">Log in &#62; </Link>
  </h4>
</div>
</form>
</div>

</div>
    </div>
  )
}

export default SignUp