import React from 'react';
import './Card.css';

function Card({ img, tag }) {
    return (
        <div className="card">
            <img src={img} alt={tag} className="card__image"/>
        </div>
    )
}

export default Card;