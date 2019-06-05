import React from 'react';
import SocialMedia from './SocialMedia';
import AbourImg from './about.jpg';
import Facebook from './facebook.svg';
import Instagram from './instagram.svg';
import './about.css';

class About extends React.Component {
    render() {
        return (
        <div className="about-main-div">
        <h2 className="header-about">About me</h2>
            <div className="about-wraper">
                <div className="img-div-about">
                <img className="img-about" src={AbourImg}
                    style={{
                        height: "auto",
                        // width: "400px",
                        display:"block",
                        // marginLeft: "auto",
                        // marginRight: "auto"
                    }}>
                </img>
                <SocialMedia/>
                </div>

                <div className="p-about-div">
                    <p>
                    Hi there! Thank you for checking out my website. My name is Will and along with my wife Lady, we have been photographing weddings and events for close to a decade now. 
                    Weddings are our specialty! We absolutely love to capture couples on their journey to the altar, and while a wedding day can be stressful and chaotic, 
                    we make sure that the photography is at least not one of your worries! We strive to artistically capture all the beautiful details of one of the most important days of your lives,
                    from the genuine smiles of your guests to the groom’s surprised and tearful face when he sees his bride for the first time. We do all this while being as “invisible” as possible. 
                    Our desire is for the couple to enjoy and remember their journey to the altar forever, very much like we did when we walked to the altar ourselves! 
                    </p>
                </div>
             </div>

        </div>

        )
    }
}

export default About;