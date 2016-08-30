import React from 'react';
import './day-plan.css';

export default function DayPlan(props) {
    if (props.dayPlanLeft === 0) return null;

    return (
        <div className='day-plan'>
            Need to revise today:
            <div className='day-plan__left'>{props.dayPlanLeft}</div>
        </div>
    );
}
