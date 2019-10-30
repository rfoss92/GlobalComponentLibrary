import React, { Component } from 'react';
import { StyledSectionHeader } from "./styles";

class SectionHeader extends Component {
    render() {
        const {title = ''} = this.props;
        return (
            <StyledSectionHeader style={{ overflow: 'visible' }}>{title}</StyledSectionHeader>
        )
    }
}

export default SectionHeader;