import React from 'react';
import './badge.css';

export default function Badge(props) {
    const cls = ['badge'];

    if (props.color) cls.push('badge_color_' + props.color);

    return (
        <div className={cls.join(' ')}>
            <div className='badge__text'>
                { props.children }
            </div>
        </div>
    );
}
