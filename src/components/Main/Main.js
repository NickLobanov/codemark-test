import React from 'react';
import './Main.css';
import Card from '../Card/Card';
import SortCard from '../SortCard/SortCard';

function Main({cards, isSort, keywords, cardClick}) {

    return (
        <section className="main">
            {!isSort ? 
                <div className={`main__cards ${!isSort && 'main__cards_open'}`}>
                    {(cards.map(data => (
                    <Card key={data.keyword}
                    img={data.img}
                    alt={data.keyword}
                    cardClick={cardClick}
                    />
                    )))}
                </div> 
            :
            (keywords.map(data => (
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