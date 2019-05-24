import React, { Component, Redirect } from 'react';
// import AUTHAPI from '../utils/google-auth';
import axios from 'axios';
import Images from './pages/modules/Images1';
import { Link } from 'react-router-dom';

class PersonalAccount extends Component {

    state = {
        item: [],
        name: this.props.user.name
    }

    componentDidMount() {
        this.getUsers();
    }
    

    getUsers = () => {
        axios.get("/api/db/favItems/users")
            .then(response => {
                console.log(response.data);
                let item = response.data;
                this.setState({ item: item })
            })
        // console.log(this.state.item.dataValues);
    }

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
        // const path = "/api/db/favItems/users/";
        // path += this.props.user.email;
        const favs = this.state.item;
        return (
            <div>
                {this.props.user.email ? (
                    //  ${this.props.user.email}
                    <div>
                        <h3>Welcome!!!</h3>
                        <div className="container">
                        {favs.map(favsUrl => (
                            <Images key={favsUrl.id}
                                url={favsUrl.item_name}
                                handleClickDelete={this.handleClickDelete} />
                        ))}
                        </div>
                    </div>
                ) : (<p>{`Please sign in at `} <Link to="/">Homepage</Link> </p>)}
            </div>
        );
    }
}

export default PersonalAccount;