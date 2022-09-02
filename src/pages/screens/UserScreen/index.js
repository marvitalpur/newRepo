import React from "react";
import Tables from "../../../components/Tables";
import { Button } from "react-bootstrap";
import { FaBars, FaSearch } from "react-icons/fa";
import Images from "../../../constant";
import Header from "../../../components/header";

export default function UserScreen() {
  return (
    <>
      <div className="container-fluid users_info">
        <div className="col-12 ">
      <Header headertext={"Users"}/>
        </div>
        <div className="col-12 setting_Box  ">
        <div className="container-fluid  px-5 mt-5 ">
        <div className=" col-12 setting_Box mt-5 ">
        <div className="main_whitebox " style={{}}>
        <div className="container-fluid mt-5 ">
        <div className=" py-5">
          <div>
            <div className="search_bar_wrapper d-flex justify-content-end  d-none d-sm-flex px-5 ">
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
           <div className="  d-flex py-5  mx-5 ">
              <Tables
                table1={true}
                bluebutton={true}
                bluebtn1="View Profile"
                heading1="Sign Up Date"
                heading2="user ID"
                heading3="User Name "
                heading4="Order Placed"
             
                heading6="Action"
                OrderNo="fed 17, 2022"
                ID="2343 "
               td3="Sara Miler"
               td7="Aaron Barrett"
               td11="Janice Fuller"
               td15="Beatrice Foster"
               td19="Adam Reynolds"
                status2="1"
                td23="Janice Fuller"
                status="0"
             
             
              
              />
            </div>
          </div>
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
