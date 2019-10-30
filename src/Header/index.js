import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Icon from '../Icon';
import AppNavigationDropdownMobile from './AppNavigationDropdownMobile';
import AppNavigationDropdownRight from './AppNavigationDropdownRight';
import idx from "idx";
import AuthToken from "../../lib/AuthToken";

import {
    AppHeader,
    AppNavigationLogin,
    AppNavigationLoginMobile,
    StyledLink,
    IconContainer,
    StyledUserMenu,
    AppLogoContainer,
    TitleHeaderText,
    SubTitleText,
    HeaderContainer
} from './styles';

import Column from '../Column';

import { primaryColor } from "../constants/styles";
import { connect } from "react-redux";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menuOpened: false,
            loggedIn: false,
            userSessionKey: null,
        }
    }

    componentDidMount = () => {
        this.checkLogin();
    }

    componentDidUpdate(prevProps, prevState) {
        if (AuthToken.getUserSessionKey() !== prevState.userSessionKey) {
            this.checkLogin();
        }
    }

    checkLogin = () => {
        let loggedIn = false;
        const userSessionKey = AuthToken.getUserSessionKey();
        if (userSessionKey) {
            loggedIn = true;
        }
        this.setState({
            loggedIn: loggedIn,
            userSessionKey: userSessionKey
        });
    }

    getUserFullName = () => {
        const patientDetail = this.props.patientDetailsProp;
        let fullName = '';
        if (patientDetail) {
            fullName = patientDetail.FName + ' ' + patientDetail.LName
        }
        return fullName;
    }

    handleMenuClose = () => {
        this.setState({ menuOpened: false, rightMenuOpened: false});
    }

    openCloseMenu = () => {
        const menuOpened = this.state.menuOpened;
        this.setState({ menuOpened: !menuOpened });
    }

    openRightMenu = () => {
        this.setState({ rightMenuOpened: true});
    }

    closeRightMenu = () => {
        this.setState({ rightMenuOpened: false});
    }

    navigateToHome = () => this.props.history.push('/');

    checkForSelectedUrl = (location) => {
        const currentLocation = this.props.history.location.pathname;
        return currentLocation === location;
    }

    render() {
        const { menuOpened, rightMenuOpened } = this.state;
        const { logoProp } = this.props;
        let headerDiv = <div></div>;

        const userIsSelected = this.checkForSelectedUrl('/user');
        const documentsIsSelected = this.checkForSelectedUrl('/documents');
        const contactIsSelected = this.checkForSelectedUrl('/contact');

        let regularHeader = (
            <AppHeader>
                <AppNavigationLogin>
                    {logoProp ? <AppLogoContainer onClick={this.navigateToHome}>
                        <img id="logo" className={'logo'} src={logoProp}/>
                    </AppLogoContainer> : null}
                    <div>
                        <StyledLink id={'balanceSummary'} to={'/user'} selected={userIsSelected}>Balance Summary</StyledLink>
                        <StyledLink id={'documents'} to={'/documents'} selected={documentsIsSelected}>Documents</StyledLink>
                        <StyledLink id={'contactUs'} to={'/contact'} selected={contactIsSelected}>Contact Us</StyledLink>
                    </div>
                    <div onMouseLeave={this.closeRightMenu}>
                        <StyledUserMenu onMouseEnter={this.openRightMenu} onClick={this.openRightMenu}>
                            <div style={{fontSize: '18px'}}>{this.getUserFullName()}</div>
                            <IconContainer><Icon name='IconUser' fill={primaryColor}/></IconContainer>
                        </StyledUserMenu>
                        <AppNavigationDropdownRight hide={!rightMenuOpened} handleCloseDropdown={this.closeRightMenu}/>
                    </div>
                </AppNavigationLogin>

                <AppNavigationLoginMobile>
                    <IconContainer onClick={this.openCloseMenu}><Icon name='IconHamburgerMenu'/></IconContainer>
                </AppNavigationLoginMobile>
                {menuOpened ? <AppNavigationDropdownMobile loggedIn={true} handleMenuClose={this.handleMenuClose}/> : null}

            </AppHeader>
        );

        let loginHeader = (
            <div style={{padding: '12px 10%'}}>
                <Column xs={12} sm={12} md={4} md={4}>
                    <HeaderContainer onClick={this.navigateToHome}>
                        <TitleHeaderText>My<div>Medical</div>Me</TitleHeaderText>
                        <SubTitleText>Quick + Easy Healthcare Payments</SubTitleText>
                    </HeaderContainer>
                </Column>
            </div>
        );

        if (this.state.loggedIn) {
            headerDiv = regularHeader;
        } else {
            headerDiv = loginHeader;
        }
        return headerDiv;
    };
}

Header.propTypes = {
    userFullName: PropTypes.string,
    getPatientProfileLoadingProp: PropTypes.bool,
    patientDetailsProp: PropTypes.object,
    logoProp: PropTypes.string
}

const mapStateToProps = state => {
    return {
        getPatientProfileLoadingProp: idx(state, _=>_.patientProfile.loading) || false,
        patientDetailsProp: idx(state, _=>_.patientProfile.patientDetails),
        logoProp: idx(state, _=>_.patientProfile.logo) || null
    }
}

const mapDispatchToProps = dispatch => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Header));