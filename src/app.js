import React from 'react';
import './app.css';
import Stack from './components/stack/stack';

export default function App(props) {
    return (
        <div className='app'>
            <div className='app__cards'>
                <div className='app__cell'>
                    <Stack />
                </div>
            </div>
        </div>
    );
};
