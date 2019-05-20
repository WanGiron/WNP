import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Img1 from './WNP_1957.jpg';
import Img2 from './WNP_3918.JPG';
import Img3 from './WNP_4442.JPG';


 
class Slide extends Component {
    render() {
        return (
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100" src={Img1} alt="First slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src={Img2} alt="Second slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src={Img3} alt="Third slide"/>
    </div>
  </div>
</div>
        );
    }
};

export default Slide;