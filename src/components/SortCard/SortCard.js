import React from 'react';
import './SortCard.css';
import Card from '../Card/Card';

function SortCard({ cards, tag, cardClick}) {

    console.log(cards)
    return (
        <section className="sort">
            <h2 className="sort__title">{tag}</h2>
            <div className="sort__wrap">
                {cards.map(data => (
                    <Card key={data.keyword}
                        img={data.img}
                        alt={data.keyword}
                        cardClick={cardClick}
                    />
                ))}
            </div>
        </section>
    )
}

export default SortCard;