import { Controller as controller } from 'cerebral';
import model from 'cerebral/models/immutable';
import { chooseCard, storeCardIdInLocalStorage, restoreDayPlan, updateDayPlan, storeDayPlanInLocalStorage } from './actions';
import localStorageServices from './services/local-storage';
import data from '../data.js';

const dayPlan = 10;
const stateController = controller(model({
    cards: data.cards,
    index: -1,
    dayPlan: dayPlan,
    dayPlanLeft: dayPlan
}));

if (process.env.NODE_ENV === 'development') {
    stateController.addModules({
        devtools: require('cerebral-module-devtools')()
    });
}

stateController.addModules({
    localStorage: localStorageServices
});

stateController.addSignals({
    dayPlanRestored: { chain: [restoreDayPlan] },
    initialCardChosen: { chain: [chooseCard, storeCardIdInLocalStorage(Math.floor(data.cards.length / 1.5))] },
    cardChosen: { chain: [
            chooseCard, storeCardIdInLocalStorage(Math.ceil(data.cards.length / 2)),
            updateDayPlan, storeDayPlanInLocalStorage
        ]
    }
});

export default stateController;
