import React, { PropTypes, Component } from 'react';
import ImagesSlide from './ImgesSlide';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from 'react-responsive-carousel';
import Img1 from './WNP_1957.jpg';
import Img2 from './WNP_3918.JPG';
import Img3 from './WNP_4442.JPG';
 
class Slide2 extends Component {

  
        state = {
            arrPhoto: []
        }
    


componentDidMount() {
    // const { modern } = this.props.match.params;
    this.getPhotos();
   
}

// Retrieves the list of items from the Express app
getPhotos = () => {
    fetch('/api/get_photos/modern')
        .then(res => res.json())
        .then(arrPhoto => this.setState({ arrPhoto: arrPhoto.resources }));
        
}
    render() {
        
        console.log(this.state.arrPhoto);
        const photosUrl = this.state.arrPhoto;
        return (
            <Carousel showThumbs={true} autoPlay={true} infiniteLoop={true}>
                
                {/* {photosUrl.map(images => (
    <ImagesSlide url={images.url}/>))} */}
               
                <div>
                    <img src={Img1} />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={Img2} />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={Img3} />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        );
    }
};
 
export default Slide2