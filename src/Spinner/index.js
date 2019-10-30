import React, { Component } from 'react';
import { StyledSpinner } from './styles';

class Spinner extends Component {
    render () {
        const props = this.props;
        return (
            <StyledSpinner {...props}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </StyledSpinner>
        );
    }

}

export default Spinner;