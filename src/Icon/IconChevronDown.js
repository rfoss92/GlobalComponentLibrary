import React from 'react';

const SVG = ({
                 style = {},
                 fill = '#154f6c',
                 fill2 = '#fff',
                 fill3 = 'none',
                 width = '100%',
                 height = '100%',
                 className = "IconChevronDown",
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
            <path d="M7 5.59L1.71.29A1 1 0 0 0 .29 1.71l6 6a1 1 0 0 0 1.42 0l6-6A1 1 0 1 0 12.29.29z" data-name="Layer 1"
                  fill={fill}/>
        </g>
    </svg>

);

export default SVG;
