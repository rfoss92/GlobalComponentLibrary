import React from 'react';

const SVG = ({
                 style = {},
                 fill = '#4a4a4a',
                 fill2 = '#fff',
                 fill3 = 'none',
                 width = '100%',
                 height = '100%',
                 className = "IconChargeHistoryCollapse",
                 viewBox = "0 0 10 5"
             }) => (
    <svg
        width={width}
        style={style}
        height={height}
        viewBox={viewBox}
        xmlns="http://www.w3.org/2000/svg"
        className={`svg-icon ${className || ""}`}>
        <g data-name="Layer 2">
            <path d="M10 5L5 0 0 5z" fill={fill} fillRule="evenodd" data-name="Layer 1"/>
        </g>
    </svg>

);

export default SVG;
