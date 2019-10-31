import React from 'react';

const SVG = ({
                 style = {},
                 fill = '',
                 stroke = '#cacaca',
                 fill2 = '#fff',
                 fill3 = 'none',
                 width = '100%',
                 height = '100%',
                 className = "IconRadioNotSelected",
                 viewBox = "0 0 25 25"
             }) => (

    <svg
        width={width}
        style={style}
        height={height}
        viewBox={viewBox}
        xmlns="http://www.w3.org/2000/svg"
        className={`svg-icon ${className || ""}`}>
        <g data-name="Layer 2">
            <circle cx="12.5" cy="12.5" r="12" fill="#fff" stroke={stroke} data-name="Layer 1"/>
        </g>
    </svg>

);

export default SVG;