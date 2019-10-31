import React from 'react';

const SVG = ({
                 style = {},
                 fill = '#ff7a17',
                 fill2 = 'none',
                 fill3 = 'none',
                 width = '48',
                 height = '48',
                 className = "IconStatement",
                 viewBox = "0 0 12 14.67",
             }) => (
    <svg
        width={width}
        style={style}
        height={height}
        className={`svg-icon ${className || ""}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox={viewBox}>
        <g id="Layer_2" data-name="Layer 2">
            <g id="Layer_1-2" data-name="Layer 1">
                <g id="Web">
                    <g id="Desktop-HD-Copy">
                        <g id="Group">
                            <path id="Path" fill={fill}
                                  d="M6.3 14.6a.7.7 0 0 1-.6 0c-.18-.1-.49-.27-.89-.51a16.65 16.65 0 0 1-1.92-1.42C1.1 11.1 0 9.31 0 7.33V2a.68.68 0 0 1 .5-.65L5.84 0a.58.58 0 0 1 .32 0l5.34 1.35A.68.68 0 0 1 12 2v5.33c0 2-1.1 3.77-2.89 5.34a16.65 16.65 0 0 1-1.92 1.42c-.4.24-.71.41-.89.51z"/>
                            <path fill={fill}
                                  d="M6.48 13a14.14 14.14 0 0 0 1.75-1.3 6 6 0 0 0 2.44-4.33V2.52L6 1.35 1.33 2.52v4.81a6 6 0 0 0 2.44 4.33A14.14 14.14 0 0 0 5.52 13l.48.28z"/>
                        </g>
                    </g>
                </g>
            </g>
        </g>
    </svg>
)

export default SVG;