import React from 'react';
import { Link } from 'react-router-dom';
// import "./Images.css";

function Images(props) {
    return (
        <div className="img-div">
            <img  className="img-btn" onClick={() => props.handleClick(props.url)} src={props.url} />

            {(props.email !== undefined) ? <a href="#" style={{ textDecoration: "none", fontSize: "25px", marginRight: "10px" }}
                className="heart" onClick={() => props.handleClick(props.url)}
            >&#x2764;</a> : ""}
            {/* <img src={props.url} className='photos' alt={props.url}></img> */}
            {/* <button className='image-button' onClick={() => props.handleClick(props.url)}>Favorite</button> */}
        </div>
    )
}

export default Images;