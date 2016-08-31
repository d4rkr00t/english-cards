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
    if (!props.children) return null;
    return <div>{ props.children.map((item, i) => <p className='card__row' key={i}>{item}</p>) }</div>;
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
    if (!props.children) return null;
    return (
        <div className='card__section'>
            <Badge>Examples</Badge>
            <CardRowList>{ props.children }</CardRowList>
        </div>
    );
}

export function CardCambridgeItemSense(props) {
    if (!props.children) return null;
    return (
        <CardSubsection>
            <CardSubtitle>{ props.children.title }</CardSubtitle>
            { props.children.definitions.map((item, i) => <CardDef key={i}>{item}</CardDef>) }
        </CardSubsection>
    );
}

export function CardCambridgeItem(props) {
    if (!props.children) return null;
    return (
        <CardSubsection>
            <CardSubtitle>{ props.children.partOfSpeach }</CardSubtitle>
            { props.children.senses.map((item, i) => <CardCambridgeItemSense key={i}>{item}</CardCambridgeItemSense>) }
        </CardSubsection>
    );
}

export function CardCambridge(props) {
    if (!props.children) return null;
    return (
        <div className='card__section card__cambridge'>
            <Badge color='1'>Cambridge Dictionary</Badge>
            <div>
                <a className='card__url' href={props.children.url}>{props.children.url}</a>
                { props.children.items.map((item, i) => <CardCambridgeItem key={i}>{item}</CardCambridgeItem>) }
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
                    <div className='card__text'>{ card.text }</div>
                    <CardMeaning>{card.meaning}</CardMeaning>
                    <CardSep enabled={isCambridgeSep} />
                    <CardCambridge>{card.cambridge}</CardCambridge>
                    <CardSep enabled={isExamplesSep} />
                    <CardExamples>{card.examples}</CardExamples>
                </div>
            </div>
        </div>
    );
}
