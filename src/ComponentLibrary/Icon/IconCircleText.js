import React from 'react';

const SVG = ({
                 style = {},
                 fill = '#ff7a17',
                 fill2 = '#fff',
                 fill3 = 'none',
                 width = '100%',
                 height = '100%',
                 className = "IconCircleText",
                 viewBox = "0 0 27 32.28",
                 text
             }) => (

        <svg xmlns="http://www.w3.org/2000/svg"
             viewBox={viewBox}
             width={width}
             style={style}
             height={height}
             className={`svg-icon ${className || ""}`}>
            <g data-name="Layer 2">
                <g data-name="Layer 1">
                    <ellipse cx="13.5" cy="14" rx="13.5" ry="14" fill={fill}/>
                    <text transform="translate(9.88 20)" style={{isolation:'isolate'}} fontSize="17" fill={fill2}
                           fontWeight="500">{text}
                    </text>
                </g>
            </g>
        </svg>

    );

export default SVG;