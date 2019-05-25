import React from "react";
import { Link } from "react-router-dom";
// import './navbar-main.css';


const NavbarAdmin = (props) => (
    <div className='nav-bar-admin'>
        <div>
            <p className="nav-item-admin">
                <Link to="/weddingsadmin"
                    className="nav-link-2"
                    style={{ textDecoration: "none", color: "black" }}>
                    <p className="nav-hover-2">Weddings</p>
                </Link>
            </p>
            <hr/>
            <p className="nav-item-admin">
                <Link to="/portraitsadmin"
                    className="nav-link-2"
                    style={{ textDecoration: "none", color: "black" }}>
                    <p className="nav-hover-2">Portraits</p>
                </Link>
            </p>
            <hr/>
            <p className="nav-item-admin">
                <Link to="/engagementsadmin"
                    className="nav-link-2"
                    style={{ textDecoration: "none", color: "black" }}>
                    <p className="nav-hover-2">Engagements</p>
                </Link>
            </p>
            <hr/>
           
            <p className="signup">
                <Link to="/signup"
                    className="nav-link-2"
                    style={{ textDecoration: "none", color: "black" }}>
                    <p className="nav-hover-2">Add Clients</p>
                </Link>
            </p>
            <p className="signup">
                <Link to="/users"
                    className="nav-link-2"
                    style={{ textDecoration: "none", color: "black" }}>
                    <p className="nav-hover-2">Clients</p>
                </Link>
            </p>

        </div>
    </div>
);

export default NavbarAdmin;