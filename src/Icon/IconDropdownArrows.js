import React from 'react';

const SVG = ({
                 style = {},
                 fill = '#fff',
                 fill2 = 'none',
                 fill3 = '#9ea0a5',
                 width = '6',
                 height = '10',
                 className = "IconCircleText",
                 viewBox = "0 0 6 10",
             }) => (

    <svg xmlns="http://www.w3.org/2000/svg"
         viewBox={viewBox}
         width={width}
         style={style}
         height={height}
         className={`svg-icon ${className || ""}`}>
        <defs>
            <mask id="a" x="0" y="0" width={width} height={height} maskUnits="userSpaceOnUse">
                <path d="M6 6.94L2.94 10 0 7.05zM0 3.05L3.05 0 6 2.93z" fill={fill} fillRule="evenodd"/>
            </mask>
        </defs>
        <g data-name="Layer 2">
            <g data-name="Layer 1">
                <path d="M6 6.94L2.94 10 0 7.05zM0 3.05L3.05 0 6 2.93z" fill={fill2}/>
                <g mask="url(#a)">
                    <path fill={fill3} d="M0 0h6v10H0z"/>
                </g>
            </g>
        </g>
    </svg>

);

export default SVG;