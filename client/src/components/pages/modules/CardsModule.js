import React from "react";
import Card1 from './Card1';
import Card2 from './Card2';
import Card3 from './Card3';
import './cards.css'

function CardsModule (props){
    return(
    <div className="container-fluid cards-div">
        <Card1 />
        <Card2 />
        <Card3 />
    </div>)

}

export default CardsModule;