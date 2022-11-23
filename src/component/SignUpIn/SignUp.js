import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import MainNav from '../NavFooter/MainNav'
import signinimage from "./images/gaming.ebaf2ffc84f4451d.jpg";
import axios from "axios"
import BeatLoader from "react-spinners/BeatLoader";
import Joi from 'joi';

const SignUp = () => {
  const [error, setError] = useState("")
  const [errorList, setErrorList] = useState([])
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
  console.log(data)
   if(data.message == "success"){
    setLoading(true)
    navigate("./SignIn")

   } else {
    setError(data.message)
    setLoading(false)

   }

}
const submitregisterform = async (e) => {
  e.preventDefault();
  const validate = validateRegister()
  console.log(validate)
  
  
    if (await validate.error)  {
        setErrorList(validate.error.details)
      setLoading(false)
      // console.log("firstnameerr",errs.message)
    } else {
      setLoading(true)
      SendRegisteredDataApi()

  }
}

const validateRegister = () => {
  const scheme = Joi.object({
  first_name:Joi.string().pattern(new RegExp(/^[A-Z]/)).min(4).max(15).required(),
  last_name:Joi.string().pattern(new RegExp(/^[A-Z]/)).min(4).max(15).required(),
  email:Joi.string().email({tlds:["com", "net"]}).required(),
  password:Joi.string().pattern(new RegExp(/^[A-Z]{0,9}/)).min(8).max(155).required(),
  age:Joi.number().min(18).required(),
})
return scheme.validate(user, {abortEarly:false})
}
  return (
    <div className='SignUpMainDivEver'>
      <MainNav />
      <div className='SignUpMainDataDiv container'>
      <div className='col-lg-6 mainIMageDivSign '>
        <img height="500px"  className='col-lg-12'  src={signinimage} />
        </div>  
      
        
      <div className='col-11 col-lg-6'>
        {/* {
          error.length > 0 
          ?
            <h3 className='alert alert-danger alertMainH'>
              {error}
            </h3> 
          :
          ""
        } */}
         
<form onSubmit={submitregisterform} className='FormManDiv'>
    <div className='col-md-12 'style={{paddingTop:'20px'}}>
      <h3>
        Create My Account!
      </h3>
       
    </div>
<div className='d-flex gap-3 col-12 '>
{errorList.length > 0 ?
<div className='col-12'>
{
          error.length > 0 
          ?
            <h4 className='alert alert-danger text-center '>
              {error}
            </h4> 
          :

          ""
        }


  
<h4 className='alert col-12 text-center alert-danger'>Please Check Your  {errorList[0] && errorList[0].context.key &&<span> " {errorList[0].context.key} " , </span> }  {errorList[1] && errorList[1].context.key &&<span>" {errorList[1].context.key} " ,  </span> }  {errorList[2] && errorList[2].context.key && <span>" {errorList[2].context.key} " , </span> } {errorList[3] && errorList[3].context.key && <span>" {errorList[3].context.key} " ,  </span> }  {errorList[4] && errorList[4].context.key &&  <span>" {errorList[4].context.key} "  </span> }  </h4> 

</div>
 : ""}

    {/* {errorList.map((errorList, index) => {
      return <div key={index} className="alert alert-danger my-2 alertMainH ">{errorList.message}</div>
      
      })}   */}
 </div>
<div className='col-12 FirstTwoInputs'>
  
<div className='d-flex gap-1  inputanderror'>
  <input value={user.first_name} onChange={getUserData} type="text" name='first_name' placeholder='First Name'  />
  {errorList[0] &&  errorList[0].context.key == "first_name" ? <h4 className='alert alert-danger'>{errorList[0].message} </h4> : ""
}
</div>

<div className='d-flex gap-1  inputanderror '>
  <input value={user.last_name} onChange={getUserData} type="text" name='last_name' placeholder='Last Name'  />
  {errorList[0] &&  errorList[0].context.key == "last_name" ? <h4 className='alert alert-danger'>{errorList[0].message} </h4> : ""
}
  </div>
</div>
<div className='gap-1 col-12  inputanderror '>
  <div>
<input onChange={getUserData} type="email" name='email' placeholder='Email Address'  />
</div>
<div>
{errorList[0] &&  errorList[0].context.key == "email" ? <h4 className='alert alert-danger'>{errorList[0].message} </h4> : ""
}
</div>
</div>
<div className='d-flex gap-1 col-12  inputanderror '>
<input onChange={getUserData} type="number" name='age' placeholder='Age'  />
<div>
{errorList[0] &&  errorList[0].context.key == "age" ? <h4 className='alert alert-danger'>{errorList[0].message} </h4> : ""
}
</div>
</div>
<div className='d-flex gap-1 col-12  inputanderror '>
<input onChange={getUserData} type="password" name='password' placeholder='Password'  />
<div>
{errorList[0] &&  errorList[0].context.key == "password" ? <h4 className='alert alert-danger'>{errorList[0].message} </h4> : ""
}
</div>
</div>
{
  loading === true 
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