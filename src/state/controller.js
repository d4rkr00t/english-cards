import { Controller as controller } from 'cerebral';
import model from 'cerebral/models/immutable';
import localStorageServices from './services/local-storage';
import {
    loadCards, addCardsToState, chooseCard, storeCardIdInLocalStorage, cardSwiped,
    restoreDayPlan, updateDayPlan, storeDayPlanInLocalStorage
} from './actions';

const cardsUrl = 'data.json';
const dayPlan = 10;
const stateController = controller(model({
    cards: [],
    index: -1,
    historyLength: dayPlan,
    dayPlan: dayPlan,
    dayPlanLeft: dayPlan
}));

const chooseCardChain = [
    chooseCard, storeCardIdInLocalStorage,
    updateDayPlan, storeDayPlanInLocalStorage
];

if (process.env.NODE_ENV === 'development') {
    stateController.addModules({
        devtools: require('cerebral-module-devtools')()
    });
}

stateController.addModules({
    localStorage: localStorageServices
});

stateController.addSignals({
    cardsLoaded: {
        chain: [
            loadCards(cardsUrl), {
                success: [addCardsToState, chooseCard],
                error: []
            }
        ]
    },
    dayPlanRestored: { chain: [restoreDayPlan] },
    cardChosen: { chain: chooseCardChain },
    cardSwiped: {
        chain: [cardSwiped, { success: chooseCardChain }]
    }
});

export default stateController;
