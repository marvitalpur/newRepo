import React from "react";
import Header from "../../../components/header";
import Tables from "../../../components/Tables";
import * as Icon from 'react-bootstrap-icons';
import { NavLink } from "react-bootstrap";

export default function Profile() {
  return (
    <>
      <div className="container-fluid">
        <div className="row col-12">
          <div className="col">
            <Header headertext={"User Details"} />
          </div>
          <div className=" ">
            <div
              className=" px-5 py-5 "
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
              <div className="d-flex  d-none d-sm-flex 
              my-4 py-3  border square border square border border-end-0 square border border-start-0 square border border-top-0 
               ">
                <div className=" col-10                                                                                                                                      ">
                  <div className=" row col-4 ">
                  <div className="col mt-3">
                  <Icon.ArrowLeftCircle color="blue" style={{fontSize:26, }}/>
                  </div>
                  <div className="col">
                  <h2>Sara Miler</h2>
                  <h4>USer Id, 2326</h4>
              <a  className="text-info  text-sm-start" href="/" >Send Email</a>
                  </div>
                  </div>
                </div>
                <div className=" col justify-content-end px-5 ">
                  <h1>jkusyutu</h1>
                </div>
              </div>
              <div className=" py-4 ">
                <div className="col-12  " style={{}}>
                  <div className="my-4 py-3  border square border square border border-end-0 square border border-start-0 square border border-top-0 ">
                    <h2 style={{ color: "red" }}>Personal Information</h2>
                    <div className="container-fluid  col-12">
                      <div className="row">
                        <h4 className="col" style={{}}>
                          First Name
                        </h4>
                        <h4
                          className="col"
                          style={{ color: "#1492E6", fontSize: 14 }}
                        >
                          Edit
                        </h4>
                      </div>
                      <div className="row col-12  mt-3">
                        <h4 className="col" style={{}}>
                          Last NAme
                        </h4>
                        <h4
                          className="col"
                          style={{ color: "#1492E6", fontSize: 14 }}
                        >
                          Edit
                        </h4>
                      </div>
                      <div className="row col-12  mt-3">
                        <h4 className="col" style={{}}>
                          Email Address
                        </h4>
                        <h4
                          className="col"
                          style={{ color: "#1492E6", fontSize: 14 }}
                        >
                          Edit
                        </h4>
                      </div>
                      <div className="row col-12  mt-3">
                        <h4 className="col" style={{}}>
                          Phone Number
                        </h4>
                        <h4
                          className="col"
                          style={{ color: "#1492E6", fontSize: 14 }}
                        >
                          Edit
                        </h4>
                      </div>
                      <div className="row col-12  mt-3">
                        <h4 className="col" style={{}}>
                          Password
                        </h4>
                        <h4
                          className="col"
                          style={{ color: "#1492E6", fontSize: 14 }}
                        >
                          Edit
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div className="my-4 border square border square border border-end-0 square border border-start-0 square border border-top-0 ">
                    <h2 style={{ color: "red" }}>Subscription Details</h2>
                    <div className="container-fluid  col-12">
                      <div className="row">
                        <h4 className="col" style={{}}>
                          Last Subscription Date
                        </h4>
                        <h4
                          className="col"
                          style={{ color: "#1492E6", fontSize: 14 }}
                        >
                          Edit
                        </h4>
                      </div>
                      <div className="row col-12  mt-3">
                        <h4 className="col" style={{}}>
                          Subscription Expiry
                        </h4>
                        <h4
                          className="col"
                          style={{ color: "#1492E6", fontSize: 14 }}
                        >
                          Edit
                        </h4>
                      </div>
                      <div className="row col-12  mt-3">
                        <h4 className="col" style={{}}>
                          Card Used
                        </h4>
                        <h4
                          className="col"
                          style={{ color: "#1492E6", fontSize: 14 }}
                        >
                          Edit
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div className="my-4 border square border square border border-end-0 square border border-start-0 square border border-top-0 ">
                    <h2 style={{ color: "red" }}>User Orders</h2>

                    <div className="  d-flex py-5  ">
                      <Tables
                        table1={true}
                        bluebutton={true}
                        bluebtn1="View"
                        heading1="Order No."
                        heading3="Product Name"
                        heading4="Status"
                        heading5="Amount Paid"
                        heading6="Actions"
                        OrderNo="3593"
                        date="fed 17, 2022"
                        status2="On the way"
                        status="Pending"
                        amount="$1248.9"
                        fontweight="Bold"
                        color="#E4201E"
                        color1="#40988A"
                      />
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
