import React from 'react';

const SVG = ({
                 style = {},
                 fill = '#154f6c',
                 fill2 = 'none',
                 fill3 = 'none',
                 width = '100%',
                 height = '100%',
                 className = "IconDocument",
                 viewBox = "0 0 30 36.67"
             }) => (
    <svg
        width={width}
        style={style}
        height={height}
        viewBox={viewBox}
        xmlns="http://www.w3.org/2000/svg"
        className={`svg-icon ${className || ""}`}
    >
        <g data-name="Layer 2"><path d="M20 5.69V10h4.31zm6.67 7.64h-8.34a1.66 1.66 0 0 1-1.66-1.66V3.33H5A1.67 1.67 0 0 0 3.33 5v26.67A1.66 1.66 0 0 0 5 33.33h20a1.66 1.66 0 0 0 1.67-1.66zM18.33 0a1.66 1.66 0 0 1 1.18.49l10 10a1.66 1.66 0 0 1 .49 1.18v20a5 5 0 0 1-5 5H5a5 5 0 0 1-5-5V5a5 5 0 0 1 5-5zm3.34 18.33a1.67 1.67 0 0 1 0 3.34H8.33a1.67 1.67 0 0 1 0-3.34zm0 6.67a1.67 1.67 0 0 1 0 3.33H8.33a1.67 1.67 0 0 1 0-3.33zm-10-13.33a1.67 1.67 0 0 1 0 3.33H8.33a1.67 1.67 0 0 1 0-3.33z" fill={fill} data-name="Layer 1"/></g>
    </svg>
);

export default SVG;
