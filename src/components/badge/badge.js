import React from 'react';
import './badge.css';

export default function Badge(props) {
    return (
        <div className='badge'>
            <div className='badge__text'>
                { props.children }
            </div>
        </div>
    );
}
