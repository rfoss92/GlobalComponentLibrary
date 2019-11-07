
import React from 'react';
import PropTypes from 'prop-types';

const getJustifyContent = (align) => {
    switch(align) {
        case 'top':
            return 'flex-start';
        case 'bottom':
            return 'flex-end';
        default:
            return align;
    }
}

const determineColumnWidth = (columnWidthFactor, gutter) => {
    const gutterSize = gutter * 2;
    const columnPercentage = columnWidthFactor/12;
    return `calc((100% - ${gutterSize}px) * ${columnPercentage})`;
}

const determineColumnWidthFactor = (screenSize, breakPoints) => {
    var validBreakPoints = [];
    breakPoints.forEach(key => {
        if (key) validBreakPoints.push(key);
    });

    if( validBreakPoints[screenSize]) return validBreakPoints[screenSize];
    else {
        
        return validBreakPoints[validBreakPoints.length-1];
    }
}

const Column = (props) => {
    const { className, screenSize, gutter, align, children, xs, sm, md, lg, xl } = props;
    const columnWidthFactor = determineColumnWidthFactor(screenSize.screenSize, [ xs, sm, md, lg, xl ]);
    return (
        <div
            className={className}
            style={{...props.style, flex: `0 0 ${determineColumnWidth(columnWidthFactor, gutter)}`, boxSizing: 'border-box'}}
        >
            <div style={{height: '100%', display: 'flex', flexDirection: 'column', justifyContent: getJustifyContent(align)}}>
                {children}
            </div>
        </div>
    );
}

Column.defaultProps = {
    gutter: 0,
}

Column.propTypes = {
    screenSize: PropTypes.number,
    gutter: PropTypes.number,
    align: PropTypes.oneOf(['top', 'center', 'bottom']),
    xs: PropTypes.number,
    sm: PropTypes.number,
    md: PropTypes.number,
    lg: PropTypes.number,
    xl: PropTypes.number,
}

export default Column;