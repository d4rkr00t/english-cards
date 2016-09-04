import React from 'react';
import Hammer from 'react-hammerjs';
import './card.css';
import DayPlan from '../day-plan/day-plan';
import NextButton from '../next-button/next-button';
import Badge from '../badge/badge';
import HideCardAnim from '../animation/hide-card';
import ShowCardAnim from '../animation/show-card';

export function CardSep(props) {
    if (!props.enabled) return null;
    return <div className='card__sep' />;
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

export default function Card({ card, dayPlanLeft, cardChosen, cardSwiped, index, direction }) {
    const isCambridgeSep = Boolean(card.cambridge);
    const AnimHandler = direction === 'hide' ? HideCardAnim : ShowCardAnim;
    const cls = ['card'];
    if (direction === 'hide') cls.push('card_prev');
    return (
        <AnimHandler>
            <Hammer onSwipe={ (e) => cardSwiped({ dir: e.direction }) }>
                <div className={cls.join(' ')}>
                    <div className='card__container'>
                        <DayPlan dayPlanLeft={dayPlanLeft} />
                        <div className='card__content'>
                            <div className='card__text'>{ card.text }</div>
                            <CardSep enabled />
                            <CardItems>{card.items}</CardItems>
                            <CardSep enabled={isCambridgeSep} />
                            <CardCambridge>{card.cambridge}</CardCambridge>
                        </div>
                    </div>
                    <div className='card__controls'>
                        <NextButton onClick={ () => cardChosen({ val: index }) } />
                    </div>
                </div>
            </Hammer>
        </AnimHandler>
    );
}
