import React from 'react';
import Images from '../../../constant';

// import { Container } from './styles';

function Login() {
  return(
    <>
   <div className='login' 
   style={{backgroundImage: `url(${Images.Bg})`}} >
    <img src={Images.logo}/>

   </div>
    </>
  )
}

export default Login;