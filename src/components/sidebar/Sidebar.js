import { NavLink } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
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
        <div className="sidebar__body__item">
          <ul>
            <NavLink to="/" activeClassName="active" style={{marginTop:10}} >
              <li>
              <img src={Images.deal} className="side-icon" />
              Dashboard
          
              </li>
            </NavLink>
            <NavLink to="/Deals"  activeClassName="active"  style={{ marginTop: 10 }}>
              <li>
                <img src={Images.deal} className="side-icon" />
                Deals
              </li>
            </NavLink>
            <NavLink to="/User" className={"item__link"} activeClassName="active"  style={{ marginTop: 10 }}>
              <li>
                <img src={Images.users1} className="side-icon" />
                Users
              </li>
            </NavLink>
            <NavLink to="/Orders" className={"item__link"} activeClassName="active"  style={{ marginTop: 10 }}>
              <li>
                <img src={Images.order} className="side-icon" /> Orders
              </li>
            </NavLink>
            <NavLink to="/Timer" className={"item__link"} activeClassName="active"  style={{ marginTop: 10 }}>
              <li>
                <img src={Images.time} className="side-icon" /> Timer
              </li>
            </NavLink>
            <NavLink to="/settings" className={"item__link"} activeClassName="active"  style={{ marginTop: 10 }}>
              <li>
                <img src={Images.settingsI} className="side-icon" /> Settings
                <ul>
                  <li>
                    <NavLink to="/adminSettings" className={"item__link"} activeClassName="active"  style={{ marginTop: 10 }}>
                      adminSettings
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/AppUpdate" className={"item__link"} activeClassName="active"  style={{ marginTop: 10 }}>
                      AppUpdate
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="Notification" className={"item__link"} activeClassName="active"  style={{ marginTop: 10 }}>
                    Notification
                    </NavLink>
                  </li>
                </ul>
              </li>
            </NavLink>
            <NavLink to="/FeaturedDeals" className={"item__link"} activeClassName="active"  style={{ marginTop: 10}}>
              <li>
                <img src={Images.order} className="side-icon" />
                Featured Deals
              </li>
            </NavLink>
          </ul>
        </div>
      </div>
    </aside>
  );
}
