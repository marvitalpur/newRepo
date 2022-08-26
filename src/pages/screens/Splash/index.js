import React from 'react';
import Images from '../../../constant';

// import { Container } from './styles';

function Splash() {
  return(
    <>
    <h1>Splsah Screen..</h1>
   <div
        className="splash"
        style={{ backgroundImage: `url(${Images.Bg})`}}
      >
        <img src={Images.logo} alt="logo" className="logo"/>

   </div>
    
    </>
  );
}

export default Splash;