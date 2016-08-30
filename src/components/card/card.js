import React from 'react';
import './card.css';
import Badge from '../badge/badge';

export function CardSep(props) {
    if (!props.enabled) return null;
    return <div className='card_sep' />;
}

export function CardImg(props) {
    if (!props.src) return null;
    return <img className='card__img' src={props.src} role='presentation' />;
}

export function CardMeaning(props) {
    if (!props.content) return null;
    return <div className='card__meaning'>{ props.content }</div>;
}

export function CardExamples(props) {
    if (!props.content) return null;

    return (
        <div className='card__section'>
            <Badge>Examples</Badge>
            <div>
                { props.content.map((c, i) => <p className='card__row' key={i}>{c}</p>) }
            </div>
        </div>
    );
}

export function CardCambridgeItemSenseDef(props) {
    return (
        <div className='card__def'>
            <div className='card__meaning'>{ props.content.meaning }</div>
            { props.content.examples.map((c, i) => <p className='card__row' key={i}>{c}</p>) }
        </div>
    );
}

export function CardCambridgeItemSense(props) {
    return (
        <div className='card__sense'>
            <div className='card__sense-title'>{ props.content.title }</div>
            { props.content.definitions.map((c, i) => <CardCambridgeItemSenseDef content={c} key={i} />) }
        </div>
    );
}

export function CardCambridgeItem(props) {
    return (
        <div className='card__subsection'>
            <div className='card__subtitle'>{ props.content.partOfSpeach }</div>
            { props.content.senses.map((item, i) => <CardCambridgeItemSense content={item} key={i} />) }
        </div>
    );
}

export function CardCambridge(props) {
    if (!props.content) return null;

    return (
        <div className='card__section card__cambridge'>
            <Badge color='1'>Cambridge Dictionary</Badge>
            <div>
                <a className='card__url' href={props.content.url}>{props.content.url}</a>
                { props.content.items.map((item, i) => <CardCambridgeItem content={item} key={i} />) }
            </div>
        </div>
    );
}

export default function Card({ card }) {
    const isCambridgeSep = Boolean(card.cambridge);
    const isExamplesSep = Boolean(card.examples);

    return (
        <div className='card'>
            <div className='card__container'>
                <div className='card__content'>
                    <div className='card__text'>
                        { card.text }
                    </div>
                    <CardMeaning content={card.meaning} />
                    <CardSep enabled={isCambridgeSep} />
                    <CardCambridge content={card.cambridge} />
                    <CardSep enabled={isExamplesSep} />
                    <CardExamples content={card.examples} />
                </div>
            </div>
        </div>
    );
}
