import React, { Children, Fragment, cloneElement } from 'react'
import PropTypes from 'prop-types';

const Row = (props) => {
    const { children, fill, screenSize, gutter, key, className } = props;
    const columns = Children.toArray(children);
    return (
        <Fragment>
            <div
                key={`${key}`}
                style={{...props.style, display: 'flex', flexWrap: 'wrap', boxSizing: 'border-box'}}
                className={className}
            >
                {columns.map((column, index) => cloneElement(column, { fill, screenSize, gutter, key: `${index}`}))}
            </div>
        </Fragment>
    )
}

Row.defaultProps = {
    gutter: 0,
}

Row.propTypes = {
    gutter: PropTypes.number,
    fill: PropTypes.bool,
    screenSize: PropTypes.number,
    key: PropTypes.string
}

export default Row;