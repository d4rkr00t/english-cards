import React from 'react';
import './stack.css';
import Card from '../card/card';
import NextButton from '../next-button/next-button';

export default function Stack(props) {
    const card = props.cards[props.current];

    if (!card) return (<div>Selecting a card!</div>);

    return (
        <div className='stack'>
            <div className='stack__cards'>
                <Card card={props.cards[props.current]} />
            </div>
            <div className='stack__controls'>
                <NextButton onClick={ () => props.select({ val: props.current }) } />
            </div>
        </div>
    );
}