import React from 'react';
import './SortCard.css';
import Card from '../Card/Card';

function SortCard({ cards, tag, cardClick}) {

    const sortCards = cards.filter(data => data.keyword === tag)

    return (
        <section className="sort">
            <h2 className="sort__title">{tag}</h2>
            <div className="sort__wrap">
                {sortCards.map(data => (
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