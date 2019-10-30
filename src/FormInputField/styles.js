import styled from 'styled-components';
import idx from 'idx';
import InputWrapper from '../InputWrapper';

import {
    borderRadius,
    borderGrey,
    paddingSmall,
    marginXs,
    bodyRegularFontSize,
    formFieldTooltipFontSize,
    paddingXs,
    validationGreen,
    errorColor, paddingXxs,
    lightGrey
} from '../constants/styles'

const StyledInput = styled(InputWrapper)`
border-radius: ${borderRadius}
border: 1px solid ${props => props.error ? errorColor : props.valid ? validationGreen : borderGrey}
${props => props.disabled && `background-color: ${lightGrey}`}
width: 100%
box-sizing: border-box
padding: ${paddingSmall}
margin-top: ${marginXs}
margin-bottom: ${marginXs}
outline: 0;
`;

const StyledFormInput = styled.div`
input {
    font-size: ${bodyRegularFontSize}
}
`;

const FormTitleWrapper = styled.div`
display: flex;
flex-direction: row;
height: 24px;
margin-top: ${props => props.marginTop ? props.marginTop : '12px'};
align-items: center;
`;

const FormInputWrapper = styled.div`
display: flex;
flex-direction: row;
`;

const FormError = styled.div`
color: ${errorColor}
`;

const DropdownContainer = styled.div`
display: flex;
flex-direction: row;
margin-top: ${marginXs}
width: 100%
`;

const CheckmarkContainer = styled.span`
flex: 0 1 10%
min-width: 24px
padding-left: ${paddingXs}
`;

const StyledTitle = styled.div`
${props => (idx(props, _ => _.textColor) || null) ? 'color: ' + props.textColor : ''}
${props => (idx(props, _ => _.textSize) || null) ? 'font-size: ' + props.textSize : ''}
min-height: 16px;
padding-right: ${paddingXs}
`;

const DollarSign = styled.div`
z-index: 5;
font-weight: 500;
padding-left: ${paddingXs}
position: absolute;
${props => (idx(props, _ => _.userOS) || null) ? 'margin-top: 21px' : 'margin-top: 17px'}

`;

const DollarInput = styled(StyledInput)`
padding-left: 18px;
`;

const TooltipIcon = styled.div`
display: flex;
flex-direction: row;
align-items: center;
>div {
font-size: ${formFieldTooltipFontSize}
padding-right: ${paddingSmall}
}
`;

const Tooltip = styled.div`
position: absolute;
z-index: 10
>img {
    height: ${props=> idx(props, _=>_.height) || '144px'};
}
width: 235px
`;

const StyledTooltipContainer = styled.div`
height: ${props => idx(props, _ => _.height) || '24px'};
width: ${props => idx(props, _ => _.width) || '24px'};
cursor: pointer;
`;

const ExpirationDateContainer = styled.div`
padding-right: ${paddingXxs};
`;

export {
    StyledInput,
    StyledFormInput,
    StyledTitle,
    DollarSign,
    DollarInput,
    TooltipIcon,
    Tooltip,
    StyledTooltipContainer,
    FormTitleWrapper,
    FormInputWrapper,
    CheckmarkContainer,
    DropdownContainer,
    FormError,
    ExpirationDateContainer
}