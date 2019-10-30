import React from 'react';

const SVG = ({
                 style = {},
                 fill = '#154f6c',
                 fill2 = 'none',
                 fill3 = 'none',
                 width = '100%',
                 height = '100%',
                 className = "IconUser",
                 viewBox = "0 0 35 35"
             }) => (
    <svg
        width={width}
        style={style}
        height={height}
        viewBox={viewBox}
        xmlns="http://www.w3.org/2000/svg"
        className={`svg-icon ${className || ""}`}
    >
        <g data-name="Layer 2">
            <g data-name="Layer 1">
                <circle cx="17.5" cy="13.5" r="5.78" fill="none" stroke={fill} strokeWidth="3"/>
                <path
                    d="M17.5 0A17.5 17.5 0 1 0 35 17.5 17.52 17.52 0 0 0 17.5 0zM8.71 29a9.63 9.63 0 0 1 17.34.18A14.37 14.37 0 0 1 8.71 29zm19.63-1.91a12.63 12.63 0 0 0-21.89-.22 14.51 14.51 0 1 1 21.89.22z"
                    fill={fill}/>
            </g>
        </g>
    </svg>
);

export default SVG;
