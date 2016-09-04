import React from 'react';
import {Motion, spring} from 'react-motion';

export function calcStyle({ opacity, scale, y }) {
    return {
        position: 'fixed',
        opacity: opacity,
        WebkitTransform: `scale(${scale}) translateX(${y}px)`,
        transform: `scale(${scale}) translateX(${y}px)`,
    };
}

export default function HideCardAnim(props) {
    const defaultStyle = {
        opacity: 1,
        scale: 1,
        y: 0
    };
    const motion = {
        opacity: spring(0),
        scale: spring(0.7),
        y: spring(-600)
    };

    return (
        <Motion defaultStyle={defaultStyle} style={motion}>
            {params => <div style={calcStyle(params)}>{props.children}</div>}
        </Motion>
    )
}
