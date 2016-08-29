import React from 'react';
import './next-button.css';

export default function NextButton(props) {
    return (
        <button className='next-button' onClick={ props.onClick }>Next Card</button>
    );
}
