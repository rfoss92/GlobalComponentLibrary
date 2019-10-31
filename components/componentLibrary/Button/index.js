import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { PrimaryButton, SecondaryButton, DisabledButton } from './styles';
import { ButtonConstants } from '../../constants/componentLibrary';

class Button extends Component {
    render() {
        let { text, type, onClick, disabled, size, onMouseEnter } = this.props;
        let view = <div/>;
        let buttonTypes = ButtonConstants.buttonTypes;
        switch (type) {
            case buttonTypes.primary:
                view = <PrimaryButton
                    onClick={onClick}
                    size={size}
                    disabled={disabled}
                    >{text}</PrimaryButton>;
                break;
            case buttonTypes.secondary:
                view = <SecondaryButton
                    onClick={onClick}
                    size={size}
                    disabled={disabled}
                >{text}</SecondaryButton>;
                break;
            case 'mock-disabled':
                view = <DisabledButton 
                onClick={onClick}
                size={size}
                >{text}</DisabledButton>
            default:
        }
        return view;
    }
}

Button.propTypes = {
    // Text shown on the button
    text: PropTypes.string,

    // Type of the button
    type: PropTypes.string,

    onClick: PropTypes.func.isRequired,

    disabled: PropTypes.bool,

    size: PropTypes.string,
};

export default Button;