import React from 'react';
import './card.css';
import Badge from '../badge/badge';

export function CardMeaning(props) {
    if (!props.content) return null;

    return (
        <div className='card__meaning'>{ props.content }</div>
    );
}

export function CardExamples(props) {
    if (!props.content) return null;

    return (
        <div>
            <Badge>Examples</Badge>
            <div className='card__section'>
                { props.content.map((c, i) => <p className='card__row' key={i}>{c}</p>) }
            </div>
        </div>
    );
}

export function CardCambridge(props) {
    if (!props.content) return null;

    return (
        <div>
            <Badge color='1'>Cambridge Dictionary</Badge>
            <div className='card__section card__cambridge'>
                <a className='card__url' href={props.content.url}>{props.content.url}</a>
                <img className='card__img' src={props.content.img} role='presentation' />
            </div>
        </div>
    );
}

export default function Card({ card }) {
    return (
        <div className='card'>
            <div className='card__container'>
                <div className='card__content'>
                    <div className='card__text'>
                        { card.text }
                    </div>
                    <CardMeaning content={card.meaning} />
                    <div className='card_sep' />
                    <CardExamples content={card.examples} />
                    <CardCambridge content={card.cambridge} />
                </div>
            </div>
        </div>
    );
}
