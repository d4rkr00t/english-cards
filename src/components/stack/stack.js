import React from 'react';
import { connect } from 'cerebral-view-react';
import './stack.css';
import Card from '../card/card';
import NextButton from '../next-button/next-button';
import DayPlan from '../day-plan/day-plan';

export default connect(
    { cards: 'cards', index: 'index', dayPlanLeft: 'dayPlanLeft' },
    { cardChosen: 'cardChosen' },
    function Stack(props) {
        const card = props.cards[props.index];
        if (!card) return (<div>Selecting a card!</div>);
        return (
            <div className='stack'>
                <DayPlan dayPlanLeft={props.dayPlanLeft} />
                <div className='stack__cards'>
                    <Card card={props.cards[props.index]} />
                </div>
                <div className='stack__controls'>
                    <NextButton onClick={ () => props.cardChosen({ val: props.index }) } />
                </div>
            </div>
        );
    }
);
