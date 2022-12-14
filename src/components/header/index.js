import { useState } from "react";
import { Button, Dropdown } from "react-bootstrap";
import { FaSearch, FaBell, FaSignOutAlt, FaBars } from "react-icons/fa";
// import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Images from "../../constant";
// import { logout } from "../../app/auth";

export default function Header({headertext}) {
  // const dispatch = useDispatch();
  const navigate = useNavigate();

  const [notification, setNotification] = useState(false);
  return (
    <>
      <header className="header mt-3">
        <div className="container-fluid row col-12">
          <div className="d-flex bd-highlight col-11">
            <div className="flex-grow-1 bd-highlight">
              {/* <div className="d-sm-none toggle_wrapper">
                <button
                  className="btn btn-primary toggle_btn"
                  // onClick={(e) => {
                  //   e.preventDefault();
                  //   props.setToggle(!props.toggle);
                  // }}
                >
                  <FaBars />
                </button>
              </div> */}
              <div className="search_bar_wrapper d-none d-sm-flex ">
               <h1>{headertext}</h1>
           
              </div>
            </div>
            </div>
            <div className="px-1 bd-highlight row col ">
            <div className="px-1 bd-highlight col ">
              <Button
                variant="light"
                className="notification_button"
                // onClick={(e) => {
                //   e.preventDefault();
                //   setNotification(!notification);
                // }}
              >
                <FaBell style={{ color: "blue", width: 24, height: 29 }} />
                <div className={`notification ${!notification && "d-none"}`}>
                  <div className="notification_body"></div>
                </div>
              </Button>
              </div>
              <div className="px-1 bd-highlight col">
              <img src={Images.user}/>
            </div>
            </div>
        
          </div>
      
      </header>
    </>
  );
}
