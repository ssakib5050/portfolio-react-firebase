import React from 'react';
import {
  NavLink
} from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import './Sidebar.css';
import { Scrollbars } from 'react-custom-scrollbars';



class Sidebar extends React.Component{

  render(){
    const {sidebar} = this.props;
    const sidebarActive = sidebar ? 'active' : '';
    
    return(
      <div className={"sidebar " + sidebarActive}>
        <button className={"sidebar-btn " + sidebarActive} onClick={this.props.sidebarToggle}>
          <FontAwesomeIcon icon={faBars}/>
        </button>
        
        <Scrollbars autoHide>
          <div className="sidebar-body">
            
            {/* Top Part  */}
            <div className="sidebar-header">
              <img src="https://scontent.fdac5-1.fna.fbcdn.net/v/t1.0-0/c0.0.612.612a/s526x395/22688473_484769155239918_4777493516804340989_n.jpg?_nc_cat=105&_nc_sid=174925&_nc_ohc=VGUa2SgMBvwAX8i7XQl&_nc_ht=scontent.fdac5-1.fna&oh=fd11b4b8041dbedd5e71544a7367adcf&oe=5F68EB74" alt="" className="sidebar-image"/>
            </div>

            {/* Middle Part */}
            <ul className="sidebar-ul">
              <li> <NavLink exact={true} activeClassName='active' to="/">Home</NavLink> </li>
              <li> <NavLink exact={true} activeClassName='active' to="/portfolio">Portfolios</NavLink> </li>
              <li> <NavLink exact={true} activeClassName='active' to="/contact">Contact</NavLink> </li>
              <li> <NavLink exact={true} activeClassName='active' to="/resume">Resume</NavLink> </li>
              <li> <NavLink exact={true} activeClassName='active' to="/about">About</NavLink> </li>
            </ul>

            {/* Last Part */}
            <div className="sidebar-copyright">
              <p>&copy; Copyiright 2020</p>
            </div>
          
          </div>
        </Scrollbars>
      </div>
    )
  }
}



export default Sidebar;