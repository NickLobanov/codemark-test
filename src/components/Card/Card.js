import React from 'react';
import './Card.css';

function Card({ firstImg, secondImg, alt, cardClick}) {

    const imgClick = () => {
        cardClick(alt)
    }

    return (
        <div className="card">
            {secondImg === undefined ? 
                <img src={firstImg} alt={alt} className="card__image" onClick={imgClick}/>
                :
                <div className="card__wrap">
                    <img src={firstImg} alt={alt} className="card__image card__image_unite" onClick={imgClick}/>
                    <img src={secondImg} alt={alt} className="card__image card__image_unite" onClick={imgClick}/>
                </div>
            }
            
        </div>
    )
}

export default Card;