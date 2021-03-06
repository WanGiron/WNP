import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import { Link } from "react-router-dom";
import 'react-alice-carousel/lib/alice-carousel.css';
import Carousel from 'nuka-carousel';
import './images.css';
import Navbar from '../../Navbar-main/Navbar-main';

class Nuka extends React.Component {
    state = {
        arrPhoto: []
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

    render() {
        const arr = this.state.arrPhoto;
        const items = arr.map(im => im.secure_url);
        const arr2 = arr.map(i => <div className="wrapper" key={i.public_id}><img className="slide-img" src={i.secure_url} /></div>)

        return (

            <Carousel
                autoplay={true}
                transitionMode={'fade'}
                autoplayInterval={4000}>
                {arr2}
            </Carousel>

        );
    }
}

export default Nuka;