export function chooseCard({ input, state }) {
    let idx = input.val;
    const cards= state.get('cards');

    while (idx === input.val) {
        idx = Math.floor(Math.random() * cards.length)
    }

    state.set('index', idx);
}
