import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Images from './Images1';
import axios from "axios";
import "./admin.css";
import { stringify } from 'querystring';


class Users extends Component {
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

    handleFullNameChange = (e) => {
        this.setState({
            idUser: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.idUser);
      }



    getUsers = () => {
        axios.get('/api/db/users')
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
        const url2 = {
            id: this.state.idUser
        };

        // Send an AJAX POST-request//
        axios.post("/api/db/favItemsDelete", url2)
            .then(function (data) {
            });
        alert("Client removed!");
        window.location.reload(); 
    }


    render() {
        const arr = this.state.users;

        return (
            <div className="container-admin">
                <div className='new-photo-admin'>
                    <h3><strong>Users</strong></h3>
                    <hr></hr>
                    <h5>Current clients in the system</h5>
                    <div>
                        <form onSubmit={this.handleClickDelete}>
                            <label htmlFor="id">Enter Id number to be deleted</label>
                            <input
                                type="number"
                                value={this.state.fullName}
                                onChange={this.handleFullNameChange}
                                name="id" />
                            <input type="submit" value="Submit" />
                        </form>
                    </div>

                </div>
                <div className="photo-container-admin">
                    <table>
                        {arr.map(user => (
                            <tr className="users-table-row">
                                <td>{user.id}</td>
                                <td><strong>{user.user_name}:</strong></td>
                                <td>{user.user_email}</td>
                                <td>{user.user_password}</td>
                                <button onClick={this.handleClickDelete}>delete</button>
                            </tr>
                        ))}
                    </table>

                </div>
            </div>
        );


    }

}

export default Users;