import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import {
    headerHeight,
    primaryColor,
    paddingLarge,
    secondaryColor,
    borderRadius,
    white,
    paddingSmall,
    paddingMedium,
    borderGrey,
    lineHeightXL,
    black,
    lightGrey
} from '../../constants/styles';

const AppHeader = styled.div`
width: 100%;
float: left;
height: ${headerHeight};
border-bottom: 1px solid ${primaryColor}
`;

const AppLogoContainer = styled.div`
width: 200px;
height: ${headerHeight};
line-height: ${headerHeight};
text-align: center;
padding: 0px 10px;
float: left;
overflow: hidden;
cursor: pointer;
img#logo {
  width: 100%;
  vertical-align: middle;
}
`;

const AppNavigationLogin = styled.div`
@media (max-width: 1100px) {
    display: none
}
height: ${headerHeight};
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;

> div:last-child {
    margin-left: auto
}
`;

const AppNavigationLoginMobile = styled.div`
@media (min-width: 1101px) {
    display: none
}
padding-left: ${paddingLarge}
height: ${headerHeight};
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
`;

const IconContainer = styled.div`
width: 24px
height: calc(${headerHeight} / 2)
padding-top: calc(${headerHeight} / 4)
`;

const StyledLink = styled(NavLink)`
padding: 32px;
text-decoration: none;
color: ${props => props.selected ? primaryColor : 'black'};
${props => props.selected && 'font-weight: 600'};
font-size: 18px;
&:hover {
    font-size: 21px;
    font-weight: 600;
}
`;

const StyledLinkPayment = styled(NavLink)`
padding-top: ${paddingSmall}
padding-bottom: ${paddingSmall}
padding-left: ${paddingLarge}
padding-right: ${paddingLarge}
border-radius: ${borderRadius}
text-decoration: none;
font-weight: bold;
color: ${white};
background-color: ${primaryColor}
&:hover {
    background-color: ${secondaryColor}
}

@media (min-width: 1100px) {
    margin-right: calc(100vw * 0.1);
}

@media (max-width: 1023px) {
    margin-right: 100px;
}

@media (max-width: 700px) {
    display: none
}
`;

const MainContent = styled.div`
width: 100%
`;

const LeftNavigationContainer = styled.div`
@media (min-width: 1101px) {
    display: none
}
width: 80%;
border-right: 1px solid ${borderGrey}
border-bottom: 1px solid ${borderGrey}
position: absolute
top: 0
left: 0
height: 100vh
background-color: ${white}
z-index: 999;
@media (max-height: 548px) {
    height: 150vh
}
`;

const RightNavigationContainer = styled.div`
display: ${props => props.hide ? 'none': 'block'}
@media (max-width: 568px) {
    display: none
}
width: 20%;
border: 1px solid ${borderGrey}
border-bottom: none
position: absolute
top: 80px
right: 0
background-color: ${white}
z-index: 999;
`;

const SideNavHeader = styled.div`
padding-left: ${paddingLarge}
height: ${headerHeight}
display: flex
flex-direction: row
align-items: center

> div {
    padding-right: ${paddingMedium}
}
`;

const SideNavList = styled.div`
padding-top: ${paddingSmall}
padding-left: ${paddingLarge}
`;

const SideNavItem = styled(NavLink)`
display: flex
align-items: center
height: ${lineHeightXL}
border-bottom: 1px solid ${borderGrey}
cursor: pointer
font-size: 16px;
text-decoration: none
color: ${black}
`;

const RightNavItem = styled(NavLink)`
display: flex
align-items: center
height: ${lineHeightXL}
border-bottom: 1px solid ${borderGrey}
cursor: pointer
text-decoration: none
color: ${black}
padding: 0 ${paddingSmall}

&:hover {
    background: ${primaryColor}
    color: ${white}
}
`;

const StyledUserMenu = styled.div`
height: 80px
padding-left: ${paddingSmall}
display: flex
flex-direction: row
align-items: center
> div {
    padding-right: ${paddingSmall}
}
&:hover {
    cursor: pointer
}
`;

const TitleHeaderText = styled.div`
display: flex;
flex-type: row;
font-size: 3em;

@media (max-width: 568px) {
    justify-content: center;
    padding-top: 36px;
}

margin-bottom: 4px;
color: ${primaryColor}
> div {
   font-weight: 700;
}
`;

const SubTitleText = styled.div`
font-weight: 500;
font-size: 24px;
line-height: 29px;
color: ${secondaryColor}
padding-bottom: 24px;

@media (max-width: 568px) {
    font-size: 18px;
}
`;

const HeaderContainer = styled.div`
cursor: pointer;

@media (max-width: 568px) {
    text-align: center;
}

`;

export {
    AppHeader,
    AppLogoContainer,
    AppNavigationLogin,
    AppNavigationLoginMobile,
    StyledLink,
    StyledLinkPayment,
    MainContent,
    LeftNavigationContainer,
    RightNavigationContainer,
    SideNavHeader,
    SideNavList,
    SideNavItem,
    RightNavItem,
    IconContainer,
    StyledUserMenu,
    TitleHeaderText,
    SubTitleText,
    HeaderContainer
};