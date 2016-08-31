import React from 'react';
import './day-plan.css';

export default function DayPlan(props) {
    return (
        <div className='day-plan'>
            <div className='day-plan__content'>
                Need to revise today:
                <div className='day-plan__left'>{props.dayPlanLeft}</div>
            </div>
        </div>
    );
}
