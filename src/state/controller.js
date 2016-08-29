import { Controller as controller } from 'cerebral';
import model from 'cerebral/models/immutable';
import { chooseCard } from './actions';
import data from '../data.js';

const stateController = controller(model({
    cards: data.cards,
    index: -1
}));

if (process.env.NODE_ENV === 'development') {
    stateController.addModules({
        devtools: require('cerebral-module-devtools')()
    });
}

stateController.addSignals({
    cardChosen: { chain: [ chooseCard ] }
});

export default stateController;
