import React, { Component } from 'react';
import idx from 'idx';
import Icon from '../componentLibrary/Icon';
import { StyledCheckbox, CheckboxContainer} from "./styles";
import PropTypes from 'prop-types';

class Checkbox extends Component {
    render () {
        const {onChange, checked} = this.props;
        return (
            <StyledCheckbox>
                <input type={'checkbox'} onChange={onChange} checked={checked}/>
                <CheckboxContainer onClick={onChange}>
                    {checked ? <Icon name="IconCheckboxSelected"/> : <Icon name="IconCheckbox"/>}
                </CheckboxContainer>
                <div>{idx(this.props, _=>_.text) || ''}</div>
            </StyledCheckbox>
        )
    }
}

Checkbox.propTypes = {
    text: PropTypes.string,
    checked: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired
}

export default Checkbox