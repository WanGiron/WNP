import React, { Component } from 'react';
import LOCALAPI from '../../../utils/local-auth';
import { Redirect } from 'react-router-dom';
import './admin.css';


class SignUp extends Component {
    state = {
        name: "",
        email: "",
        password: "",
        errorMessage: null
    }

    handleInputChange = event => {
        let name = event.target.name;
        let value = event.target.value;

        //setState
        this.setState({
            [name]: value
        })
    }

    // || this.state.email || this.state.password
    handleFormSubmit = event => {
        event.preventDefault();
        console.log(event.target);
        // validation inputs//
        if (this.state.name === "" || this.state.password === "" || this.state.email === "") {
            alert(null + "Please fill-out all entries");

        }
        else {
            LOCALAPI.signupUser({
                user_name: this.state.name,
                user_email: this.state.email,
                user_password: this.state.password
            })
        }

    }

    render() {
        if (this.props.user && this.props.user.email) {
            return <Redirect to="/" />;
        }
        return (

            <div class="container ">
                <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
                    <div class="card card-signin my-5 bg-light">
                        <div class="card-body">
                            <h5 class="card-title text-center header">Add new client</h5>
                            <form className="form-signin" method="post">
                                <label htmlFor="name">Name:</label>
                                <input
                                    value={this.state.name}
                                    onChange={this.handleInputChange}
                                    name="name"
                                    type="text"
                                    className="form-control"
                                    placeholder="Type in name"
                                    id="name"
                                    required />
                                    <hr/>
                                <label htmlFor="email">User name:</label>
                                <input
                                    value={this.state.email}
                                    onChange={this.handleInputChange}
                                    name="email"
                                    type="text"
                                    className="form-control"
                                    placeholder="Type in Email"
                                    id="email"
                                    required />
                                <hr/>
                                <label htmlFor="password" >Password:</label>
                                <input
                                    value={this.state.password}
                                    onChange={this.handleInputChange}
                                    name="password"
                                    type="password"
                                    className="form-control"
                                    placeholder="Type in Password"
                                    id="password"
                                    required />
                                     <hr/>
                                <input type="Submit" onClick={this.handleFormSubmit} className="btn btn-dark bt-sm" value="Submit" />
                            </form>
                            {this.state.errorMessage}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SignUp;