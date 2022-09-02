import React from "react";
import Tables from "../../../components/Tables";
import { Button } from "react-bootstrap";
import { FaBars, FaSearch } from "react-icons/fa";
import Images from "../../../constant";
import Header from "../../../components/header";


export default function Orders() {
  return (
    <>
     <div className="container-fluid  px-5 mt-5 ">
        <div className=" col-12 setting_Box mt-5 ">
        <div className="main_whitebox " style={{}}>
        <div className="container-fluid mt-5 ">
        <div className=" py-5">
        <div className="search_bar_wrapper d-flex justify-content-end  d-none d-sm-flex m-5 ">

       
                 
              <div
                className="d-flex col d-flex justify-content-start "
                style={{}}
              >
                <h2 style={{ paddingLeft: 8, paddingTop: 6 }}>
                  All Orders Information
                </h2>
              </div>
              <div
                className="input-group flex-nowrap "
                style={{ width: "50%" }}
              >
                <input
                  color="#000"
                  type="text"
                  className="form-control"
                  placeholder="Search by Product Name or Product Code"
                  aria-label="search"
                  // aria-describedby="addon-wrapping"
                  style={{
                    alignItems: "flex-end",
                    justifyContent: "flex-end",
                    width: "55%",
                    marginTop: 4,
                    height: 35,
                    backgroundColor: "#e0fbfc",
                    borderRadius: 12,
                  }}
                />

                <Button
                  className="btn btn-primary search_btn"
                  style={{ borderRadius: 12, height: 35, marginTop: 4 }}
                >
                  <FaSearch />
                </Button>
              </div>
              <div className="mt-2" style={{ marginLeft: 4 }}>
                <Button className=" btn-light search_btn">
                  <FaBars style={{ color: "blue" }} />
                </Button>
              </div>
          </div>
            <div className="  d-flex py-1  mx-5 ">
              <Tables
                table1={true}
                bluebutton={true}
                bluebtn1="View"
                heading1="Order No."
                heading2="user ID"
                heading3="Date "
                heading4="Status"
                heading5="Amount Paid"
                heading6="Action"
                OrderNo="3593"
                ID="2343 "
                date="fed 17, 2022"
                status2="on the way"
                status="pending"
                amount="$1248.9"
                fontweight='Bold'
                color="#E4201E"
                color1="#40988A"
              />
            </div>
            </div>
            </div>
          </div>
        
        </div>
        </div>
    
     

    </>
  );
}
