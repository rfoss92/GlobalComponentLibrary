import React from 'react';

const SVG = ({
                 style = {},
                 fill = '#154f6c',
                 fill2 = '#fff',
                 fill3 = 'none',
                 width = '100%',
                 height = '100%',
                 viewBox = "0 0 20 20"
             }) => (
<svg xmlns="http://www.w3.org/2000/svg" viewBox={viewBox}>
  <g data-name="Layer 2">
    <rect x=".5" y=".5" width="19" height="19" rx="4" fill="none" stroke={fill} data-name="Layer 1"/>
  </g>
</svg>

);

export default SVG;
