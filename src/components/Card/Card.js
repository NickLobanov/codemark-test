import React from 'react';
import './Card.css';

function Card({ img, alt, cardClick}) {

    const imgClick = () => {
        cardClick(alt)
    }

    return (
        <div className="card">
            <img src={img} alt={alt} className="card__image" onClick={imgClick}/>
        </div>
    )
}

export default Card;