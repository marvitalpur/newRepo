import React from "react";
import { FaBars, FaSearch } from "react-icons/fa";
import Header from "../../../components/header";
import Tables from "../../../components/Tables";
import { Button } from "react-bootstrap";

import Images from "../../../constant";

// import { Container } from './styles';

const FeatureDeals = () => {
  const data = [
    {
      text: "All",
      img2: Images.all,
    },
    {
      text: "Shoes",
      img2: Images.shoe,
    },
    {
      text: "clothing",
      img2: Images.shirt,
    },
    {
      text: "Accessories",
      img2: Images.accessories,
    },
  ];
  return (
    <div className="container-fluid  ">
      <Header headertext={"Steal Friday Featured Deals"} />

      <div className="row col-8 text-center px-5">
        {data.map((data, index) => {
          return (
            <div className="col-md-3  col-sm-6 mt-5 " key={index}>
              <div
                className="card dashborad_card py-4"
                style={{
                  backgroundColor: "#E4201E",
                  borderRadius: 20,
                  height: 70,
                }}
              >
                <div className="card-body dashboard_card_body d-flex py-1 px-4 ">
                  <img src={data.img2} />
                  <h5
                    style={{ color: "#fff", paddingLeft: 10, paddingTop: 10 }}
                  >
                    {data.text}
                  </h5>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="container-fluid  px-5 mt-5 ">
        <div className=" col-12 setting_Box mt-5 ">
          <div className="main_whitebox " style={{}}>
            <div className="container-fluid mt-5 ">
              <div className="d-flex bd-highlight mt-5">
                <div className="flex-grow-1 bd-highlifgt">
                  <div className="search_bar_wrapper d-none d-sm-flex px-5  mt-5">
                    <div
                      className="d-flex col d-flex justify-content-start "
                      style={{}}
                    >
                      <img
                        src={Images.redAll}
                        style={{ width: 30, height: 30 }}
                      />
                      <h3 style={{ paddingLeft: 8, paddingTop: 6 }}>All</h3>
                    </div>

                    <div
                      className="input-group flex-nowrap d-flex justify-content-end "
                      style={{ width: "55%" }}
                    >
                      <input
                        color="#000"
                        type="text"
                        className="form-control"
                        placeholder="Search by Product Name or Product Code"
                        aria-label="search"
                        // aria-describedby="addon-wrapping"
                        style={{
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
                </div>
              </div>
            </div>

            <div className="  d-flex py-1  px-5 ">
              <Tables
                table1={true}
            redButton={true}
          redButton1="Un-Feature"
                heading1="fetured Date"
                heading3="Product Code"
                heading4="Product Name"
                heading5="Category"
                heading6="Actions"
                OrderNo="fed 17, 2022"
                td4="Black Cotton Prem..."
                td8="Black Nike Prem......"
                td12="Smart Watch ban..."
                td16="Black Cotton Prem..."
                td20="Black Nike Shoe..."
                td24="Smart Watch ban..."
                date="86453"
              
               tda="Clothing"
               tdb="Shoes"
               tdc="Accessories"
             
              
              />
            </div>
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureDeals;
