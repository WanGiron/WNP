import React from "react";
import { Link } from "react-router-dom";
import Logo from './logoWNP.png';
import './Navbar-user.css';

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
       <Link to='/' style={{ textDecoration: "none", color: "rgb(199, 100, 19)" }}><div className="WNP-header"><img src={Logo} style={{width:"300px", height:'auto'}}/></div></Link>
        <ul className="login-menu">
          {/* {(!this.props.user ? (<div className="nav-item"> <Link to="/signup" className="nav-link" style={{ textDecoration: "none", color: "black" }}> <p className="nav-hover" style={{ color: 'black' }}><i className="far fa-user"></i>Sign Up</p> </Link> </div>) : "")} */}
          {(!this.props.user ? (<li className="nav-item"><Link to="/login-local" style={{ textDecoration: "none", color: "black" }}> <p className="nav-hover" style={{ color: 'gray' }}><i className="far fa-user"></i> Log In</p> </Link> </li>) : "")}
          {(this.props.user.name === 'Admin' ? (<li className="nav-item"><Link to="/admin"  style={{ textDecoration: "none", color: "black" }}><p className="nav-hover" style={{ color: 'gray' }}><strong>{this.props.user.name}</strong></p> </Link></li>) : "")}
          {(this.props.user.name !== 'Admin' ? (<li className="nav-item"><Link to="/usersite" style={{ textDecoration: "none", color: "black" }}><p className="nav-hover" style={{ color: 'gray', fontSize: "20px" }}><strong>{this.props.user.name}</strong></p> </Link></li>) : "")}
          {(this.props.user ? (<li className="nav-item"><Link  style={{ textDecoration: "none", color: "black" }}> <p onClick={this.props.logOut} className="nav-hover" style={{ color: 'gray' }}><i className="far fa-user"></i> Log Out</p> </Link></li>) : "")}
        </ul>
      </nav>
    )
  }



}





export default NavbarUser;



