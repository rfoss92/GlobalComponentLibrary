import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyledAccordionItemButton, StyledAccordionItemPanel, StyledAccordionItem, AccordionArrow, AccordionLabel } from './styles';

class AccordionSection extends Component {
  static propTypes = {
    children: PropTypes.instanceOf(Object).isRequired,
    isOpen: PropTypes.bool.isRequired,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  };

  onClick = () => {
    this.props.onClick(this.props.label);
  };

  render() {
    const {
      onClick,
      props: { isOpen, label },
    } = this;

    return (
      <StyledAccordionItem>
        <StyledAccordionItemButton onClick={onClick}>
          <AccordionLabel>{label}</AccordionLabel>
          <AccordionArrow isOpen={isOpen} />
        </StyledAccordionItemButton>
        {isOpen && (
          <StyledAccordionItemPanel>
            {this.props.children}
          </StyledAccordionItemPanel>
        )}
      </StyledAccordionItem>
    );
  }
}

export default AccordionSection;