import React, { Component, Redirect } from 'react';
// import AUTHAPI from '../utils/google-auth';
import axios from 'axios';
import Images from './Images1';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


class Results extends Component {
    state = {
        results: [],
        text: '',
        email: ''   
    }

    static propTypes = {
        match: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired
    }

// componentdidUpdate=()=>{
//     this.setState({email: this.props.location.state.value});
// }
    componentDidMount() {
        this.handleSubmit();
        this.setState({email: this.props.location.state.value});
        const { match, location, history } = this.props;
        // this.setState({email: this.props.location.state.value});
    }

    

    handleClick = (url) => {
        const fav = {
            user_email: this.state.email,
            item_name: url
            // user_email: this.state.email
        };
        // Send an AJAX POST-request//
        axios.post("/api/db/favItems", fav)
            .then(function (data) {
                console.log("Added to favorites")
                
                alert("Added to favorites");
            });
            
      
    }

    handleSubmit = (event) => {
        // event.preventDefault();
            
        const userSearch = {
            value: this.props.match.params.query
        }
        console.log(userSearch.value);
        axios.post('/api/cloud/user/search', userSearch)
            .then(res => {
                console.log(res);
                this.setState({ results: res.data.resources });
                
            })
           
    }

//To delete file from cloud//
    handleClickCloud = (id) => {
        const imgId = {
            publicId: id
        }

        // Send an AJAX POST-request//
        axios.post('/api/cloud/public_id', imgId)
            .then(function (data) {
            });

            alert('Photo deleted');
            window.location.reload(); 
    }
    render() {
        
        const img = this.state.results;
        return (
            
            <div className="container-admin">
                <div className='new-photo-admin'>
                    <h3>New Photo Upload for <strong>Modern</strong></h3>
                    <hr></hr>
                    <div className="back-btn-admin">
                    <Link to="/admin"
                        style={{ textDecoration: "none", color: "black" }}>
                        <button className="btn-outline-dark btn-sm btn-back">Back</button>
                    </Link> 
                    </div>
                </div>
                <div className="photo-container-admin">
                    {img.map(images => (
                        <Images
                            key={images.public_id}
                            url={images.url}
                            id={images.public_id}
                            handleClickCloud={this.handleClickCloud}
                        />))}
                </div>
            </div>
        );
    }
}
export default Results;