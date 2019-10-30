import styled from 'styled-components';

import {
    paddingMedium,
    white,
    borderRadius,
    backgroundColor,
    primaryColor,
} from "../constants/styles";

const StyledSectionHeader = styled.div`
padding: ${paddingMedium}
background-color: ${primaryColor}
color: ${white}
font-weight: 500;
font-size: 18px;
border-radius: 5px 5px 0 0;
`;

const SectionMainStyles = styled.div`
${props => props.height ? 'height: ' + props.height : ''}
border-radius: ${borderRadius} ${borderRadius} 0px 0px;
background-color: ${props=> props.sectionMainBackgroundColor ? props.sectionMainBackgroundColor : 'white'}
${props => props.border ? 'border: ' + props.border : ''}
overflow: visible;
min-height: 40vh;
`;

export {
    StyledSectionHeader, 
    SectionMainStyles
}