import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";
import Widget from '../../PhotoWidgetUploader';
import Search from '../modules/Search';
import "./admin.css";


class Welcome extends Component {
     

    render() {
        
        return (
            <div className="container-admin">
                <div className='new-photo-admin'>
                    <h3>Administrator Site</h3>
                    <hr></hr>
                    <p>Make sure to include "Weddings", "Portraits" or "Engagements" tag in "advance options" when uploading new photos
                        for categories.
                    </p>
                    <p>To add images for clients, TAG NAME AND USERNAME HAS TO MATCH</p>
                    <p>To add images in home page carousel just add the tag "home" when uploading images</p>
                    <p>To delete images just type category name on the search bar and press delete button</p>
                    
                </div>
                <div className="back-btn-admin">
                    <Widget/> 
                    <hr/>
                    <Search/>
                    </div>
                <div className="photo-container-admin">
                    <p>Hello! this is the administrator site, for managing page</p>
                </div>
            </div>
        );

        
    }
}

export default Welcome;