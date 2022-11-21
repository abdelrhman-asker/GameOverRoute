import React from 'react'
import { Link } from 'react-router-dom';
import MainNav from '../NavFooter/MainNav'
import signinimage from "./images/gaming.ebaf2ffc84f4451d.jpg";
import Logo from "../NavFooter/images/logo.png"

const SignIn = () => {
  return (
    <div className='SignUpMainDivEver'>
      <MainNav />
      <div className='  SignINMainDataDiv '>
      <div className='col-lg-7 mainIMageDivSign '>
        <img width="600px" height="450px"  className='col-lg-12'  src={signinimage} />
        </div>  

      
      <div className='col-12 col-lg-5'>
<form className='FormManDiv FormManDivSignIn'>
    <div>
        <img src={Logo} width="100px"/>
    </div>
    <div className='col-md-12'>
      <h3>
        Login to GameOver
      </h3>
    </div>

<input type="email"  name='email' placeholder='Email Address'  />
<input type="password"  name='password' placeholder='Password'  />

<button type='submit' >Login</button>

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