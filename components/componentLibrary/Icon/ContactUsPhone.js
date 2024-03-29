import React from 'react';

const SVG = ({
                 style = {},
                 fill = "#ec3d10",
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
        <g data-name="Layer 2"><path d="M6.73 8.42l.21.37a12.16 12.16 0 001.87 2.41 12.22 12.22 0 002.7 2h.14l1.18-1.43a1.77 1.77 0 012.17-.56l3.9 1.69a1.73 1.73 0 011.1 1.7 4.34 4.34 0 01-.15.8c-.24 1.08-.48 2.17-.75 3.24A1.7 1.7 0 0117.64 20a1.51 1.51 0 01-.3 0 17.24 17.24 0 01-6.94-1.45 17.07 17.07 0 01-4.22-2.63 17.42 17.42 0 01-3.86-4.6 17.2 17.2 0 01-1.92-5A17.14 17.14 0 010 3.69v-.95A1.82 1.82 0 011.45.88C2.68.61 3.9.31 5.12 0a1.82 1.82 0 011.15.18 1.79 1.79 0 01.8.83c.58 1.34 1.15 2.67 1.72 4a1.79 1.79 0 01-.56 2.17L6.81 8.34zm-2.33-.5l.07-.06L7 5.8a.13.13 0 000-.17C6.5 4.41 6 3.2 5.46 2c0-.08-.06-.1-.14-.08L2 2.66c-.1 0-.12.07-.12.16a15.58 15.58 0 00.27 2.72A15.52 15.52 0 0017.2 18.15c.08 0 .11 0 .13-.11.26-1.11.51-2.23.77-3.35 0-.08 0-.11-.08-.14L14.36 13h-.15l-2 2.51a.12.12 0 01-.17 0l-.74-.38a15.65 15.65 0 01-2.38-1.46A11.74 11.74 0 017 12a13.33 13.33 0 01-1.77-2.51C5 9 4.67 8.45 4.4 7.92z" fill={fill} data-name="Layer 1"/></g>
    </svg>

);

export default SVG;