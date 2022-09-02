import React from "react";
import Header from "../../../components/header";

// import { Container } from './styles';

function AdminSettings() {
  return (
    <>
      <div className="container-fluid">
        <div className="row col-12 px-5">
          <Header headertext={"Admin Settings"} />
          <div className="main_whitebox " style={{}}>

            <div className="my-4 mx-5 mt-5 border square border square border border-end-0 square border border-start-0 square border border-top-0 ">
              <h2 style={{ marginTop: 20 }}>Admin Login Email Address</h2>
              <h4 style={{ marginTop: 40 }}>Admin@sample.com</h4>
              <h4 style={{ color: "#1492E6", marginTop: 30 }}>Edit</h4>
            </div>
            <div className="my-4 mx-5 mt-5 ">
            <h2 style={{ marginTop: 20 }}>Update Password</h2>
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
              <div className="  d-flex py-1 px-4 ">
                <h1>fhhhhhhhh</h1>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminSettings;
