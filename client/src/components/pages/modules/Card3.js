import React from 'react';
import Img1 from '../../pages/WNP_4442.JPG';

class Card3 extends React.Component {
    render() {
        return (
            <div className="card card1" style={{width:"18rem"}}>
                <img src={Img1} className="card-img-top img-card1" alt="pic" />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        )
    }
}

export default Card3;