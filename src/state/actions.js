export function loadCards(url) {
    const loadCardsAction = function({ output }) {
        fetch(url)
            .then(res => res.json())
            .then(output.success)
            .catch(output.error);
    };
    loadCardsAction.async = true;
    return loadCardsAction;
}

export function addCardsToState({ input, state }) {
    state.set('cards', input.cards);
    state.set('historyLength', Math.floor(input.cards.length / 1.5));
}

export function storeCardIdInLocalStorage({ input, state, services }) {
    const current = input.val;
    const items = services.localStorage.get('cards') || [];
    items.unshift(current);
    services.localStorage.set('cards', items.slice(0, state.get('historyLength')));
}

export function storeDayPlanInLocalStorage({ input, services }) {
    services.localStorage.set('day-plan', { date: input.date, left: input.left });
}

export function chooseCard({ input, state, output, services }) {
    let idx = input.val;
    const cards= state.get('cards');
    const items = services.localStorage.get('cards') || [];

    if (idx === undefined) {
        idx = input.val = -1;
    }

    while (idx === input.val || items.indexOf(idx) !== -1) {
        idx = Math.floor(Math.random() * cards.length);
    }

    state.set('prevIndex', input.val);
    state.set('index', idx);
    return output({ val: idx });
}

export function _getDate() {
    const date = new Date();
    return `${date.getDay()}.${date.getMonth()}.${date.getFullYear()}`;
}

export function restoreDayPlan({ state, services }) {
    const plan = services.localStorage.get('day-plan') || {};
    if (plan.date === _getDate()) {
        state.set('dayPlanLeft', plan.left);
    }
}

export function updateDayPlan({ state, services, output }) {
    const plan = services.localStorage.get('day-plan') || {};
    const date = _getDate();
    const left = plan.date === date ? plan.left - 1 : state.get('dayPlan') - 1;
    state.set('dayPlanLeft', left < 0 ? 0 : left);
    output({ date: date, left: left < 0 ? 0 : left });
}

export function cardSwiped({ state, input, output }) {
    const RIGHT_TO_LEFT = 2;
    if (input.dir === RIGHT_TO_LEFT) output.success({ val: state.get('index') });
}
