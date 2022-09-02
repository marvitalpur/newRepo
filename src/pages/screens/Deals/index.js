import React from "react";
import { FaBars, FaSearch } from "react-icons/fa";
import Header from "../../../components/header";
import Tables from "../../../components/Tables";
import { Button } from "react-bootstrap";

import Images from "../../../constant";

// import { Container } from './styles';

const Deals = () => {
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
    <div className="container-fluid ">
      <div className="mx-4">
      <Header headertext={"Steal Friday Featured Deals"} />
      </div>
    

      <div className="row col-12 text-center mx-4">
        <div
          className=" col-1 mt-5"
          style={{
            width:180,
            marginTop: 20,margin:8
          }}
        >
          <Button className="btn filter_button d-flex primary " style={{  width:180, height:66, borderRadius:12}}>
            <img src={Images.plus} style={{ width: 25, height: 25,borderRadius: 25,marginTop:16,marginRight:10 }} />
           <p style={{marginTop:20}}> Add New Deal
            </p>
          </Button>
        
        </div>
        {data.map((data, index) => {
          return (
            <div className="col-md-2  col-sm-6 mt-5 " key={index}>
              <div
                className="  py-4"
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

      <div className="col-12 setting_Box   ">
        <div className="container-fluid  px-5 mt-5 ">
        <div className=" col-12 setting_Box mt-5 ">
        <div className="main_whitebox " style={{}}>
        <div className="container-fluid mt-5 ">
        <div className=" py-5 ">
        
              <div className="flex-grow-1 bd-highlifgt">
                <div className="search_bar_wrapper d-none d-sm-flex px-5 ">
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

          <div className="  d-flex py-1 mx-5  ">
              <Tables
                table1={true}
             bluebutton={true}
             bluebtn1="View"
                heading1="Date"
                heading2="Product Code "
                heading3="Product Name"
                heading4="Category"
                heading5="Status"
                heading6="Actions"
                OrderNo="3593"
                ID="2343 "
                date="fed 17, 2022"
                status2="Inactive"
                status="Active"
                amount="$1248.9"
                color1="#E4201E"
                color="#40988A"
                fontweight="bold"
              
              />
            </div>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
};

export default Deals;
