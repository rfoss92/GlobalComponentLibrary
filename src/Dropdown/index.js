import React, { Component } from 'react';
import PropTypes from 'prop-types';
import onClickOutside from "react-onclickoutside";
import Icon from "../Icon";

import {
    DropdownContainer, 
    DropdownHeader, 
    DropdownItemContainer, 
    DropdownList, 
    TitleWrapper,
    StyledTitle,
    DropdownWrapper,
} from './styles';

import {
    textGrey,
    formFieldTitleFontSize
} from '../constants/styles';

const SCROLL_CONSTANT = 69;

class Dropdown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listOpen: false,
            dropdownSelectedKey: 0,
            value: null,
            temporaryList: [],
            index: 0,
            width: null
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.value !== this.props.value) {
            const { itemList, value } = this.props;
            const index = itemList.indexOf(value);
            this.setState({dropdownSelectedKey: index});
        }
        const { itemList, value } = this.props;
        const index = itemList.indexOf(value);
        this.refs.dropdownList.scrollTop = index * SCROLL_CONSTANT;
    }

    onInput = event => {
        const value = event.key;
        const { itemList, onChange } = this.props;
        let selectedItem = '';
        let temporaryList = [];
        let index = this.state.index;

        for (let i = 0; i < itemList.length; i++) {
            if (!isNaN(itemList[i]) && itemList[i].toString().includes(value)) {
                selectedItem = itemList[i];
                break;
            } else if (typeof itemList[i] === 'string'){
                if (itemList[i][0].toUpperCase() == value.toUpperCase()) {
                    temporaryList = temporaryList.concat(itemList[i]);
                    selectedItem = temporaryList[index];
                }
            }
        }

        if (index > temporaryList.length - 2) {
            index = 0;
        } else {
            index++;
        }

        if (this.state.dropdownSelectedKey != selectedItem) {
            onChange(selectedItem);
            this.setState({
                value: selectedItem,
                index
            });
        }
    }

    handleClickOutside = (evt) => {
        this.setState({
            listOpen: false
        })
    }

    toggleList = () => {
        let temporaryList = [];
        temporaryList = temporaryList.concat(this.props.itemList);

        this.setState(prevState => ({
            listOpen: !prevState.listOpen,
            temporaryList
        }))
    }

    handleItemClick = (item, index) => {
        this.props.onChange(item);
        this.setState({
            listOpen: !this.state.listOpen,
            dropdownSelectedKey: index,
        });
    }

    handleKeyPress = (event) => {
        const { itemList, onChange } = this.props;
        const { listOpen, dropdownSelectedKey } = this.state;
        let key = null;

        if (event.key === 'ArrowUp') {
            event.view.event.preventDefault();
            this.refs.dropdownList.scrollTop -= SCROLL_CONSTANT;
            
            if (dropdownSelectedKey > 0) {
                key = dropdownSelectedKey - 1;
            } else {
                key = itemList.length - 1;
            }
            onChange(itemList[key]);
            this.setState({ dropdownSelectedKey: key });
        }

        if (event.key === 'ArrowDown') {
            event.view.event.preventDefault();
            this.refs.dropdownList.scrollTop += SCROLL_CONSTANT;

            if (dropdownSelectedKey < itemList.length - 1) {
                key = dropdownSelectedKey + 1;
            } else {
                key = 0;
            }
            onChange(itemList[key]);
            this.setState({ dropdownSelectedKey: key });
        }

        if (event.key === 'Enter') {
            event.view.event.preventDefault();
            key = dropdownSelectedKey;
            onChange(itemList[key]);
            this.setState({ listOpen: !listOpen });
        }
    }

    determineSelectedStatus = (itemKey) => itemKey === this.state.dropdownSelectedKey

    render() {
        const { itemList, value, label, showArrow, valid, width } = this.props;
        const { listOpen } = this.state;

        return (
            <DropdownWrapper>
                <TitleWrapper>
                    <StyledTitle 
                        textColor={textGrey}
                        textSize={formFieldTitleFontSize}
                    >
                        {label}
                    </StyledTitle>
                </TitleWrapper>
                <DropdownContainer tabIndex="0" onKeyDown={(e) => this.handleKeyPress(e)} onKeyPress={(event) => this.onInput(event)}>   
                    <DropdownHeader valid={valid} onClick={() => this.toggleList()}>
                        <div>{value}</div>
                        {showArrow ? <div><Icon name='IconDropdownArrows'/></div> : null}
                    </DropdownHeader>
                    <DropdownList ref='dropdownList' 
                        style={{
                            display: (listOpen ? 'block' : "none"), 
                            width: (width ? width : "")
                        }}>
                        {itemList.map((item, index) => (
                            <DropdownItemContainer 
                                id={index}
                                selectedKey={this.determineSelectedStatus(index)}
                                key={index}
                                onClick={() => this.handleItemClick(item, index)}
                            >
                                {item}
                            </DropdownItemContainer>
                        ))}
                    </DropdownList>
                </DropdownContainer>
            </DropdownWrapper>
        )
    }
}

Dropdown.defaultProps = {
    label: '',
    itemList: [],
    showArrow: true,
    valid: false
}

Dropdown.propTypes = {

    // The text to show on the top when nothing is selected
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    label: PropTypes.string,

    /** Array of dropdown items.
     * [{
     *      id: 'unique_id_among_items',
     *      title: 'The text to display on the dropdown list',
     * }]
     */
    itemList: PropTypes.array.isRequired,
    onChange: PropTypes.func.isRequired,

    // Show dropdown arrow on the right side
    showArrow: PropTypes.bool,
    valid: PropTypes.bool
}

export default onClickOutside(Dropdown);