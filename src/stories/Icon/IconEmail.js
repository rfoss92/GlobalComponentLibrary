import React from 'react';

const SVG = ({
                 style = {},
                 fill = '',
                 fill2 = '#FF7A17',
                 fill3 = 'none',
                 width = '100%',
                 height = '100%',
                 className = "IconEmail",
                 viewBox = "0 0 22 18"
             }) => (
    <svg
        width={width}
        style={style}
        height={height}
        viewBox={viewBox}
        xmlns="http://www.w3.org/2000/svg"
        className={`svg-icon ${className || ""}`}>
        <g data-name="Layer 2">
            <path d="M22 3v12a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3h16a3 3 0 0 1 3 3zm-2.11-.43A1 1 0 0 0 19 2H3a1 1 0 0 0-.89.55L11 8.78zM20 4.92l-8.43 5.9a1 1 0 0 1-1.14 0L2 4.92V15a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1z" fill="#ff7a17" data-name="Layer 1"/>
        </g>
    </svg>

);

export default SVG;
