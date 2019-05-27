import React from "react";
import ImgEng from './engagement.jpg';
import ImgWed from './wedding.jpg';
import ImgPort from './WNP_2906.jpg';
import { Link } from "react-router-dom";
import './cards.css';

function CardsModule(props) {
    return (
        <div className="container justify-content">

            <h2 className="header-portfolio">Portfolio</h2>

            <div className="row row-portfolio">

                <div className="cat-divs col-4">
                    <img src={ImgEng} alt="Avatar" className="image-overlay" />
                    <Link to="/engagements">
                        <div className="overlay">
                            <div className="text">ENGAGEMENTS</div>
                        </div>
                    </Link>
                </div>

                <div className="cat-divs col-4">
                    <img src={ImgWed} alt="Avatar" className="image-overlay" />
                    <Link to="/weddings">
                        <div className="overlay">
                            <div className="text">WEDDINGS</div>
                        </div>
                    </Link>
                </div>

                <div className="cat-divs col-4">
                    <img src={ImgPort} alt="Avatar" className="image-overlay" />
                    <Link to="/portraits">
                        <div className="overlay">
                            <div className="text">PORTRAITS</div>
                        </div>
                    </Link>
                </div>

            </div>
        </div>)

}

export default CardsModule;