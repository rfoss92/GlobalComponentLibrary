import React, { Component } from 'react';
import PropTypes from 'prop-types';
import onClickOutside from "react-onclickoutside";
import { StyledTooltipContainer } from './styles';

class TooltipContainer extends Component {
    handleClickOutside = (evt) => {
        this.props.handleTooltipClose();
    }

    render () {
        return (
            <StyledTooltipContainer {...this.props}>
                {this.props.children}
            </StyledTooltipContainer>
        );
    }
}

TooltipContainer.propTypes = {
    handleTooltipClose: PropTypes.func.isRequired
}

export default onClickOutside(TooltipContainer);