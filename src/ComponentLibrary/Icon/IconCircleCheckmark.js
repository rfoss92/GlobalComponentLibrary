import React from 'react';

const SVG = ({
                 style = {},
                 fill = '#ff7a17',
                 fill2 = '#fff',
                 fill3 = 'none',
                 width = '100%',
                 height = '100%',
                 className = "IconCircleCheckmark",
                 viewBox = "0 0 28 28",
                 text
             }) => (

    <svg
        width={width}
        style={style}
        height={height}
        viewBox={viewBox}
        xmlns="http://www.w3.org/2000/svg"
        className={`svg-icon ${className || ""}`}>
        <g data-name="Layer 2">
            <g data-name="Layer 1">
                <circle cx="14" cy="14" r="14" fill={fill}/>
                <path
                    d="M11 16.27a.32.32 0 0 0 .13-.1l.54-.54L14 13.39l5.92-5.94.08-.15a1.14 1.14 0 0 1 .76-.3 1 1 0 0 1 .76.32l.5.49 1 1a1.15 1.15 0 0 1 .3.48 1.07 1.07 0 0 1-.24 1l-.08.08-.21.21-8.16 8.17-2.73 2.84-.14.13a1.09 1.09 0 0 1-1.5 0l-.1-.12-5.73-5.78-.12-.12a1.09 1.09 0 0 1 0-1.52l.18-.18c.45-.44.89-.88 1.33-1.33a1.28 1.28 0 0 1 .35-.26 1.09 1.09 0 0 1 1.17.19l.13.14 3.41 3.4z"
                    fill={fill2}/>
            </g>
        </g>
    </svg>

);

export default SVG;