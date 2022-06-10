import React from 'react';
import './Burger.css';

const Burger = props => {
    let element = [];
    for (let i = 0; i < props.ingredients.count; i++) {
        element[i] = (
            <div
                key={i}
                className={props.ingredients.name}
            />)
    }
    return (
        <>
            {element}
        </>
    )
};

export default Burger;