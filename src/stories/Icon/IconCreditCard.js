import React from 'react';

const SVG = ({
                 style = {},
                 fill = '#154f6c',
                 fill2 = 'none',
                 fill3 = 'none',
                 width = '100%',
                 height = '100%',
                 className = "IconCreditCard",
                 viewBox = "0 0 36 27"
             }) => (
    <svg
        width={width}
        style={style}
        height={height}
        viewBox={viewBox}
        xmlns="http://www.w3.org/2000/svg"
        className={`svg-icon ${className || ""}`}
    >
        <g data-name="Layer 2"><path d="M33 9V4.5A1.5 1.5 0 0 0 31.5 3h-27A1.5 1.5 0 0 0 3 4.5V9zm0 3H3v10.5A1.5 1.5 0 0 0 4.5 24h27a1.5 1.5 0 0 0 1.5-1.5zM4.5 0h27A4.49 4.49 0 0 1 36 4.5v18a4.49 4.49 0 0 1-4.5 4.5h-27A4.49 4.49 0 0 1 0 22.5v-18A4.49 4.49 0 0 1 4.5 0z" fill={fill} fillRule="evenodd" data-name="Layer 1"/></g>
    </svg>
);

export default SVG;
