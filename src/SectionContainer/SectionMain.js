import React, { Component } from 'react';
import {SectionMainStyles} from "./styles";

class SectionMain extends Component {
    render() {
        return (
            <SectionMainStyles {...this.props}>
                {this.props.children}
            </SectionMainStyles>
        );
    }
}

export default SectionMain;