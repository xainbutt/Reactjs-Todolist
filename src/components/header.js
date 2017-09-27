import React from 'react';
import ReactDOM from 'react-dom';
// import { NavLink } from 'react-router-dom';

const Header = (props) => {
   return (
        <nav className="navbar navbar-default">
        <div className="container-fluid">
          {/* <div className="navbar-header">
            <NavLink className="navbar-brand" to='/'>Website Name</NavLink>
          </div>
          <ul className="nav navbar-nav">
          <li><NavLink activeClassName="active" to='/home'>Home</NavLink></li>
          <li><NavLink activeClassName="active" to='/about'>About</NavLink></li>
          </ul> */}
        </div>
      </nav>
   );
}

export default Header;