import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "../components/header";
import Sidebar from "../components/sidebar/Sidebar";
import Home from "../pages/screens/Home";
import Login from "../pages/screens/Login";
import Splash from "../pages/screens/Splash";
import User from "../pages/screens/user";



function Navigation() {
  const [toggle, setToggle] = useState(false);

 



  return (
    <>
      <h1>dhjfkdfdg</h1>
      <Routes>
        <Route path="/splash" element={<Splash />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/*"
          element={
            <div
              className="wrapper"
              style={{
                overflow: toggle && "hidden",
              }}
            >
              <Sidebar toggle={toggle} setToggle={setToggle} />
              <div className="main">
                <Header setToggle={setToggle} />
                <div className="container-fluid mt-5">
                  <Routes>
                    <Route
                      path="/"
                      element={
                      
                          <Home />
                        
                      }
                    />
                  </Routes>
                </div>
              </div>
            </div>
          }
        />
      </Routes>
    </>
  );
}

export default Navigation;
