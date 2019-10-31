import React from 'react';

const SVG = ({
                 style = {},
                 fill = "#191146",
                 fill2 = '',
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
        <g data-name="Layer 2"><path d="M26.25 0H3.75A3.75 3.75 0 000 3.75v16.87a3.76 3.76 0 003.75 3.76h5.63v4.92a.7.7 0 00.7.7.64.64 0 00.41-.14l7.32-5.48h8.44A3.76 3.76 0 0030 20.62V3.75A3.75 3.75 0 0026.25 0zm.94 20.62a.94.94 0 01-.94.94h-9.37l-.76.56-3.93 3v-3.56H3.75a.94.94 0 01-.94-.94V3.75a.94.94 0 01.94-.94h22.5a.94.94 0 01.94.94z" fill={fill} data-name="Layer 1"/></g>
    </svg>

);

export default SVG;