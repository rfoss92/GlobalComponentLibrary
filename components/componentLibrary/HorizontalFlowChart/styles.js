import styled from 'styled-components';
import idx from 'idx';
import {
    backgroundColor, 
    borderGrey, 
    paddingXs,
    primaryColor,
    secondaryColor,
    paddingMedium
} from "../../constants/styles";

const StyledHorizontalFlowChart = styled.div`
background-color: ${backgroundColor}
height: 96px;
border-bottom: 1px solid ${borderGrey}

display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
`;

const MobileFlowContainer = styled.div`
background-color: ${backgroundColor};
height: 96px;
border-bottom: 1px solid ${borderGrey}
`

const MobileStepCounter = styled.div`
font-weight: 500;
font-size: 1.1em;
color: ${primaryColor};
padding-top: 18px;
padding-left: ${paddingMedium};
`;

const MobilePageHeader = styled.div`
font-weight: 500;
font-size: 1.3em;
color: ${secondaryColor};
padding-top: ${paddingXs};
padding-left: ${paddingMedium};
`;

const StyledNumberedItem = styled.div`
display: flex;
flex-direction: row;
align-items: center;
padding-left: ${paddingXs}
padding-right: ${paddingXs}
>div {
    padding: ${paddingXs}
}
`;

const StyledNumber = styled.div`
background-color: ${props => props.numberBackgroundColor}
height: 35px;
width: 35px;
display: flex;
align-items: center;
`;

const StyledText = styled.div`
color: ${props => props.textColor}
font-weight: bold;
`;

const LineConnector = styled.div`
width: 6em;
> hr {
${props => (idx(props, _=> _.color) || null) ? 'border-color: ' + props.color : ''}
}
`;

export {
    StyledHorizontalFlowChart, 
    StyledNumberedItem, 
    StyledNumber, 
    StyledText, 
    LineConnector,
    MobileFlowContainer,
    MobilePageHeader,
    MobileStepCounter
}