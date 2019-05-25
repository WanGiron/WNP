import React, { Component, Redirect } from 'react';
// import AUTHAPI from '../utils/google-auth';
import axios from 'axios';
// import Images from './modules/Images1';
import { Link } from 'react-router-dom';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { FacebookShareButton,
    FacebookIcon, 
     WhatsappShareButton,
     WhatsappIcon,
     EmailShareButton,
     EmailIcon, 
     TwitterShareButton,
     TwitterIcon,
     } from 'react-share';
import './userSite.css';

class UserSite extends Component {

    state = {
        item: [],
        name: this.props.user.email
    }

    responsive = {
        0: { items: 1 },
        1024: { items: 1 },
    }

    stagePadding = {
        paddingLeft: 20,
        paddingRight: 20
    }

    componentDidMount() {
        this.handleSubmit();
    }

    // to get photso from cloud based on user name //
    handleSubmit() {
        const userSearch = {
            value: this.props.user.email
        }
        console.log(userSearch.value);
        axios.post('/api/cloud/user/search', userSearch)
            .then(res => {
                console.log(res);
                this.setState({ item: res.data.resources });

            })

    }

    //To render thumbnails//
    renderThumbs = () => {
        const arrP = this.state.item.map(i => i.secure_url)
        return (<div className="thumbnail-list"> {
            arrP.map((item, i) =>
                <button className="img-btn1" >
                    <img src={item} className="thumbnail-image" key={i} onClick={() => this.Carousel._onDotClick(i)} />
                </button>)}
        </div>);
    }

    render() {
        // const favs = this.state.item;
        const arr = this.state.item;
        const items = arr.map(im => im.secure_url);
        const arr2 = arr.map(i => <div className="wrapper1">
        <img className="slide-img1" style={{ width: "100%", height: "100%", objectFit: "contain" }} src={i.secure_url} />
               <div className="social-btns">
               <button className="facebook-btn">
                <FacebookShareButton
                    className="facebook-btn"
                    url={i.secure_url}
                    quote={"Great!"}>
                    <FacebookIcon size={"30px"} border={"1px"} />
                </FacebookShareButton>
                </button> 
                <button className="facebook-btn">
                <WhatsappShareButton
                    className="facebook-btn"
                    url={i.secure_url}
                    title={"Wiliam Navas Photo"}>
                    <WhatsappIcon size={"30px"}/>
                </WhatsappShareButton>
                </button> 

                <button className="facebook-btn">
                <EmailShareButton
                    className="facebook-btn"
                    url={i.secure_url}
                    title={"Wiliam Navas Photo"}>
                    <EmailIcon size={"30px"}/>
                </EmailShareButton>
                </button> 
                </div>

        </div>)

        return (
            <div>
                <br />
                    <div className="jumbotron-fluid text-center">
                        <i className="header-cat" style={{ fontSize: "30px" }}>{this.props.user.name} site</i>
                    </div>
                <hr/>
                <AliceCarousel items={arr2}
                    dotsDisabled={false}
                    buttonsDisabled={true}
                    responsive={this.responsive}
                    autoPlayInterval={2000}
                    autoPlayDirection="rtl"
                    autoPlay={false}
                    fadeOutAnimation={true}
                    ref={el => this.Carousel = el} />

                {/* <button onClick={() => this.Carousel._slidePrev()}> Prev button </button> */}
                {/* <button onClick={() => this.Carousel._slideNext()} > Next button </button> */}
                
                    <div className="thumbnails-div">
                        {this.renderThumbs()}
                    </div>
            

            </div>
        );
    }
}

export default UserSite;