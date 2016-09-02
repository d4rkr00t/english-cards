import React from 'react';
import ReactDOM from 'react-dom';
import { Container } from 'cerebral-view-react';
import controller from './state/controller';
import App from './app';
import './index.css';

const cardChosen = controller.getSignals('cardChosen');
const cardsLoaded = controller.getSignals('cardsLoaded');
const dayPlanRestored = controller.getSignals('dayPlanRestored');

cardsLoaded();
dayPlanRestored();

ReactDOM.render(
  <Container controller={controller}><App/></Container>,
  document.getElementById('root')
);

document.addEventListener('keydown', function (e) {
    if (e.keyCode === 39) {
        cardChosen({ val: controller.get('index') });
    }
});
