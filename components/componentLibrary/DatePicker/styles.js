import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import idx from 'idx';
import { borderGrey, borderRadius, errorColor, validationGreen } from "../../constants/styles";

const StyledDatePicker = styled(DatePicker)`
border: 1px solid ${borderGrey};
${props => props.valid ? ('border: 1px solid ' + validationGreen) : ''}
${props => props.error ? ('border: 1px solid ' + errorColor) : ''}
border-radius: ${borderRadius};
width: ${props => props.width ? props.width : '120px'};
color: #555;
font-size: 14px;

// hotfix: mac and windows display padding differently
${props => (idx(props, _ => _.isMacLike) || null) ? 'padding: 12px' : 'padding: 13.5px'}
`;

export {
    StyledDatePicker
}