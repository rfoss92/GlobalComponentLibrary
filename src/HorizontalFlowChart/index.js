import React, {Component} from 'react';
import PropTypes from 'prop-types';
import idx from 'idx';
import NumberedItem from './NumberedItem';
import { 
    StyledHorizontalFlowChart, 
    LineConnector,
    MobileFlowContainer,
    MobilePageHeader,
    MobileStepCounter
} from './styles';

class HorizontalFlowChart extends Component {
    constructor() {
        super();
        this.state = {
            width: window.innerWidth,
        }
    }

    componentWillMount() {
        window.addEventListener('resize', this.handleWindowSizeChange);
    }
      
    componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowSizeChange);
    }
    
    handleWindowSizeChange = () => {
        this.setState({ width: window.innerWidth });
    }

    getNumberedItem = (flowItem) => {
        const {
            currentStep, 
            numberBackgroundColor, 
            textColor, 
            selectedNumberBackgroundColor, 
            selectedTextColor
        } = this.props;

        return (
            <NumberedItem
                key={flowItem.number}
                number={flowItem.number}
                text={flowItem.itemName}
                numberBackgroundColor={(flowItem.number <= currentStep) ? selectedNumberBackgroundColor : numberBackgroundColor}
                textColor={(flowItem.number <= currentStep) ? selectedTextColor : textColor}
                completed={flowItem.number < currentStep}
            />
        )
    }

    render() {
        const { 
            flowItems, 
            currentStep, 
            textColor, 
            selectedTextColor 
        } = this.props;

        const { width } = this.state;
        const isMobile = width <= 800;
        const step = (currentStep > flowItems.length) ? flowItems.length : currentStep;

        if (isMobile) {
            return (
                <MobileFlowContainer>
                    <MobileStepCounter>
                        Step {step} of {flowItems.length}
                    </MobileStepCounter>
                    <MobilePageHeader>
                        {idx(flowItems[step-1], _=>_.itemName) || ''}
                    </MobilePageHeader>
                </MobileFlowContainer>
            );
        }

        let flowItemsSize = flowItems.length;
        let items = flowItems.map((flowItem, i) => {
            if (i === flowItemsSize - 1) {
                return <>{this.getNumberedItem(flowItem)}</>;
            }
            return (
                <>
                    {this.getNumberedItem(flowItem)}
                    <LineConnector key={`line-${flowItem.number}`} color={(flowItem.number <= currentStep) ? selectedTextColor : textColor}>
                        <hr/>
                    </LineConnector>
                </>
            );
        });
        
        return (
            <StyledHorizontalFlowChart>
                {items}
            </StyledHorizontalFlowChart>
        );
    }
}

HorizontalFlowChart.propTypes = {
    /**
     * Format of flowItems array:
     * [
     *  {
     *      number: "1",
     *      itemName: "Personal Information",
     *  }
     *  ...
     * ]
     */
    flowItems: PropTypes.array.isRequired,

    // The current step number (start from 1)
    currentStep: PropTypes.number.isRequired,

    // The background color of number icon in hex code. i.e. #ffffff
    numberBackgroundColor: PropTypes.string.isRequired,

    // The text color in hex code.
    textColor: PropTypes.string.isRequired,

    // The background color of number icon of current selected item.
    selectedNumberBackgroundColor: PropTypes.string.isRequired,

    // The text color of current selected item.
    selectedTextColor: PropTypes.string.isRequired,
}

export default HorizontalFlowChart;