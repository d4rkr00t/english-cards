export function storeCardIdInLocalStorage(capacity) {
    return function({ input, state, services }) {
        const current = input.val;
        const items = services.localStorage.get('cards') || [];
        items.unshift(current);
        services.localStorage.set('cards', items.slice(0, capacity));
    }
}

export function storeDayPlanInLocalStorage({ input, state, services }) {
    services.localStorage.set('day-plan', { date: input.date, left: input.left });
}

export function chooseCard({ input, state, output, services }) {
    let idx = input.val;
    const cards= state.get('cards');
    const items = services.localStorage.get('cards') || [];

    while (idx === input.val || items.indexOf(idx) !== -1) {
        idx = Math.floor(Math.random() * cards.length);
    }

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
