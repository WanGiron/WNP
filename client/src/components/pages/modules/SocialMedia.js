import React from 'react';
import {FacebookIcon} from 'react-share';
import InstaIcon from './instaIcon.png';

class SocialMedia extends React.Component{
    render(){
        return(
            <div className="facebook-icon" style={{margin:"auto", }}>
                <a href="https://www.facebook.com/williamnavasphoto"><FacebookIcon size={32}/></a>
                <a href="https://www.instagram.com/wil_nvs_photo/?hl=en"><img src={InstaIcon} style={{width:"45px", height:'auto'}}/></a>
            </div>
        )
    }
}

export default SocialMedia;