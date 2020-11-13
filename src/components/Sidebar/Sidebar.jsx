import React from "react";
import { NavLink } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import "./Sidebar.css";
import { Scrollbars } from "react-custom-scrollbars";

class Sidebar extends React.Component {
  render() {
    const { sidebar } = this.props;
    const sidebarActive = sidebar ? "active" : "";

    return (
      <div className={"sidebar " + sidebarActive}>
        <button
          className={"sidebar-btn " + sidebarActive}
          onClick={this.props.sidebarToggle}
        >
          <FontAwesomeIcon icon={faBars} />
        </button>

        <Scrollbars autoHide>
          <div className="sidebar-body">
            {/* Top Part  */}
            <div className="sidebar-header">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/react-portfolio-92c60.appspot.com/o/22688473_484769155239918_4777493516804340989_n.jpg?alt=media&token=cfb66b86-51fa-43ff-989d-d255f2a3872d"
                alt=""
                className="sidebar-image"
              />
            </div>

            {/* Middle Part */}
            <ul className="sidebar-ul">
              <li>
                {" "}
                <NavLink exact={true} activeClassName="active" to="/">
                  Home
                </NavLink>{" "}
              </li>
              <li>
                {" "}
                <NavLink exact={true} activeClassName="active" to="/portfolio">
                  Portfolios
                </NavLink>{" "}
              </li>
              <li>
                {" "}
                <NavLink exact={true} activeClassName="active" to="/contact">
                  Contact
                </NavLink>{" "}
              </li>
              <li>
                {" "}
                <NavLink exact={true} activeClassName="active" to="/resume">
                  Resume
                </NavLink>{" "}
              </li>
              <li>
                {" "}
                <NavLink exact={true} activeClassName="active" to="/about">
                  About
                </NavLink>{" "}
              </li>
            </ul>

            {/* Last Part */}
            <div className="sidebar-copyright">
              <p>&copy; Copyiright 2020</p>
            </div>
          </div>
        </Scrollbars>
      </div>
    );
  }
}

export default Sidebar;
