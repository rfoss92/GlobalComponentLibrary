import React, { Children, cloneElement } from 'react';
import PropTypes from 'prop-types';
import { Provider, Consumer } from './Context';

const Grid = (props) => (
    <Provider>
        <Consumer>
            {screenSize => (
                <div className={props.className} style={{...props.style, boxSizing: 'border-box'}}>
                    {Children.toArray(props.children).map((child, index) => cloneElement(child, { fill: props.fillEmptyRows, screenSize, key: `${index}`}))}
                </div>
            )}
        </Consumer>
    </Provider>
)

Grid.defaultProps = {
    fillEmptyRows: false
}

Grid.propTypes = {
    fillEmptyRows: PropTypes.bool,
}

export default Grid;