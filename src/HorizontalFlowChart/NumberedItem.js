import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Icon from '../componentLibrary/Icon';
import {
    StyledNumberedItem, 
    StyledNumber, 
    StyledText
} from './styles';

class NumberedItem extends Component {
    render() {
        const {number, text, numberBackgroundColor, textColor, completed} = this.props;
        return (
            <StyledNumberedItem>
                <StyledNumber>
                    {completed ? <Icon name='IconCircleCheckmark'/> :
                        <Icon name='IconCircleText' text={number} fill={numberBackgroundColor}/>}
                </StyledNumber>
                <StyledText textColor={textColor}>{text}</StyledText>
            </StyledNumberedItem>
        );
    }
}


NumberedItem.propTypes = {
    number: PropTypes.string.isRequired,

    text: PropTypes.string.isRequired,

    numberBackgroundColor: PropTypes.string.isRequired,

    textColor: PropTypes.string.isRequired,

    // If completed, a checkmark should be rendered instead of number.
    completed: PropTypes.bool
}

export default NumberedItem;