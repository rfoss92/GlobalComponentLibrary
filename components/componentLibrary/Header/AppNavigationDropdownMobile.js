import React, { Component } from 'react';
import PropTypes from 'prop-types';
import onClickOutside from "react-onclickoutside";
import Icon from '../Icon';
import {
    LeftNavigationContainer,
    SideNavHeader,
    SideNavList,
    SideNavItem,
    IconContainer
} from './styles';

class AppNavigationDropdownMobile extends Component {
    constructor(props) {
        super(props);
    }

    handleClickOutside = (evt) => {
        this.props.handleMenuClose();
    }

    render () {
        const { handleMenuClose, loggedIn } = this.props;
        let view = <div/>
        if (loggedIn) {
            view =
                <LeftNavigationContainer>
                    <SideNavHeader>
                        <IconContainer onClick={handleMenuClose}><Icon name='IconHamburgerMenu'/></IconContainer>
                        <div>Jane Doe</div>
                        <div>ID 123456</div>
                    </SideNavHeader>
                    <SideNavList>
                        <SideNavItem id={'balanceSummary'} to={'/user'} onClick={handleMenuClose}>Balance Summary</SideNavItem>
                        <SideNavItem id={'documents'} to={'/documents'} onClick={handleMenuClose}>Documents</SideNavItem>
                        <SideNavItem id={'contactUs'} to={'/contact'} onClick={handleMenuClose}>Contact Us</SideNavItem>
                        <SideNavItem id={'myProfile'} to={'/patient-profile'} onClick={handleMenuClose}>My Profile</SideNavItem>
                        <SideNavItem id={'faq'} to={'/faq'} onClick={handleMenuClose}>FAQ</SideNavItem>
                        <SideNavItem id={'logout'} to={'/logout'} onClick={handleMenuClose}>Logout</SideNavItem>
                    </SideNavList>
                </LeftNavigationContainer>;
        } else {
            view =
                <LeftNavigationContainer>
                    <SideNavHeader>
                        <IconContainer onClick={handleMenuClose}><Icon name='IconHamburgerMenu'/></IconContainer>
                    </SideNavHeader>
                    <SideNavList>
                        <SideNavItem id={'homeLink'} to={'/'}>Home</SideNavItem>
                        <SideNavItem id={'paymentLink'} to={'/quick_payment'}>Make a Payment</SideNavItem>
                        <SideNavItem id={'contactLink'} to={'/contact'}>Contact Us</SideNavItem>
                    </SideNavList>
                </LeftNavigationContainer>;
        }
        return view;
    }
}

AppNavigationDropdownMobile.propTypes = {
    loggedIn: PropTypes.bool,

    handleMenuClose: PropTypes.func.isRequired
}

export default onClickOutside(AppNavigationDropdownMobile);