import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Sidebar from "../components/sidebar/Sidebar";
import AdminSettings from "../pages/screens/adminSettings";
import AppUpdate from "../pages/screens/AppUpdate";
import Deals from "../pages/screens/Deals";
import FeatureDeals from "../pages/screens/Featured_Deals";
import Home from "../pages/screens/Home";
import Login from "../pages/screens/Login";
import Notification from "../pages/screens/notification";
import Orders from "../pages/screens/orders";
import Profile from "../pages/screens/profile";
import Settings from "../pages/screens/Settings";
import Splash from "../pages/screens/Splash";
import Timer from "../pages/screens/Timer";
import UserScreen from "../pages/screens/UserScreen";
import ViewOrders from "../pages/screens/ViewOrders";


function Navigation() {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      
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
                <div className="container-fluid mt-5">
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route Route path="/Timer" element={<Timer />} />
                    <Route path="/Settings" element={<Settings />} />
                    <Route path="/adminSettings" element={<AdminSettings />} />
                    <Route path="/AppUpdate" element={<AppUpdate />} />
                    <Route path="/FeaturedDeals" element={<FeatureDeals />} />
                    <Route path ="/Notification" element={<Notification/>}/>
                    <Route path="/User" element={<UserScreen/>} />
                    <Route path="/Deals" element={<Deals/>}/>
                    <Route path ="Orders" element={<Orders/>}/>
                    <Route path="ViewOrders" element={<ViewOrders/>} />
                    <Route path="/Profile" element={<Profile/>}/>
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
