import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Images from './Images1';
import axios from "axios";
import "./admin.css";


class Users extends Component {
    // Initialize the state
    state = {
        users: []
    }

    // Fetch the list on first mount
    componentDidMount = () => {
        // const { modern } = this.props.match.params;
        this.getUsers();
        // this.setState({email: this.props.user.email});
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
    handleClickDelete = (url) => {
        const url2 = {
            item_name: url,
        };
        // Send an AJAX POST-request//
        axios.post("/api/db/favItemsDelete", url2)
            .then(function (data) {
            });
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
                    <div className="back-btn-admin">

                    </div>

                </div>
                <div className="photo-container-admin">

                    {/* {arr.map(user => (
                     <div className="alert-warning">
                    <ul>
                        <h3>{user.user_name}</h3>
                        <li>{user.user_email}</li>
                        <li>{user.user_password}</li>
                    </ul>
                    </div>))} */}
                    <table>
                        {arr.map(user => (
                            <tr className="users-table-row">
                                <td><strong>{user.user_name}:</strong></td>
                                <td>{user.user_email}</td>
                                <td>{user.user_password}</td>
                            </tr>
                        ))}
                    </table>

                </div>
            </div>
        );


    }

}

export default Users;