import React from 'react';
import Facebook from './facebook.svg';
import Instagram from './instagram.svg';

class SocialMedia extends React.Component{
    render(){
        return(
            <div className="social-icon" style={{margin:"auto", }}>
                {/* <p>Follow me!</p> */}
                <a href="https://www.facebook.com/williamnavasphoto">
                    <img src={Facebook} 
                    style={{width:"40px", 
                    height:'auto',
                    padding:'4px'
                    }}/></a>
                <a href="https://www.instagram.com/wil_nvs_photo/?hl=en">
                    <img src={Instagram} 
                    style={{width:"40px", 
                    height:'auto',
                    padding:'4px'
                    }}/></a>
            </div>
        )
    }
}

export default SocialMedia;