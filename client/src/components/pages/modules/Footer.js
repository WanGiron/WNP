import React from 'react';
import { Link } from "react-router-dom";
import './footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <nav className="navbar nav">
                <ul className="footer-list ">
                    <li className="footer-lines nav-item"><Link to="/" className="nav-link" style={{ textDecoration: "none", color: "rgb(80, 80, 80)" }}><span>Contact me</span></Link></li>
                    <li className="footer-lines nav-item"><Link to="/" className="nav-link"  style={{ textDecoration: "none", color: "rgb(80, 80, 80)" }}><span>About WNP</span></Link></li>
                </ul>
                <p className="copyright nav-item" style={{ fontSize: "12px" }}>All rights reserved William Navas 2019</p>
            </nav>

            
        </div>
    )
}

export default Footer;