import React, { Component } from 'react';
import SectionHeader from "./SectionHeader";
import SectionMain from "./SectionMain";

class SectionContainer extends Component {
    render() {
        const {title = '', children} = this.props;
        return (
            <>
                <SectionMain {...this.props}>
                    <SectionHeader title={title} />
                    {children}
                </SectionMain>
            </>
        );
    }
}

export default SectionContainer;