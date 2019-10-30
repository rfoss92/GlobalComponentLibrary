import React from 'react';

const SVG = ({
                 style = {},
                 fill = '#154f6c',
                 fill2 = '#fff',
                 fill3 = 'none',
                 width = '100%',
                 height = '100%',
                 className = "IconChevronLeft",
                 viewBox = "0 0 14 8"
             }) => (
    <svg
        width={width}
        style={style}
        height={height}
        viewBox={viewBox}
        xmlns="http://www.w3.org/2000/svg"
        className={`svg-icon ${className || ""}`}>
        <g data-name="Layer 2">
            <path d="M2.41 7l5.3-5.29A1 1 0 0 0 6.29.29l-6 6a1 1 0 0 0 0 1.42l6 6a1 1 0 1 0 1.42-1.42z" data-name="Layer 1"
                fill={fill}/>
        </g>
    </svg>

);

export default SVG;
