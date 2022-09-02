import React from "react";
import Tables from "../../../components/Tables";
import { Button } from "react-bootstrap";
import { FaBars, FaSearch } from "react-icons/fa";
import Images from "../../../constant";
import Header from "../../../components/header";

export default function ViewOrders() {
  return (
    <>
      <div className="container-fluid users_info">
        <div className="col-12 ">
          <Header headertext={"Users"} />
        </div>
        <div className="col-12 setting_Box  ">
          <div
            className="borderbox col-5 py-5 "
            style={{
              marginTop: 30,
              width: "80%",
              // height: "80%",
              backgroundColor: "#fff",
              borderRadius: 20,
              borderWidth: 5,
              borderColor: "#000",
            }}
          >
            <div className="container-fluid">
              <div className="flex-grow-1 bd-highlifgt">
                <div className="search_bar_wrapper d-none d-sm-flex px-5 ">
                  <div
                    className="d-flex col d-flex justify-content-start "
                    style={{}}
                  >
                    <h2 style={{ paddingLeft: 8, paddingTop: 6 }}>
                      Order Details
                    </h2>
                  </div>
                  <div
                    className="input-group flex-nowrap d-flex justify-content-end "
                    style={{ width: "55%" }}
                  >
                    <Button
                      className="btn btn-danger mx-4"
                      style={{
                        width: 120,
                        height: 40,
                        marginTop: 4,
                        borderRadius: 12,
                      }}
                    >
                      Update Status
                    </Button>
                    <Button
                      className="btn btn-primary"
                      style={{
                        width: 120,
                        height: 40,
                        marginTop: 4,
                        borderRadius: 12,
                      }}
                    >
                      Back
                    </Button>
                  </div>
                </div>
              </div>
              <div  className="my-4 mx-5 table_class border  border-3 border-bottom">

                <Tables
                  table2={true}
                  heading1="Order No. 3953"
                  heading2="User Name"
                  heading3="User ID:"
                  heading4="dhgggsfkgg"
                  heading5="dhgggsfkgg"
                  heading6="dhgggsfkgg"
                  td1={"Order Date: Feb 17, 2022"}
                  td2={"Sara Miller"}
                  td3={"2326"}
                  td4={"2326"}
                  td5={"jkjkhkjhui"}
                  td6={"jkjkhkjhui"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
