import React from 'react';
import ImgContact from './WNP_9594.jpg';
import Footer from './Footer';
import axios from 'axios';
import './contact.css'

class Contact extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            phoneNumber: '',
            message: ''
    };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }


    // To get values from input tags //
    //then assign state //
    handleInputChange = event => {
        let name = event.target.name;
        let value = event.target.value;
        // let email = event.target.email;
        // let phoneNumber = event.target.phoneNumber;
        // let message = event.target.message;
        //setState
        this.setState({
            [name]: value
        })
    }

    handleChange(event) {
        this.setState({
            name: event.target.value,
            email: event.target.value,
            phoneNumber: event.target.value,
            message: event.target.value
        });
      }



    // To send data to data base //
    handleSubmit(event) {  
        event.preventDefault();
        const newMessge = {
            user_name: this.state.name,
            user_email: this.state.email,
            phone_number: this.state.phoneNumber,
            user_message: this.state.message
        }

        axios.post('/api/db/contact-me', newMessge)
        .then(function (data) {
            alert('Thank you!');
            window.location.reload(); 
        });
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
                            value={this.state.name}
                            onChange={this.handleInputChange}
                            name="name"
                            type="text"
                            className="form-input"
                            placeholder="Enter Name" />
                        <label className="form-label">E-mail: </label>
                        <input
                            value={this.state.email}
                            onChange={this.handleInputChange}
                            name="email"
                            type="text"
                            className="form-input"
                            placeholder="Enter E-mail" />
                        <label className="form-label">Phone Number: </label>
                        <input
                            value={this.state.phoneNumber}
                            onChange={this.handleInputChange}
                            name="phoneNumber"
                            type="text"
                            className="form-input"
                            placeholder="Enter Phone Number" />
                        <label className="form-label">Message: </label>
                        <input
                            value={this.state.message}
                            onChange={this.handleInputChange}
                            name="message"
                            type="text"
                            className="form-input"
                            placeholder="Message"/>
                        <button className="btn btn-contact btn-dark btn-sm" onClick={this.handleSubmit}>Submit</button>
                    </div>
                </div>
                <Footer />
            </div>
        )
    };
};

export default Contact;