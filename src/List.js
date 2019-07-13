import React from 'react';
import './List.css';
import Card from './Card';
function List(props){
    const cards = props.cards;
    const listCard = cards.map((card) =>
        <Card card={card}></Card>
    );
    return(
        <section className="List">
            <header className="List-header">
                {props.header}
            </header>
            <div className="List-cards">
            {props.cards.map((card) =>
          <Card
            key={card.id}
            title={card.title}
            content={card.content}
          />
        )}
            </div>
        </section>
    );
}

export  default List;