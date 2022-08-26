import React from "react";
import Images from "../../../constant";

// import { Container } from './styles';

const Home = () => {
  const data = [
    {
      icon1:'4fgffffff',
      icon1:'ggggth',
      img1:Images.checkCart,
      img2:Images.checkUser
    },
    {
      icon1:'4fgffffff',
      icon1:'ggggth',
      img1:Images.checkCart,
      img2:Images.checkUser
    },
    {
      icon1:'4fgffffff',
      icon1:'gggggth',
      img1:Images.checkCart,
      img2:Images.checkUser
    },
    {
      icon1:'4fgffffff',
      icon1:'gggth',
      img1:Images.checkCart,
      img2:Images.checkUser
    },
    {
      icon1:'4fgffffff',
      icon1:'ggggth',
      img1:Images.checkCart,
      img2:Images.checkUser
    },
    {
      icon1:'4fgffffff',
      icon1:'ggggth',
      img1:Images.checkCart,
      img2:Images.checkUser
    },
    {
      icon1:'4fgffffff',
      icon1:'gggth',
      img1:Images.checkCart,
      img2:Images.checkUser
    },
    {
      icon1:'4fgffffff',
      icon1:'ggggggth',
      img1:Images.checkCart,
      img2:Images.checkUser
    },
    {
      icon1:'4fgffffff',
      icon1:'gggth',
      img1:Images.checkCart,
      img2:Images.checkUser
    },
    
  ]
  return (
    <div className="container-fluid  ">
      <div className="row col-12 text-center">
        {data.map((data, index) => {
          return (
            <div className="col-md-4  col-sm-6 mt-5 " key={index}>
              <div className=" dashborad_card py-4" style={{backgroundColor:'#E4201E',borderRadius:20,height:88,}}>
                <div className="card-body dashboard_card_body d-flex py-1 px-4 " >
                  <img src={data.img1}/>
                  <h2 style={{color:'#fff'}}>{data.icon1}</h2>
                  <img src={data.img2}/>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
