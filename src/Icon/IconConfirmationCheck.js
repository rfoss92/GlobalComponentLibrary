import React from 'react';

const SVG = ({
                 style = {},
                 fill = '#154f6c',
                 fill2 = '#ff7a17',
                 fill3 = 'none',
                 width = '100%',
                 height = '100%',
                 className = "IconCircleText",
                 viewBox = "0 0 82.73 80",
             }) => (

    <svg xmlns="http://www.w3.org/2000/svg"
         viewBox={viewBox}
         width={width}
         style={style}
         height={height}
         className={`svg-icon ${className || ""}`}>
        <g data-name="Layer 2">
            <g data-name="Layer 1">
                <path
                    d="M71.9 36.64V40a32.68 32.68 0 0 1-23.18 31.38A32.18 32.18 0 0 1 12.4 57.81 33 33 0 0 1 15 18.74a32.1 32.1 0 0 1 37.76-8.63 3.59 3.59 0 0 0 4.75-1.84 3.66 3.66 0 0 0-1.82-4.81A39.27 39.27 0 0 0 9.48 14a40.38 40.38 0 0 0-3.11 47.77 39.33 39.33 0 0 0 44.39 16.59A40 40 0 0 0 79.09 40v-3.36a3.6 3.6 0 1 0-7.19 0z"
                    fill={fill}/>
                <path
                    d="M39.77 42.13l-8.2-8.34a3.55 3.55 0 0 0-5.07 0 3.69 3.69 0 0 0 0 5.14l10.74 10.91a3.54 3.54 0 0 0 5.06 0l39.38-40a3.67 3.67 0 0 0 0-5.14 3.54 3.54 0 0 0-5.06 0z"
                    fill={fill2}/>
            </g>
        </g>
    </svg>

);

export default SVG;