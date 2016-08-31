import React from 'react';
import { connect } from 'cerebral-view-react';
import './app.css';
import Stack from './components/stack/stack';

export default connect(
    { cards: 'cards', index: 'index', dayPlanLeft: 'dayPlanLeft' },
    { cardChosen: 'cardChosen' },
    function App(props) {
        return (
            <div className='app'>
                <div className='app__cards'>
                    <div className='app__cell'>
                        <Stack
                            cards={props.cards}
                            current={props.index}
                            select={props.cardChosen}
                            dayPlanLeft={props.dayPlanLeft}
                            />
                    </div>
                </div>
            </div>
        );
    }
);
