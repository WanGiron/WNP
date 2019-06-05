import React from "react";
import { Link } from "react-router-dom";
// import './navbar-main.css';


const NavbarAdmin = (props) => (
    <div className='nav-bar-admin'>
        <div>
        <div className="nav-item-admin">
                <Link to="/admin"
                    className="nav-link-2"
                    style={{ textDecoration: "none", color: "black" }}>
                    <p className="nav-hover-2">Administrator</p>
                </Link>
            </div>
            <hr/>
            <div className="nav-item-admin">
                <Link to="/weddingsadmin"
                    className="nav-link-2"
                    style={{ textDecoration: "none", color: "black" }}>
                    <p className="nav-hover-2">Weddings</p>
                </Link>
            </div>
            <hr/>
            <div className="nav-item-admin">
                <Link to="/portraitsadmin"
                    className="nav-link-2"
                    style={{ textDecoration: "none", color: "black" }}>
                    <p className="nav-hover-2">Portraits</p>
                </Link>
            </div>
            <hr/>
            <div className="nav-item-admin">
                <Link to="/engagementsadmin"
                    className="nav-link-2"
                    style={{ textDecoration: "none", color: "black" }}>
                    <p className="nav-hover-2">Engagements</p>
                </Link>
            </div>
            <hr/>
           
            <div className="nav-item-admin">
                <Link to="/signup"
                    className="nav-link-2"
                    style={{ textDecoration: "none", color: "black" }}>
                    <p className="nav-hover-2">Add Clients</p>
                </Link>
            </div>
            <hr/>
            <div className="nav-item-admin">
                <Link to="/users"
                    className="nav-link-2"
                    style={{ textDecoration: "none", color: "black" }}>
                    <p className="nav-hover-2">Clients</p>
                </Link>
            </div>
            <hr/>
            <div className="nav-item-admin">
                <Link to="/messages"
                    className="nav-link-2"
                    style={{ textDecoration: "none", color: "black" }}>
                    <p className="nav-hover-2">Messages from site</p>
                </Link>
            </div>

        </div>
    </div>
);

export default NavbarAdmin;