import React from 'react';
import ImgContact from './WNP_9594.jpg';
import Footer from './Footer';
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
                                display: "block",
                                marginLeft: "auto",
                                marginRight: "auto"
                            }} />
                        <p className="p-tag-contact">Share more information about your upcoming event!
                         or just say hi!
                        <br/>
                         I will be glad to help you!
                        </p>

                    </div>
                    <div className="contact-form">
                        <label className="form-label">Name: </label>
                        <input
                            onChange={this.handleInput}
                            name="name"
                            type="text"
                            className="form-input"
                            placeholder="Enter Name" />
                        <label className="form-label">E-mail: </label>
                        <input
                            onChange={this.handleInput}
                            name="name"
                            type="text"
                            className="form-input"
                            placeholder="Enter E-mail" />
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
                        <button className="btn btn-contact btn-dark btn-sm">Submit: </button>
                    </div>
                </div>
                <Footer />
            </div>
        )
    };
};

export default Contact;