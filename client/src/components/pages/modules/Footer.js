import React from 'react';
import { Link } from "react-router-dom";
import './footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <nav className="navbar nav">
                <p className="copyright nav-item" style={{ fontSize: "12px" }}>All rights reserved William Navas 2019</p>
            </nav>
            <br/>
        </div>
    )
}

export default Footer;