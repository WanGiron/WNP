import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './images.css';
class Slide6 extends React.Component {
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
        fetch('/api/get_photos/home')
            .then(res => res.json())
            .then(arrPhoto => this.setState({
                arrPhoto: arrPhoto.resources
            }));
    }
//To render thumbnails//
    renderThumbs = () => {
        const arrP = this.state.arrPhoto.map(i => i.url)
        return (<ul> {
            arrP.map((item, i) =>
                <button>
                    <img src={item} key={i} style={{ width: "150", height: "80px" }} onClick={() => this.Carousel._onDotClick(i)} />
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
                <button onClick={() => this.Carousel._slidePrev()}> Prev button </button>
                <button onClick={() => this.Carousel._slideNext()} > Next button </button>
                {this.renderThumbs()}

            </div>
        );
    }
}

export default Slide6;