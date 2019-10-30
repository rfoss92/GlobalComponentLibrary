import React from 'react';

const SVG = ({
                 style = {},
                 fill = '#ff7a17',
                 fill2 = 'none',
                 fill3 = 'none',
                 width = '48',
                 height = '48',
                 className = "IconStatement",
                 viewBox = "0 0 18 22",
             }) => (
    <svg
        width={width}
        style={style}
        height={height}
        viewBox={viewBox}
        className={`svg-icon ${className || ""}`}
        xmlns="http://www.w3.org/2000/svg">
        <g data-name="Layer 2">
            <path d="M12 3.41V6h2.59zM16 8h-5a1 1 0 0 1-1-1V2H3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1zm-5-8a1 1 0 0 1 .71.29l6 6A1 1 0 0 1 18 7v12a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3zm2 11a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2zm0 4a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2zM7 7a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2z"
                  fill={fill} data-name="Layer 1"/>
        </g>
    </svg>
)

export default SVG;