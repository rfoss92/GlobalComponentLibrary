import styled from 'styled-components';
import Row from '../Row';

import {
    secondaryColor,
    primaryColor
} from '../../constants/styles';

const CardContainer = styled.div`
@media (min-width: 568px) {
    border: 1px solid #3C205B;
    border-radius: 4px;
    overflow: hidden;
}
`;

const CardHeader = styled(Row)`
text-align: center;
`;

const HeaderTab = styled.div`
@media (min-width: 568px) {
    color: ${props => props.selected ? primaryColor : 'white'}
}

@media (max-width: 568px) {
    border-bottom: ${props => props.selected && `4px solid ${secondaryColor}`}
    color: #3C205B;
    font-size: 18px;
    padding-bottom: ${props => props.selected ? '8px' : '12px'}
}
`;

const HeaderSection = styled.div`
background: ${props => props.selected ? 'white' : 'linear-gradient(to bottom, #4b2872 0%, #301a49 100%)'};
padding: 20px 12px;
font-size: 21px;
font-weight: 500;
line-height: 25px;
cursor: pointer;

@media (min-width: 568px) {
    ${props => !props.first && 'border-left: 1px solid white'};
}

@media (max-width: 568px) {
    background: white;
    border-bottom: 1px solid #3C205B
    padding: 20px 12px 0 12px;
}
`;

const CardContent = styled.div`
background: white;
min-height: 50vh;
`;

export {
    CardContainer,
    CardHeader,
    HeaderTab,
    CardContent,
    HeaderSection
}