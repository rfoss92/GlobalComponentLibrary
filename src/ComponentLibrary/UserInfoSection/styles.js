import styled from 'styled-components';
import {
    black,
    header2FontSize,
    borderGrey,
    borderRadius,
    paddingSmall,
    paddingXs,
    primaryColor,
    secondaryColor,
    white,
    bodyRegularFontSize
} from "../../constants/styles";
import {NavLink} from "react-router-dom";

const UserInfoItem = styled.div`
height: 100%
font-size: ${header2FontSize}
color: ${secondaryColor}
`;

const UserInfoItemId = styled(UserInfoItem)`
font-size: ${bodyRegularFontSize}
color: ${black}
padding-top: 4px;
`;

const StyledButton = styled.div`
display: flex
flex-orientation: row
justify-content: center
align-items: center
cursor: pointer
padding: ${paddingSmall}
border-radius: ${borderRadius}
border: 1px solid ${borderGrey}
color: ${black}
text-decoration: none;
font-weight: bold;
background-color: ${white}
&:hover {
    background-color: ${secondaryColor}
    color: ${white};
}
> div {
padding-right: ${paddingXs};
}
`;

const UserInfoSectionContainer = styled.div`
padding-bottom: 24px;
`;

export {
    UserInfoItem,
    UserInfoItemId,
    StyledButton,
    UserInfoSectionContainer
}