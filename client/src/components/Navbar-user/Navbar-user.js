import React from "react";
import { Link } from "react-router-dom";
import './Navbar-user.css';
import Logo from './logo-web.png';

import Axios from "axios";


class NavbarUser extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loggedIn: true

    };
  }

  update = (e) => {
    console.log(e.target.value);
    this.props.onUpdate(e.target.value);
    this.setState({ name: e.target.value });
  };

  render() {

    return (
      <nav className='nav-user'>

        <Link to="/"
          className="navbar-logo navbar-brand mr-0 mr-md-2 mt-0"
          aria-label="Bootstrap"
          style={{ textDecoration: "none", color: "black" }}>
          <i className="fa fa-home" style={{ marginLeft: "10px", marginTop: "6px", color: "darkGray", fontSize: "30px" }}></i>
        </Link>
        
       <div className="WNP-header"><h3 className="WNP">William Navas Photo</h3></div>
        {/* <ul>
          {(!this.props.user ? (<li className="nav-item"> <Link to="/signup" className="nav-link" style={{ textDecoration: "none", color: "black" }}> <p className="nav-hover" style={{ color: 'black' }}><i className="far fa-user"></i>Sign Up</p> </Link> </li>) : "")}
          {(!this.props.user ? (<li className="nav-item"><Link to="/login-local" className="nav-link" style={{ textDecoration: "none", color: "black" }}> <p className="nav-hover" style={{ color: 'black' }}><i className="far fa-user"></i> Log In</p> </Link> </li>) : "")}
          {(this.props.user.name === 'Admin' ? (<li className="nav-item"><Link to="/admin" className="nav-link" style={{ textDecoration: "none", color: "black" }}><p className="nav-hover" style={{ color: 'white' }}><strong>{this.props.user.name}</strong></p> </Link></li>) : "")}
          {(this.props.user.name !== 'Admin' ? (<li className="nav-item"><Link to="/personal-account" className="nav-link" style={{ textDecoration: "none", color: "black" }}><p className="nav-hover" style={{ color: 'white', fontSize: "20px" }}><strong>{this.props.user.name}</strong></p> </Link></li>) : "")}
          {(this.props.user ? (<li className="nav-item"><Link className="nav-link" style={{ textDecoration: "none", color: "black" }}> <p onClick={this.props.logOut} className="nav-hover" style={{ color: 'white' }}><i className="far fa-user"></i> Log Out</p> </Link></li>) : "")}
        </ul> */}
      </nav>
    )
  }



}





export default NavbarUser;



