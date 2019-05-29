import React from 'react';
import ImgContact from './WNP_9594.jpg';
import './contact.css'

class Contact extends React.Component {

    state = {

    }


    render() {
        return (
            <div className="contact-div">
                    <h2 className="header-h2">Contact me</h2>
                <div className="main-contact-div">
                <div className="img-contact-div">
                    <img src={ImgContact}
                    style={{
                        height: "200px",
                        width: "auto",
                        display:"block",
                        marginLeft: "auto",
                        marginRight: "auto"
                    }}/>

                </div>
                <div className="contact-form">
                    <label className="form-label">Name: </label>
                    <input
                        onChange={this.handleInput}
                        name="name"
                        type="text"
                        className="form-input"
                        placeholder="Enter name" />
                    <label className="form-label">Email: </label>
                    <input
                        onChange={this.handleInput}
                        name="name"
                        type="text"
                        className="form-input"
                        placeholder="Enter Email" />
                    <label className="form-label">Phone Number: </label>
                    <input
                        onChange={this.handleInput}
                        name="name"
                        type="text"
                        className="form-input"
                        placeholder="Enter Phone Number" />
                    <label className="form-label">Message: </label>
                    <input
                        onChange={this.handleInputChange}
                        name="name"
                        type="text"
                        className="form-input"
                        placeholder="Message" />
                    <button className="btn-contact">Submit: </button>
                </div>
                </div>
            </div>
        )
    };
};

export default Contact;