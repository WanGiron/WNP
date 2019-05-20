import React from "react";
import { Link } from "react-router-dom";
import './navbar-main.css';

const Navbar = props => (
  <nav className='nav-main navbar navbar-expand navbar-dark flex-column flex-md-row bd-navbar"'>
    <ul>
      <li className="nav-item1"
       >
        <Link to="/"
          className="nav-link nav-link1"
          style={{ textDecoration: "none", color: "white" }}>
          <span className="nav-hover">Weddings</span>
            </Link>
      </li>

      <li className="nav-item1"
      >
        <Link to="/"
          className="nav-link nav-link1"
          style={{ textDecoration: "none", color: "white" }} >
          <span className="nav-hover">Portraits</span>
            </Link>
      </li>

      <li className="nav-item1"
       
       >
        <Link to="/"
          className="nav-link nav-link1"
          style={{ textDecoration: "none", color: "white" }} >
          <span className="nav-hover">Engagements</span>
            </Link>
      </li>

      <li className="nav-item1"
        style={{  }}>
        <Link to="/"
          className="nav-link nav-link1"
          style={{ textDecoration: "none", color: "white" }}>
          <span className="nav-hover">Events</span>
        </Link>
      </li>
    </ul>
    
  </nav>
);

export default Navbar;