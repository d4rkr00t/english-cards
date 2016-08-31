import React from 'react';
import './day-plan.css';

export default function DayPlan(props) {
    return (
        <div className='day-plan'>
            Need to revise today:
            <div className='day-plan__left'>{props.dayPlanLeft}</div>
        </div>
    );
}
