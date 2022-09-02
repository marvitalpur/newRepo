import React from "react";
import Header from "../../../components/header";
import Switch from "@mui/material/Switch";

import BootstrapSwitchButton from "bootstrap-switch-button-react";

export default function Notification() {
  const [checked, setChecked] = React.useState(true);
  const handleChange = () => {
    setChecked(!checked);
  };

  const Data = [
    {
      text1: "In App Notification",
    },
    {
      text1: "Push Notification",
    },
    {
      text1: "Email Notification",
    },
  ];
  return (
    <>
      <div className="container-fluid  ">
        <Header headertext={"Notifications"} />

        <div className="row col-8">
          <div className="col-12 setting_Box  ">
            <div
              className="borderbox col-5 py-5  px-5 "
              style={{
                marginTop: 30,
                width: "100%",
                // height: "80%",
                backgroundColor: "#fff",
                borderRadius: 30,
                borderWidth: 5,
                borderColor: "#000",
              }}
            >
              <h2>Notification Settings</h2>
              <div
                className="borderbox col-5 py-5 square border border-danger border-3 border-bottom"
                style={{
                  marginTop: 30,
                  width: 372,
                  height: 288,
                  backgroundColor: "#fff",
                  borderRadius: 20,
                  borderWidth: 5,
                  borderColor: "#000",
                }}
              >
               <div className=" notify_text   px-4">
                  <h4>New User sign Up</h4>
                </div>

                {Data.map((data, index) => {
                  return (
                    <div className=" d-flex  d-none d-sm-flex py-1 px-4 my-4 ">
                      <div className=" justify-content-start my-1 mx-2  d-none d-sm-flex py-1 px-4 ">
                        <h5>{data.text1}</h5>
                      </div>
                      <div className=" row-12 justify-content-end  d-none d-sm-flex  ">
                        <div className="d-flex justify-content-between">
                          <h4 className="my-2 mx-3">Off</h4>
                          <div className="form-check form-switch  mx-1  ">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="flexSwitchCheckDefault"
                            />
                          </div>
                          <h4 className="my-2 mx-2">On </h4>
                        </div>
                      </div>
                    </div>
                  );
                })}

<div className="col-12 text-center my-2 mt-3 mx-4">
                  <h5>Email will be sent to Admin Login Email Address</h5>
                </div>
              </div>
              <div
                className="borderbox col-5 py-5 square border border-danger border-3 border-bottom"
                style={{
                  marginTop: 30,
                  width: 372,
                  height: 288,
                  backgroundColor: "#fff",
                  borderRadius: 20,
                  borderWidth: 5,
                  borderColor: "#000",
                }}
              >
                 <div className=" notify_text2   px-4">
                  <h4>New Orders</h4>
                </div>
                {Data.map((data, index) => {
                  return (
                    <div className=" d-flex  d-none d-sm-flex py-1 px-4 my-4 ">
                      <div className=" justify-content-start my-1 mx-2  d-none d-sm-flex py-1 px-4 ">
                        <h5>{data.text1}</h5>
                      </div>
                      <div className=" row-12 justify-content-end  d-none d-sm-flex ">
                        <div className="d-flex justify-content-between">
                          <h4 className="my-2 mx-3">Off</h4>
                          <div className="form-check form-switch  mx-1  ">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="flexSwitchCheckDefault"
                            />
                          </div>
                          <h4 className="my-2 mx-2">On </h4>
                        </div>
                      </div>
                    </div>
                  );
                })}

                <div className="col-12 text-center my-2 mt-3 mx-4">
                  <h5>Email will be sent to Admin Login Email Address</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
