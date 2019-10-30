import React from 'react';

const SVG = ({
                 style = {},
                 fill = '#9ea0a5',
                 fill2 = '#d0d7dd',
                 fill3 = 'none',
                 width = '48',
                 height = '48',
                 className = "IconToggleOff",
                 viewBox = "0 0 49.91 25",
             }) => (
    <svg
        width={width}
        style={style}
        height={height}
        viewBox={viewBox}
        className={`svg-icon ${className || ""}`}
        xmlns="http://www.w3.org/2000/svg">
        <g data-name="Layer 2">
            <g data-name="Layer 1">
                <path d="M15.65 1.5H39a11 11 0 0 1 10.91 11.14A11 11 0 0 1 39 23.79H15.65A11 11 0 0 1 4.79 12.64 11 11 0 0 1 15.65 1.5z" fillRule="evenodd" fill={fill}/>
                <path d="M12.5 24.5a12 12 0 1 0-12-12 12 12 0 0 0 12 12z" fill="#fff" fillRule="evenodd"/>
                <path d="M12.5 24.5a12 12 0 1 0-12-12 12 12 0 0 0 12 12z" fill="none" stroke={fill2}/>
            </g>
        </g>
    </svg>
)

export default SVG;