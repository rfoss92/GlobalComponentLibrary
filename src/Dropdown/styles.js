import styled from 'styled-components';
import idx from 'idx';
import {
    lightGrey, 
    borderGrey, 
    borderRadius, 
    buttonHeightReg, 
    paddingSmall,
    lightBlue,
    paddingXs,
    green
} from '../constants/styles';

const DropdownContainer = styled.div`
@media (min-width: 922px) {
min-width: ${props => props.minWidth ? props.minWidth : '96px'};
position: relative;
}
outline: none;
`;

const TitleWrapper = styled.div`
display: flex;
flex-direction: row;
height: 24px;
margin-top: ${props => props.marginTop ? props.marginTop : '12px'};
align-items: center;
margin-top: 3px;
margin-bottom: 9px;
`;

const StyledTitle = styled.div`
${props => (idx(props, _ => _.textColor) || null) ? 'color: ' + props.textColor : ''}
${props => (idx(props, _ => _.textSize) || null) ? 'font-size: ' + props.textSize : ''}
min-height: 16px;
padding-right: ${paddingXs}
`;

const DropdownHeader = styled.div`
background: white;
cursor: pointer;
border: solid 1px ${props => props.valid ? green : borderGrey};
border-radius: ${borderRadius};
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
padding: 11px;
font-size: 1em;
float: left;
width: calc(100% - 26px);
`;

const DropdownList = styled.div`
float: left;
z-index: 999;
width: 100%;
max-height: 250px;
overflow-y: auto;
@media (min-width: 922px) {
    position: absolute;
    margin-top: 45px;
}
margin-top: 0;
`;

const DropdownItemContainer = styled.div`
height: ${buttonHeightReg}
padding: ${paddingSmall}
background: ${props => props.selectedKey ? lightBlue : lightGrey};
color: ${props => props.selectedKey && 'white'}
border: solid 1px ${borderGrey}
border-top: none;
display: flex;
align-items: center;
cursor: pointer;

:hover {
    background: ${lightBlue}
    color: white
}
`;

const CheckmarkContainer = styled.div`
height: 100%;
width: 48px;
`;

const DropdownWrapper = styled.div`
padding-top: 8px;
`;

const IconContainer = styled.div`
transform: translate(-50px, 12px);
cursor: pointer;
width: 10px;
float: right;
height: 10px;
position: relative;
right: -40px;
top: -45px;
}
`

export {
    DropdownContainer, 
    DropdownHeader, 
    DropdownList, 
    DropdownItemContainer, 
    CheckmarkContainer,
    TitleWrapper,
    StyledTitle,
    DropdownWrapper,
    IconContainer
}