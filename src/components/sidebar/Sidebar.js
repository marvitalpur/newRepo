import { NavLink } from "react-router-dom";

import {
  FiHome,
  FiSettings,
  FiUser,
  FiUsers,
  FiMessageSquare,
} from "react-icons/fi";
import { FaBlog, FaRegWindowClose } from "react-icons/fa";
import Images from "../../constant";

export default function SideBar(props) {
  return (
    <aside className={`sidebar ${props.toggle && "sidebar_show"}`}>
      <div className="sidebar__header">
        <div className="sidebar__header__icon">
          <img src={Images.logo} alt="logo" />
        </div>
      </div>
      <div className="sidebar__body">
        <div className="sidebar__title">
          <div className="d-flex" >
          <img src={Images.deal} className="side-icon"/>
          <h3 className="top_head">Dashboard</h3>
        </div>
          </div>
     
        <div className="sidebar__body__item">
          <ul>
            <NavLink to="/" className={"item__link"}>
              <li>
                <img src={Images.deal} className="side-icon"/>
               Deals
              </li>
            </NavLink>
            <NavLink to="/users" className={"item__link"}>
              <li>
              <img src={Images.users1} className="side-icon"/>
              Users
              </li>
            </NavLink>
            <NavLink to="/blog" className={"item__link"}>
              <li>
              <img src={Images.order} className="side-icon"/> Orders
              </li>
            </NavLink>
            <NavLink to="/chat_rooms" className={"item__link"}>
              <li>
              <img src={Images.time} className="side-icon"/> Timer
              </li>
            </NavLink>
            <NavLink to="/settings" className={"item__link"}>
              <li>
              <img src={Images.settingsI} className="side-icon"/> Settings
              </li>
            </NavLink>
            <NavLink to="/help" className={"item__link"}>
              <li>
              <img src={Images.order} className="side-icon"/>Featured Deals
              </li>
            </NavLink>
           
          </ul>
        </div>
      </div>
    </aside>
  );
}
{/* <NavLink to="/close" className={"item__link d-sm-none"} onClick={(e)=>{
  e.preventDefault()
  props.setToggle(false)
}}>
  <li>
  <img src={Images.deal} className="side-icon"/> Close
  </li>
</NavLink> */}