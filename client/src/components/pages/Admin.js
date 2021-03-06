import React, { Component } from 'react';
import axios from 'axios';
import { Route, Redirect, Switch, BrowserRouter as Router } from 'react-router-dom';
import Widget from '../PhotoWidgetUploader';

//Import components for admin site //

import './admin-Components/admin.css';
import WeddingsAdmin from './admin-Components/WeddingsAdmin';
import EngagementsAdmin from './admin-Components/EngagementsAdmin';
import PortraitsAdmin from './admin-Components/PortraitsAdmin';
import NavbarAdmin from './admin-Components/NavbarAdmin';
import SignUp from './admin-Components/SignUp';
import Welcome from './admin-Components/Welcome';
import Users from './admin-Components/Users';
import Messages from './admin-Components/Messages';
import Results from './admin-Components/Results';

class Admin extends Component {
    // Initialize the state
    state = {
        arrPhoto: [],
        name: ""
    }


    // Retrieves the list of items from the Express app
    getPhotos = () => {
        fetch('/api/get_photos/modern')
            .then(res => res.json())
            .then(arrPhoto => this.setState({ arrPhoto: arrPhoto.resources }));
        console.log(this.state.list);
    }

    handleClickDelete = (url) => {
        const url2 = {
            item_name: url,
        };

        // Send an AJAX POST-request//
        axios.post("/api/db/favItemsDelete", url2)
            .then(function (data) {
            });
    }

    handleClickCloud = (id) => {
        const imgId = {
            publicId: id
        }

        // Send an AJAX POST-request//
        axios.post('/api/cloud/public_id', imgId)
            .then(function (data) {
            });
    }

    render() {
        if(this.props.user && this.props.user.name === 'Admin'){
            return (
            
                <div>
                   <br/>
                <Router>
                    <div className='admin-body'>
                    <NavbarAdmin />
                    {/* <Widget/> */}
                        <Switch>
                        <Route path='/admin' component={Welcome} />
                        <Route exact path='/weddingsadmin' component={WeddingsAdmin} />
                        <Route exact path='/portraitsadmin' component={PortraitsAdmin} />
                        <Route exact path='/engagementsadmin' component={EngagementsAdmin} />
                        <Route path='/signup' component={SignUp} />
                        <Route path='/users' component={Users} />
                        <Route path='/messages' component={Messages}/>
                        <Route exact path="/results/:query" render={() => (<Results {...this.props} setUser={this.setUser} user={this.state.user}/>)} component={Results} />
                        </Switch>
    
                    </div>
                </Router>
                </div>
            )
            
        } else {
            return  (<Redirect to="/"/>);
        }
        
    }

}

export default Admin;