import React from 'react';
import './Main.css';
import Card from '../Card/Card';

function Main({cards}) {

    console.log(cards)

    return (
        <section className="main">
            {cards.map(data => (
                <Card key={data.keyword}
                img={data.img}
                alt={data.keyword}
                />
            ))}
        </section>
    )
}

export default Main;