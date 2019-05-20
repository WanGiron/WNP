import React from 'react';
import Img2 from '../../pages/cards2.jpg';

class Card2 extends React.Component {
    render() {
        return (
            <div className="card card1" style={{width:"18rem"}}>
                <img src={Img2} className="card-img-top img-card1" alt="pic" />
                <div className="card-body">
                    <h5 className="card-title">Get to know me</h5>
                    <hr/>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-outline-info">Enter</a>
                </div>
            </div>
        )
    }
}

export default Card2;