import React from "react";
import { Link } from "react-router-dom";
import './navbar-main.css';

const Navbar = props => (
  <nav className='nav-main navbar navbar-expand flex-column flex-md-row'>
  
    <ul className="cat-navbar">
      <li className="nav-item1">
        <Link to="/weddings"
          className="nav-link nav-link1"
          style={{ textDecoration: "none"}}>
          <span className="nav-hover">Weddings</span>
            </Link>
      </li>

      <li className="nav-item1">
        <Link to="/portraits"
          className="nav-link nav-link1"
          style={{ textDecoration: "none"}} >
          <span className="nav-hover">Portraits</span>
            </Link>
      </li>

      <li className="nav-item1">
        <Link to="/engagements"
          className="nav-link nav-link1"
          style={{ textDecoration: "none"}} >
          <span className="nav-hover">Engagements</span>
            </Link>
      </li>
    </ul>
    
  </nav>
);

export default Navbar;