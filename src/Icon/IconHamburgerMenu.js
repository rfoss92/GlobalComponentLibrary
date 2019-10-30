import React from 'react';

const SVG = ({
                 style = {},
                 fill = '#fff',
                 fill2 = 'none',
                 fill3 = '#9ea0a5',
                 width = '6',
                 height = '10',
                 className = "IconCircleText",
                 viewBox = "0 0 15 14",
             }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox={viewBox}>
        <g data-name="Layer 2">
            <path
                d="M1 2a1 1 0 0 1 0-2h13a1 1 0 0 1 0 2zm0 6a1 1 0 0 1 0-2h13a1 1 0 0 1 0 2zm0 6a1 1 0 0 1 0-2h13a1 1 0 0 1 0 2z"
                data-name="Layer 1"/>
        </g>
    </svg>
);

export default SVG;