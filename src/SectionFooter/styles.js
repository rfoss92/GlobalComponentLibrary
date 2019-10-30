import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { marginXL, footerFontSize, linkColor } from '../constants/styles';

const FooterStyles = styled.div`
margin-top: ${marginXL}
font-size: ${footerFontSize}
text-align: center;
margin-bottom: 16px;
`;

const StyledLink = styled(Link)`
color: ${linkColor}
`;

export { FooterStyles, StyledLink }