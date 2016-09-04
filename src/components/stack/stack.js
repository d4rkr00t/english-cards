import React from 'react';
import { connect } from 'cerebral-view-react';
import './stack.css';
import Card from '../card/card';

export default connect(
    { cards: 'cards', index: 'index', prevIndex: 'prevIndex',  dayPlanLeft: 'dayPlanLeft' },
    { cardChosen: 'cardChosen', cardSwiped: 'cardSwiped' },
    function Stack(props) {
        const card = props.cards[props.index];
        const prevCard = props.prevIndex !== null && props.cards[props.prevIndex];
        if (!card) return (<div>Selecting a card!</div>);

        return (
            <div className='stack'>
                { prevCard
                    && <Card dayPlanLeft={props.dayPlanLeft} card={prevCard} direction='hide' key={props.prevIndex} />
                }

                <Card
                    dayPlanLeft={props.dayPlanLeft}
                    card={props.cards[props.index]}
                    index={props.index}
                    cardChosen={props.cardChosen}
                    cardSwiped={props.cardSwiped}
                    direction='show'
                    key={props.index} />
            </div>
        );
    }
);
