import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import MainNav from '../NavFooter/MainNav'
import signinimage from "./images/gaming.ebaf2ffc84f4451d.jpg";
import Logo from "../NavFooter/images/logo.png"
import Joi from 'joi';
import axios from "axios"
import BeatLoader from "react-spinners/BeatLoader";

const SignIn = () => {
  const [errorList, setErrorList] = useState([])
  const [loading , setLoading] = useState(false)
  const navigate = useNavigate()
  const [user , setUser] = useState({
    email:"",
    password:"",
  })

const getUserData = (e) =>{
  const myUser = {...user}
  myUser[e.target.name] = e.target.value;
  setUser(myUser)
  console.log(myUser)
  // console.log(e.target.value)
}
const url= "https://route-egypt-api.herokuapp.com/signin"

const SendLoginedDataApi = async () => {
  let {data} =await axios.post(url,user)
  console.log(data)
   if(data.message === "success"){
    setLoading(true)
    navigate("/Home")

   } else {
    
    setLoading(false)

   }

}
const submitLoginform = (e) => {
  e.preventDefault();
  const validate = validateLogin()
  console.log(validate)
  
    if(validate.error) {
      setLoading(false)
      setErrorList(validate.error.details)
    } else {
      setLoading(true)
      SendLoginedDataApi()

  }
}

const validateLogin = () => {
  const scheme = Joi.object({
  email:Joi.string().email({tlds:["com", "net"]}).required(),
  password:Joi.string().pattern(new RegExp(/^[A-Z]{0,9}/)).min(8).required(),
})
return scheme.validate(user, {abortEarly:false})
}
  return (
    <div className='SignUpMainDivEver'>
      <MainNav />
      <div className='  SignINMainDataDiv '>
      <div className='col-lg-7 mainIMageDivSign '>
        <img alt='PsLogo' width="600px" height="450px"  className='col-lg-12'  src={signinimage} />
        </div>  

      
      <div className='col-12 col-lg-5'>
<form onSubmit={submitLoginform} className='FormManDiv FormManDivSignIn'>
    <div>
        <img alt='MLogo' src={Logo} width="100px"/>
    </div>
    <div className='col-md-12'>
      <h3>
        Login to GameOver
      </h3>
    </div>
   {errorList.length > 0 ? <h4 className='alert alert-danger'>"Please Check Your Data" </h4> : ""}
    {/* {errorList.map((err, index) => {
      return <div key={index} className="alert alert-danger my-2 alertMainH ">{err.message}</div>
      })}   */}
      <div className='col-12 inputanderror' >
        <div>
<input onChange={getUserData} type="email"  name='email' placeholder='Email Address'  />
</div>
<div>
{errorList[0] && errorList[0].context.key === "email" ? <h4 className='alert alert-danger '>{errorList[0].message} </h4> :""}
</div>
</div>

<div className='col-12 inputanderror'>
  <div>
<input onChange={getUserData} type="password"  name='password' placeholder='Password'  />
</div>
<div>
{errorList[0] &&  errorList[0].context.key === "password" ? <h4 className='alert alert-danger'>{errorList[0].message} </h4> : ""
}
</div>
</div>
{
  loading === true 
  ?
  <BeatLoader color="hsla(168, 100%, 87%, 1)" />
  :
<button type='submit' >Login</button>
}

<hr className='HrClass' />
<div className='LinksInSignIn '>
  <h4 >
    <Link onClick={() => alert("اعمل اكونت جديد ههه")} to="">Forget Password? </Link>
  </h4>
  <h4 className='d-flex gap-2'>
  Not a member yet? <Link  to="/"> Create Account &#62; </Link>
  </h4>
</div>
</form>
</div>

</div>
    </div>
  )
}

export default SignIn