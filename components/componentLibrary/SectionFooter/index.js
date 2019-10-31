import React, { Component } from 'react';
import { FooterStyles, StyledLink } from './styles'

class SectionFooter extends Component {
    render () {
        return (
            <FooterStyles><StyledLink to={'privacy'}>Privacy Policy</StyledLink> This site is best viewed using the current version of MS Internet Explorer, Chrome, Safari, and Firefox.
                If you are using an older version of the browser, some features may not work optimally. </FooterStyles>
        );
    }
}

export default SectionFooter;
