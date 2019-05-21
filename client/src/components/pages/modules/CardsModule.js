import React from "react";
import Card1 from './Card1';
import Card2 from './Card2';
import Card3 from './Card3';
import './cards.css'

function CardsModule (props){
    return(
    <div className="container-fluid cards-div">
    <div className="row">
        <Card1 />
        <Card2 />
        <Card3 />
        </div>
        <div className="container-fluid row-btn">
        <div className="row">
            <button className="btn btn-outline-dark btn-card">More info</button>
            <button className="btn btn-outline-dark btn-card">Get to know me</button>
            <button className="btn btn-outline-dark btn-card">Send me a message</button>
            </div>
        </div>
    </div>)

}

export default CardsModule;