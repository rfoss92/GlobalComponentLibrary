import React from 'react';

const SVG = ({
                 style = {},
                 fill = '#3c205b',
                 fill2 = '#fff',
                 fill3 = 'none',
                 width = '100%',
                 height = '100%',
                 viewBox = "0 0 20 20"
             }) => (

    <svg xmlns="http://www.w3.org/2000/svg" viewBox={viewBox}>
        <g data-name="Layer 2">
            <g data-name="Layer 1">
                <rect width="20" height="20" rx="4" fill={fill}/>
                <rect x=".5" y=".5" width="19" height="19" rx="4" fill="none" stroke={fill}/>
                <path d="M7.89 15.27l-4.77-4.48a.6.6 0 0 1 0-.9l1-.9A.73.73 0 0 1 5 9l3.33 3.14 7.42-7a.73.73 0 0 1 1 0l1 .9a.62.62 0 0 1 0 .9l-8.9 8.33a.71.71 0 0 1-1 0" fill={fill2} fillRule="evenodd"/>
            </g>
        </g>
    </svg>

);

export default SVG;
