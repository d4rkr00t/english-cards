import React from 'react';
import ReactDOM from 'react-dom';
import { Container } from 'cerebral-view-react';
import controller from './state/controller';
import App from './app';
import './index.css';

const cardChosen = controller.getSignals('cardChosen');
cardChosen({ val: -1 });

ReactDOM.render(
  <Container controller={controller}><App/></Container>,
  document.getElementById('root')
);
