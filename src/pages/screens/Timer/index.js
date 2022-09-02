import React, { usestaete } from "react";
import Header from "../../../components/header";
import Countdown from "react-countdown";

// import { Container } from './styles';

function Timer() {
 const data= {
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00',
  }



  return (
    <div className="container-fluid  ">
      <Header headertext={"Dashboard"} />
      <div className="row col-12 text-center">
        <div className="col-md-4  col-sm-6 mt-5 ">
          <div
            className=" dashborad_card py-4"
            style={{ backgroundColor: "#E4201E", borderRadius: 20, height: 88 }}
          >
            <div className="card-body dashboard_card_body d-flex py-1 px-4 ">
           
           <div className="count  my-2 col-12">
            <h1 style={{color:'#fff'}}>
           <Countdown 
           style={{marginLeft:300}}
        
             date={Date.now()+107.452e+8}></Countdown>
             </h1>
            </div>   
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Timer;
