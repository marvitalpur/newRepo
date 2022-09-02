import React from 'react';
import Header from '../../../components/header';

export default function AppUpdate() {
  return (
    <>
    <div className="container-fluid">
        <div className="row col-12">     
        <Header headertext={"App Update"}/>                                                                                                                          
        <div className="col-12 setting_Box  ">
          <div
            className="borderbox col-5 py-5 "
            style={{
              marginTop: 30,
              width: "100%",
              // height: "80%",
              backgroundColor: "#fff",
              borderRadius: 20,
              borderWidth: 5,
              borderColor: "#000",
            }}
          >
            <div className="search_bar_wrapper  justify-content-end   px-5 ">
              <div
                className=" col "
                style={{}}
              >
            <div className="my-4 border square border square border border-end-0 square border border-start-0 square border border-top-0 ">
            <h2 style={{}} >Monthly Subscription Charges:</h2>
           <h4 style={{ marginTop:20}}></h4>
           <h4 style={{color:'#1492E6', marginTop:10,fontSize:14}}>Edit</h4>
           </div>
           <div className="my-4 border square border square border border-end-0 square border border-start-0 square border border-top-0 ">
            <h2 style={{}}>Change Catagory:</h2>
          
            <div className='row col-3  mt-3'>
            <h4 className='col' style={{}}>Shoes</h4>
           <h4 className='col' style={{color:'#1492E6',fontSize:14}}>Edit</h4>
           </div>
           <div className='row col-3  mt-3'>
            <h4 className='col' style={{}}>Clothing</h4>
           <h4 className='col' style={{color:'#1492E6',fontSize:14}}>Edit</h4>
           </div>
            <div className='row col-3  mt-3'>
            <h4 className='col' style={{}}>Accessories</h4>
           <h4 className='col' style={{color:'#1492E6',fontSize:14}}>Edit</h4>
           </div>
           </div>
           <div className="my-4 border square border square border border-end-0 square border border-start-0 square border border-top-0 ">
            <h2 style={{}}>Shipping Charges:</h2>
            <h4 style={{ marginTop:20}}>Standard Delivery:</h4>
            <div className='row col-3  mt-3'>
            <h4 className='col' style={{}}>$19.99</h4>
           <h4 className='col' style={{color:'#1492E6',fontSize:14}}>Edit</h4>
           </div>
        
            <h4 style={{ marginTop:20}}>Express Delivery:</h4>
            <div className='row col-3  mt-3'>
            <h4 className='col' style={{}}>$19.99</h4>
           <h4 className='col' style={{color:'#1492E6',fontSize:14}}>Edit</h4>
           </div>
           </div>
           <div className="my-4 border square border square border border-end-0 square border border-start-0 square border border-top-0 ">
            <h2 style={{}} >Updated Policies:</h2>
           <h4 style={{ marginTop:20}}>Terms & Conditions</h4>
           <h4 style={{color:'#1492E6', marginTop:10,fontSize:14}}>Edit</h4>
           <h4 style={{ marginTop:20}}>Privacy Policy</h4>
           <h4 style={{color:'#1492E6', marginTop:10,fontSize:14}}>Edit</h4>
           </div>
           <div className="my-4 border square border square border border-end-0 square border border-start-0 square border border-top-0 ">
            <h2 style={{}} >Application Contact Us Section</h2>
           <h4 style={{ marginTop:20}}>Mentioned Email:</h4>
           <h5 style={{ marginTop:20}}>Info@stealfridat.com:</h5>
           <h4 style={{color:'#1492E6', marginTop:10,fontSize:14}}>Edit</h4>
           <h4 style={{ marginTop:20}}>Contact Us Form Email:</h4>
           <h4 style={{color:'#1492E6', marginTop:10,fontSize:14}}>Edit</h4>
           </div>
           
            </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    
    </>
  );
}
