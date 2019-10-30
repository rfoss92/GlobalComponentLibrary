import React from 'react';

const SVG = ({
                 style = {},
                 fill = '#ff7a17',
                 fill2 = 'none',
                 fill3 = 'none',
                 width = '48',
                 height = '48',
                 className = "IconStatement",
                 viewBox = "0 0 22 22",
             }) => (
    <svg
        width={width}
        style={style}
        height={height}
        viewBox={viewBox}
        className={`svg-icon ${className || ""}`}
        xmlns="http://www.w3.org/2000/svg">
        <g data-name="Layer 2">
            <path d="M18 18v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3H3a3 3 0 0 1-3-3v-5a3 3 0 0 1 3-3h1V1a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v6h1a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3zm0-2h1a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h1v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zM6 7h10V2H6zm0 13h10v-6H6z" fill={fill} data-name="Layer 1"/>
        </g>
    </svg>
)

export default SVG;