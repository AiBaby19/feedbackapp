import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


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
        <div className="logo" style={logo}><NavLink to="/">D_D</NavLink></div>
        <ul style={navList}>
          <li><NavLink to ="/meetme">Meet Me</NavLink></li>
          <li><NavLink to ="/portfoliopage">Portfolio</NavLink></li>
          <li><NavLink to ="/contact">Contact</NavLink></li>
        </ul>
      </div>
     );
  }
}
 
export default NavBar;