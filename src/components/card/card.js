import React from 'react';
import './card.css';
import Badge from '../badge/badge';

export default function Card({ card }) {
    return (
        <div className='card'>
            <div className='card__container'>
                <div className='card__content'>
                    <div className='card__text'>
                        { card.text }
                    </div>
                    <div className='card__meaning'>
                        { card.meaning }
                    </div>
                    <div className='card_sep' />
                    <Badge>Examples</Badge>
                    <div className='card__examples'>
                        { card.examples.map((c, i) => <p className='card__row' key={i}>{c}</p>) }
                    </div>
                </div>
            </div>
        </div>
    );
}
