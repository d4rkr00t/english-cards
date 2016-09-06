import React from 'react';
import {Motion, spring} from 'react-motion';
import './animation.css';

export function calcStyle({ opacity, scale }) {
    return {
        opacity: opacity,
        WebkitTransform: `scale(${scale})`,
        transform: `scale(${scale}`,
    };
}

export default function ShowCardAnim(props) {
    const defaultStyle = {
        opacity: 0,
        scale: 0.7,
    };
    const motion = {
        opacity: spring(1),
        scale: spring(1)
    };

    return (
        <Motion defaultStyle={defaultStyle} style={motion}>
            {params => <div style={calcStyle(params)} className='animation'>{props.children}</div>}
        </Motion>
    )
}
