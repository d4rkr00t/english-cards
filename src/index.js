import React from 'react';
import { Container } from 'cerebral-view-react';
import controller from './state/controller';
import App from './app';
import './index.css';

const cardChosen = controller.getSignals('cardChosen');
const cardsLoaded = controller.getSignals('cardsLoaded');
const dayPlanRestored = controller.getSignals('dayPlanRestored');

cardsLoaded();
dayPlanRestored();

document.addEventListener('keydown', function (e) {
    if (e.keyCode === 39) {
        cardChosen({ val: controller.get('index') });
    }
});

export default function EntryPoint() {
    return <Container controller={controller}><App/></Container>;
}
