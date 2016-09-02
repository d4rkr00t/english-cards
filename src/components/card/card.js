import React from 'react';
import './card.css';
import Badge from '../badge/badge';

export function CardSep(props) {
    if (!props.enabled) return null;
    return <div className='card_sep' />;
}

export function CardSubsection(props) {
    if (!props.children) return null;
    return <div className='card__subsection'>{props.children}</div>;
}

export function CardSubtitle(props) {
    if (!props.children) return null;
    return <div className='card__subtitle'>{props.children}</div>;
}

export function CardMeaning(props) {
    if (!props.children) return null;
    return <div className='card__meaning'>{ props.children }</div>;
}

export function CardRowList(props) {
    if (!props.children || !props.children.length) return null;
    return (
        <ul className='card__row-list'>
            { props.children.map((item, i) => <li className='card__row' key={i}>{item}</li>) }
        </ul>
    );
}

export function CardDef(props) {
    if (!props.children) return null;
    return (
        <div className='card__def'>
            <CardMeaning>{ props.children.meaning }</CardMeaning>
            <CardRowList>{ props.children.examples }</CardRowList>
        </div>
    );
}

export function CardExamples(props) {
    if (!props.children || !props.children.length) return null;
    return (
        <CardSubsection>
            <CardSubtitle>Extra Examples</CardSubtitle>
            <CardRowList>{ props.children }</CardRowList>
        </CardSubsection>
    );
}

export function CardItem(props) {
    if (!props.children) return null;
    return (
        <CardSubsection>
            <Badge>{ props.children.partOfSpeach }</Badge>
            { props.children.definitions.map((item, i) => <CardDef key={i}>{item}</CardDef>) }
            <CardExamples>{ props.children.examples }</CardExamples>
        </CardSubsection>
    );
}

export function CardItems(props) {
    if (!props.children) return null;

    return (
        <div className='card__section'>
            { (props.children || []).map((item, i) => <CardItem key={i}>{item}</CardItem>) }
        </div>
    );
}


export function CardCambridge(props) {
    if (!props.children) return null;
    return (
        <div className='card__section'>
            <Badge color='1'>Cambridge Dictionary</Badge>
            <div>
                <a className='card__url' href={props.children}>{props.children}</a>
            </div>
        </div>
    );
}

export default function Card({ card }) {
    const isCambridgeSep = Boolean(card.cambridge);
    return (
        <div className='card'>
            <div className='card__container'>
                <div className='card__content'>
                    <div className='card__text'>{ card.text }</div>
                    <CardSep enabled />
                    <CardItems>{card.items}</CardItems>
                    <CardSep enabled={isCambridgeSep} />
                    <CardCambridge>{card.cambridge}</CardCambridge>
                </div>
            </div>
        </div>
    );
}
