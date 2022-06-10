import React from 'react';
import './Ingredient.css'
const Ingredient = (props) => {
    return (
        <div className="Ingredient">
            <img className="list" onClick={props.onIncreaseClick} src={props.image} alt="#"/>
            <div className="Block">
            <h1 className="name">{props.name}</h1>
            <p style={{marginLeft: "20px"}}>{props.price} KGS</p>
            </div>
            <p className="count">x{props.count}</p>
            <button className="Decrease" onClick={props.onDecrease}>&#10008;</button>
            <hr className="hr"></hr>
        </div>
    );
};

export default Ingredient;