import React from 'react';

const SVG = ({
                 style = {},
                 fill = '#ff7a17',
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
                <path d="M10.29 1.5h22.17c5.68 0 10.29 5 10.29 11.14s-4.61 11.15-10.29 11.15H10.29C4.61 23.79 0 18.8 0 12.64S4.61 1.5 10.29 1.5z" fillRule="evenodd" fill={fill}/>
                <path d="M37.63 24.5c6.28 0 11.37-5.37 11.37-12S43.91.5 37.63.5s-11.37 5.37-11.37 12 5.09 12 11.37 12z" fill="#fff" fillRule="evenodd"/>
                <path d="M37.63 24.5c6.28 0 11.37-5.37 11.37-12S43.91.5 37.63.5s-11.37 5.37-11.37 12 5.09 12 11.37 12z" fill="none" stroke={fill2}/>
            </g>
        </g>
    </svg>
)

export default SVG;