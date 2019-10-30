import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Row from '../Row';
import Column from '../Column';

import {
    CardContainer, CardHeader, HeaderTab, CardContent, HeaderSection
} from './styles';

class TabbedCard extends Component {
    constructor(props) {
        super(props);

        const label = props.children[0].props.label;
        const mobileLabel = props.children[0].props.mobileLabel;
        const screenWidth = window.innerWidth;
        const isMobile = screenWidth <= 1300;

        this.state = {
            activeTab: isMobile ? mobileLabel: label,
            label,
            mobileLabel,
            width: window.innerWidth
        }
    }

    componentWillMount() {
        window.addEventListener('resize', this.handleWindowSizeChange);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowSizeChange);
    }

    handleWindowSizeChange = () => {
        const { label, mobileLabel } = this.state;

        const width = window.innerWidth;
        const isMobile = width <= 1300;
        const activeTab = isMobile ? mobileLabel : label;
        this.setState({ width, activeTab });
    }

    handleTabOnClick = (activeTab, label, mobileLabel) => {
        this.setState({activeTab, label, mobileLabel });
    }

    render() {
        const { children } = this.props;
        const { activeTab, width } = this.state;
        const isMobile = width <= 1300;

        return (
            <CardContainer>
                <CardHeader>
                    {children.map((child, index) => {
                        const label = child.props.label;
                        const mobileLabel = child.props.mobileLabel;
                        let activeLabel = label;
                        if (isMobile) activeLabel = mobileLabel;

                        return (
                            <Column 
                                xs={isMobile ? child.props.mobileSize : child.props.size} 
                                onClick={() => this.handleTabOnClick(activeLabel, label, mobileLabel)}
                            >
                                <HeaderSection 
                                    first={index === 0}
                                    selected={activeLabel === activeTab}
                                >
                                    <HeaderTab selected={activeLabel === activeTab}>{activeLabel}</HeaderTab>
                                </HeaderSection>
                            </Column>
                        );
                    })}
                </CardHeader>
                <CardContent>
                    {children.map(child => {
                        const label = child.props.label;
                        const mobileLabel = child.props.mobileLabel;
                        let activeLabel = label;
                        if (isMobile) activeLabel = mobileLabel;

                        if (activeLabel !== activeTab) return <div />
                        return child.props.children;
                    })}
                </CardContent>
            </CardContainer>
        );
    }
 }

TabbedCard.propTypes = {
    children: PropTypes.instanceOf(Array).isRequired,
};

export default TabbedCard;