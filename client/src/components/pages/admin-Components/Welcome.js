import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";
import Widget from '../../PhotoWidgetUploader';
import "./admin.css";


class Welcome extends Component {
     

    render() {
        
        return (
            <div className="container-admin">
                <div className='new-photo-admin'>
                    <h3>New Photo Upload for <strong>Page</strong></h3>
                    <hr></hr>
                    <p>Make sure to include "Weddings", "Portraits" or "Engagements" tag in "advance options" when uploading new photos</p>
                    
                </div>
                <div className="back-btn-admin">
                    <Widget/> 
                    </div>
                <div className="photo-container-admin">
                    <p>Hello! this is the administrator site, for managing page</p>
                </div>
            </div>
        );

        
    }
}

export default Welcome;