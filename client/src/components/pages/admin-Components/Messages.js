import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Images from './Images1';
import axios from "axios";
import "./admin.css";
import { stringify } from 'querystring';


class Messages extends Component {
    // Initialize the state
    state = {
        users: [],
    }

    // Fetch the list on first mount
    componentDidMount = () => {
        // const { modern } = this.props.match.params;
        this.getUsers();
        // this.setState({email: this.props.user.email});
    }

    handleId = (e) => {
        this.setState({
            idUser: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.idUser);
      }



    getUsers = () => {
        axios.get('/api/db/get-messages')
            .then(res => {
                this.setState({ users: res.data });
                console.log(res.data);
                // let result = res.data;
                console.log(this.state.users);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    //To delete users from data base// on progress...
    handleClickDelete = () => {
        const eraseMessage = {
            id: this.state.idUser
        };

        // Send an AJAX POST-request//
        axios.post("/api/db/message-delete", eraseMessage)
            .then(function (data) {
            });
        alert("Message erased!");
        window.location.reload(); 
    }


    render() {
        const arr = this.state.users;

        return (
            <div className="container-admin">
                <div className='new-photo-admin'>
                    <h3><strong>Messages</strong></h3>
                    <hr></hr>
                    <h5>Messages from site</h5>
                    <div>
                        <form onSubmit={this.handleClickDelete}
                        className="form-group form-inline">
                            <label htmlFor="id">Enter Id number to be deleted</label>
                            <input
                                className="input-messages"
                                type="number"
                                value={this.state.idUser}
                                onChange={this.handleId}
                                name="id"
                                margin={{
                                    padding:"4px"
                                }} />
                            <button type="submit" className="btn btn-dark btn-sm" value="Submit">Submit</button>
                        </form>
                    </div>

                </div>
                <div className="photo-container-admin">
                    <table>
                        <tbody>
                        <tr>
                            <td><h4>ID</h4></td>
                            <td><h4>Name</h4></td>
                            <td><h4>Email</h4></td>
                            <td><h4>Phone Number</h4></td>
                            <td><h4>Message</h4></td>
                        </tr>
                        {arr.map(user => (
                                <tr className="users-table-row" key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.user_name}</td>
                                <td>{user.user_email}</td>
                                <td>{user.phone_number}</td>
                                <td>{user.user_message}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>

                </div>
            </div>
        );


    }

}

export default Messages;