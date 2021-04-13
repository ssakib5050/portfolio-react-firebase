import React from "react";
import { NavLink } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import {
  sidebarOff,
  sidebarOn,
  sidebarToggle,
} from "../../reducers/sidebarSlice";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Sidebar.css";
import { Scrollbars } from "react-custom-scrollbars";

const Sidebar = () => {
  const sidebar = useSelector((state) => state.sidebar.value);
  const dispatch = useDispatch();

  console.log(sidebar);

  return (
    <div className="sidebar_wrap ">
      <div className={`sidebar border-right ${sidebar ? "active" : ""}`}>
        {/* Button  */}
        <button
          className={`btn btn-primary sidebar__toggle_btn`}
          onClick={() => dispatch(sidebarToggle())}
        >
          <FontAwesomeIcon icon="bars" />
        </button>

        <Scrollbars style={{ width: "100%", height: "100%" }}>
          <div className="sidebar__main ">
            <div className="sidebar__top">
              <div className="sidebar__top_img_wrap">
                <img
                  src="/undraw_male_avatar_323b.svg"
                  alt=""
                  className="img-fluid sidebar__top_img"
                />
              </div>
            </div>
            <div className="sidebar__middle">
              <ul className="pl-0 d-flex flex-column text-center">
                <li>
                  <NavLink exact={true} activeClassName="active" to="/">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    exact={true}
                    activeClassName="active"
                    to="/portfolio"
                  >
                    Portfolio
                  </NavLink>
                </li>
                <li>
                  <NavLink exact={true} activeClassName="active" to="/contact">
                    Contact
                  </NavLink>
                </li>
                <li>
                  <NavLink exact={true} activeClassName="active" to="/resume">
                    Resume
                  </NavLink>
                </li>
                <li>
                  <NavLink exact={true} activeClassName="active" to="/about">
                    About
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="sidebar__bottom">
              <p className="text-center font-weight-bold mb-0">
                © Copyright 2021
              </p>
            </div>
          </div>
        </Scrollbars>
      </div>
    </div>
  );
};

export default Sidebar;
