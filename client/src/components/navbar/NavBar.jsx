import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';


const navBar = {
  padding: '10px',
  margin: '10px 0 80px 0',
  // backgroundColor: '#9055fb'
}

const navList = {
  padding: '0',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  listStyle: 'none',
  width: '40%',
  margin: 'auto',
  marginTop: '0px',
  // color: 'red'
}


const logo = {
  display: 'block',
  height: '55px',
  width: '100px',
  fontSize: '36px',
  margin: '10px 0 0 20px'
}

class NavBar extends Component {
  render() { 

    return ( 
      <div className="navbar" style={navBar}>
        <div className="logo" style={logo}><NavLink to="/">LOGO</NavLink></div>
        <ul style={navList}>
          <li className="singleLink"><NavLink to ="/meetme">Meet Me</NavLink></li>
          <li><NavLink to ="/portfoliopage">Portfolio</NavLink></li>
          <li><NavLink to ="/contact">Contact</NavLink></li>
        </ul>
      </div>
     );
  }
}
 
export default NavBar;