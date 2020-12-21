import React from 'react';
import './Main.css';
import Card from '../Card/Card';
import SortCard from '../SortCard/SortCard';

function Main({cards, isSort, keywards, cardClick}) {

    return (
        <section className="main">
            {!isSort ? (cards.map(data => (
                <Card key={data.keyword}
                img={data.img}
                alt={data.keyword}
                cardClick={cardClick}
                />
            ))) :
            (keywards.map(data => (
                <SortCard key={data}
                cards={cards}
                tag={data}
                cardClick={cardClick}
                />
            )))}
        </section>
    )
}

export default Main;