import React from 'react';
import './Main.css';
import Card from '../Card/Card';
import SortCard from '../SortCard/SortCard';

function Main({cards, isSort, keywards}) {

    return (
        <section className="main">
            {!isSort ? (cards.map(data => (
                <Card key={data.keyword}
                img={data.img}
                alt={data.keyword}
                />
            ))) :
            (keywards.map(data => (
                <SortCard key={data}
                cards={cards}
                tag={data}
                />
            )))}
        </section>
    )
}

export default Main;