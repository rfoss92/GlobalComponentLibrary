import styled from 'styled-components';
import {
    buttonHeightReg,
    borderRadius,
    lightGrey,
    white,
    secondaryColor,
    black,
} from '../../constants/styles'

const SecondaryButton = styled.button`
display: flex
width: 100%
align-items: center
justify-content: center
line-height: 0;
border-radius: ${borderRadius}
height: ${buttonHeightReg}
cursor: pointer
font-size: 1em;
outline: 0;
background-color: #f6f6f6;
border: 1px solid #9B9B9B;
&:hover {
    background-color: #e3e3e3;
}
&:disabled {
    background-color: #c2c2c2;
    color: ${black};
    cursor: auto;
    border: none;
}
`;

const PrimaryButton = styled.button`
display: flex
width: 100%
align-items: center
justify-content: center
line-height: 0;
border-radius: ${borderRadius}
height: ${buttonHeightReg}
cursor: pointer
color: ${white}
font-size: 1em;
outline: 0;
background-color: ${secondaryColor}
border: 1px solid #fd6c00;
&:hover {
    background-color: #fd6c00;
}
&:disabled {
    background-color: #c2c2c2
    color: ${black}
    cursor: auto
    border: none;
}
`;

const DisabledButton = styled.button`
display: flex
width: 100%
align-items: center
justify-content: center
line-height: 0;
border: none;
border-radius: ${borderRadius}
cursor: auto;
height: ${buttonHeightReg}
color: ${black}
font-size: 1em;
outline: 0;
background-color: #c2c2c2
`;

export {
    SecondaryButton,
    PrimaryButton,
    DisabledButton
}