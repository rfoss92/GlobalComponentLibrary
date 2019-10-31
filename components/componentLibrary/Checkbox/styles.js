import styled from 'styled-components';
import { lineHeightReg, paddingXs, paddingSmall } from '../../constants/styles';

const StyledCheckbox = styled.div`
display: flex;
flex-direction: row;
align-items: center;
height: ${lineHeightReg};
> input {
display: none;
}
`;

const CheckboxContainer = styled.div`
padding-right: ${paddingXs}
width: 24px
padding-top: ${paddingSmall}
height: 100%
cursor: pointer
`;


export {
    StyledCheckbox,
    CheckboxContainer
};