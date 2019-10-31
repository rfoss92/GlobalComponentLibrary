import React, { Component } from 'react';
import PropTypes from 'prop-types';
import onClickOutside from "react-onclickoutside";

import {
    RightNavigationContainer,
    RightNavItem
} from './styles';

class AppNavigationDropdownRight extends Component {
    handleClickOutside = (evt) => {
        this.props.handleCloseDropdown();
    }

    render () {
        return (
            <RightNavigationContainer hide={this.props.hide}>
                <div onMouseLeave={this.props.handleCloseDropdown}>
                    <RightNavItem id={'myProfile'} to={'/patient-profile'} onClick={this.handleClickOutside}>
                        My Profile
                    </RightNavItem>
                    <RightNavItem id={'faq'} to={'/faq'} onClick={this.handleClickOutside}>
                        FAQ
                    </RightNavItem>
                    <RightNavItem id={'logout'} to={'/logout'}  onClick={this.handleClickOutside}>
                        Logout
                    </RightNavItem>
                </div>
            </RightNavigationContainer>
        )
    }
}

AppNavigationDropdownRight.propTypes = {
    handleCloseDropdown: PropTypes.func.isRequired
}

export default onClickOutside(AppNavigationDropdownRight);