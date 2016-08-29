import React from 'react';
import { connect } from 'cerebral-view-react';

import Stack from './components/stack/stack';

export default connect(
    { cards: 'cards', index: 'index' },
    { cardChosen: 'cardChosen' },
    function App(props) {
        return (
            <div>
                <Stack cards={props.cards} current={props.index} select={props.cardChosen}/>
            </div>
        );
    }
);
