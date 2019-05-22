import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './portfolio.css';
class Weddings extends React.Component {
    state = {
        arrPhoto: []
    }
    responsive = {
        0: { items: 1 },
        1024: { items: 1 },
    }

    stagePadding={
        paddingLeft: 20,     
        paddingRight: 20
    }


    componentDidMount = () => {
        this.getPhotos();
    }
    //getting Photos fro API//
    getPhotos = () => {
        fetch('/api/get_photos/decor')
            .then(res => res.json())
            .then(arrPhoto => this.setState({
                arrPhoto: arrPhoto.resources
            }));
    }
//To render thumbnails//
    renderThumbs = () => {
        const arrP = this.state.arrPhoto.map(i => i.secure_url)
        return (<ul className="thumbnail-list"> {
            arrP.map((item, i) =>
                <button className="img-btn" >
                    <img src={item} className="thumbnail-image" key={i}  onClick={() => this.Carousel._onDotClick(i)} />
                </button>)}
        </ul>);
    }

    render() {
        const arr = this.state.arrPhoto;
        const items = arr.map(im => im.url);
        const arr2 = arr.map(i =>  <div className="wrapper"><img className="slide-img" src={i.url}/></div>)

        return (
            <div>
                <AliceCarousel items={arr2}
                    dotsDisabled={false}
                    buttonsDisabled={true}
                    responsive={this.responsive}
                    autoPlayInterval={2000}
                    autoPlayDirection="rtl"
                    autoPlay={true}
                    fadeOutAnimation={true}
                    ref={el => this.Carousel = el} />
           
                {/* <button onClick={() => this.Carousel._slidePrev()}> Prev button </button> */}
                {/* <button onClick={() => this.Carousel._slideNext()} > Next button </button> */}
                <div className="thumbnails">
                {this.renderThumbs()}
            </div>

            </div>
        );
    }
}

export default Weddings;