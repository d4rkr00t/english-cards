import React from 'react';
import { connect } from 'cerebral-view-react';
import './app.css';
import Stack from './components/stack/stack';
import DayPlan from './components/day-plan/day-plan';

export default connect(
    { cards: 'cards', index: 'index', dayPlanLeft: 'dayPlanLeft' },
    { cardChosen: 'cardChosen' },
    function App(props) {
        return (
            <div className='app'>
                <div className='app__top'>
                    <DayPlan dayPlanLeft={props.dayPlanLeft} />
                </div>
                <div className='app__cards'>
                    <div className='app__cell'>
                        <Stack cards={props.cards} current={props.index} select={props.cardChosen}/>
                    </div>
                </div>
            </div>
        );
    }
);
