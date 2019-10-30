import React, { Component } from 'react';
import PropTypes from 'prop-types';
import idx from 'idx';
import Icon from "../componentLibrary/Icon";
import { FormInputFieldConstants } from '../constants/componentLibrary';
import Dropdown from '../Dropdown'
import TooltipContainer from './TooltipContainer';
import {
    DOB_REGEX_1,
    DOB_REGEX_2,
    DOB_REGEX_3,
    NUMBER_ONLY_REGEX, US_PHONE_REPLACE_REGEX,
    ZIP_ALLOWED_REGEX
} from "../constants/formValidation";

import {
    StyledInput,
    StyledFormInput,
    StyledTitle,
    DollarSign,
    DollarInput,
    Tooltip,
    FormTitleWrapper,
    FormInputWrapper,
    CheckmarkContainer,
    DropdownContainer
} from './styles';

import {
    formFieldTitleFontSize, 
    primaryColor, 
    textGrey
} from "../constants/styles";


class FormInputField extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showTooltip: false
        }
    }

    inputFocusBlurHandler = (entryOrNull) => {
        const {inputFocusBlurHandler} = this.props;
        return inputFocusBlurHandler && inputFocusBlurHandler(entryOrNull)
    }

    validateNumberInput = (event) => {
        let theEvent = event || window.event;

        // Handle paste
        let key = '';
        if (theEvent.type === 'paste') {
            key = event.clipboardData.getData('text/plain');
        } else {
            // Handle key press
            key = theEvent.keyCode || theEvent.which;
            key = String.fromCharCode(key);
        }

        if (!NUMBER_ONLY_REGEX.test(key)) {
            theEvent.returnValue = false;
            if (theEvent.preventDefault) theEvent.preventDefault();
        }
    }

    validateZipInput = (event) => {
        let theEvent = event || window.event;

        // Handle paste
        let key = '';
        if (theEvent.type === 'paste') {
            key = event.clipboardData.getData('text/plain');
        } else {
            // Handle key press
            key = theEvent.keyCode || theEvent.which;
            key = String.fromCharCode(key);
        }

        if (!ZIP_ALLOWED_REGEX.test(key)) {
            theEvent.returnValue = false;
            if (theEvent.preventDefault) theEvent.preventDefault();
        }
    }

    showOrHideTooltip = (forceHide=false) => {
        const {showTooltip} = this.state;

        this.setState({
            showTooltip: forceHide ? false : !showTooltip
        });
    }

    getTooltipIcon = () => {
        return (
            <TooltipContainer
                onClick={() => this.showOrHideTooltip()}
                height={'24px'}
                width={'24px'}
                handleTooltipClose={() => this.showOrHideTooltip(true)}>
                <Icon name={'IconCircleText'} text={'?'}/>
                {this.props.hasTooltip && this.state.showTooltip ? this.getTooltipView() : null}
            </TooltipContainer>
        );
    }

    getTooltipView = () => {
        const {tooltipImageSrc, tooltipHeight} = this.props;
        return (
            <Tooltip height={tooltipHeight}>
                <img src={tooltipImageSrc}/>
            </Tooltip>
        );
    }

    getCheckmarkContainer = (valid) => {
        const { notShowCheckmark } = this.props;
        return (
            notShowCheckmark ? null : <CheckmarkContainer>
                {valid ? <Icon name={'IconConfirmationCheck'} fill={primaryColor}/> : null}
            </CheckmarkContainer>
        )
    }

    render() {
        let {
            entry, 
            formType, 
            onInput, 
            value, 
            valid, 
            textColor, 
            textSize, 
            maxLength, 
            hasTooltip,
            dropdownTitle, 
            dropdownList, 
            dropdownShowArrow,
            disabled
        } = this.props;

        const isMacLike = /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform);

        const formTypes = FormInputFieldConstants.formTypes;
        let view = <div/>;
        switch (formType) {
            case formTypes.text:
                view = <StyledFormInput>
                    <FormTitleWrapper>
                        <StyledTitle textColor={textColor} textSize={textSize}>{entry.title}</StyledTitle>
                    </FormTitleWrapper>
                    <FormInputWrapper>
                        <StyledInput
                            key={entry.key}
                            value={value}
                            valid={valid}
                            error={idx(this.props, _=>_.error) || undefined}
                            placeholder={idx(entry, _=>_.placeholder) || ''}
                            entry={entry}
                            maxLength={maxLength}
                            onInput={onInput}
                            onFocus={() => this.inputFocusBlurHandler(this.props.entry)}
                            onBlur={() => this.inputFocusBlurHandler({})}
                            disabled={disabled}
                        />
                    </FormInputWrapper>
                </StyledFormInput>;
                break;
            case formTypes.password:
                view = <StyledFormInput>
                    <FormTitleWrapper>
                        <StyledTitle textColor={textColor} textSize={textSize}>{entry.title}</StyledTitle>
                    </FormTitleWrapper>
                    <FormInputWrapper>
                        <StyledInput
                            key={entry.key}
                            value={value}
                            valid={valid}
                            error={idx(this.props, _=>_.error) || undefined}
                            placeholder={idx(entry, _=>_.placeholder) || ''}
                            entry={entry}
                            onInput={onInput}
                            type={'password'}
                            onFocus={() => this.inputFocusBlurHandler(this.props.entry)}
                            onBlur={() => this.inputFocusBlurHandler({})}
                            disabled={disabled}
                        />
                    </FormInputWrapper>
                </StyledFormInput>;
                break;
            case formTypes.number:
                view = <StyledFormInput>
                    <FormTitleWrapper>
                        <StyledTitle textColor={textColor} textSize={textSize}>{entry.title}</StyledTitle>
                        {hasTooltip ? this.getTooltipIcon() : <div/>}
                    </FormTitleWrapper>
                    <FormInputWrapper>
                        <StyledInput
                            key={entry.key}
                            value={value}
                            valid={valid}
                            error={idx(this.props, _=>_.error) || undefined }
                            placeholder={idx(entry, _=>_.placeholder) || ''}
                            entry={entry}
                            onKeyPress={(event) => this.validateNumberInput(event)}
                            maxLength={maxLength}
                            onInput={onInput}
                            onFocus={() => this.inputFocusBlurHandler(this.props.entry)}
                            onBlur={() => this.inputFocusBlurHandler({})}
                            disabled={disabled}
                        />
                    </FormInputWrapper>
                </StyledFormInput>;
                break;
            case formTypes.maskedNumber:
                view = <StyledFormInput>
                    <FormTitleWrapper>
                        <StyledTitle textColor={textColor} textSize={textSize}>{entry.title}</StyledTitle>
                        {hasTooltip ? this.getTooltipIcon() : <div/>}
                    </FormTitleWrapper>
                    <FormInputWrapper>
                        <StyledInput
                            key={entry.key}
                            value={value}
                            valid={valid}
                            error={idx(this.props, _=>_.error) || undefined }
                            placeholder={idx(entry, _=>_.placeholder) || ''}
                            entry={entry}
                            onKeyPress={(event) => this.validateNumberInput(event)}
                            maxLength={maxLength}
                            onInput={onInput}
                            type={'password'}
                            onFocus={() => this.inputFocusBlurHandler(this.props.entry)}
                            onBlur={() => this.inputFocusBlurHandler({})}
                            disabled={disabled}
                        />
                    </FormInputWrapper>
                </StyledFormInput>;
                break;
            case formTypes.zipCode:
                view = <StyledFormInput>
                    <FormTitleWrapper>
                        <StyledTitle textColor={textColor} textSize={textSize}>{entry.title}</StyledTitle>
                        {hasTooltip ? this.getTooltipIcon() : <div/>}
                    </FormTitleWrapper>
                    <FormInputWrapper>
                        <StyledInput
                            key={entry.key}
                            value={value}
                            valid={valid}
                            error={idx(this.props, _=>_.error) || undefined }
                            placeholder={idx(entry, _=>_.placeholder) || ''}
                            entry={entry}
                            onKeyPress={(event) => this.validateZipInput(event)}
                            maxLength={maxLength}
                            onInput={onInput}
                            onFocus={() => this.inputFocusBlurHandler(this.props.entry)}
                            onBlur={() => this.inputFocusBlurHandler({})}
                            disabled={disabled}
                        />
                    </FormInputWrapper>
                </StyledFormInput>;
                break;
            case formTypes.currency:
                view = <StyledFormInput>
                    <FormTitleWrapper>
                        <StyledTitle textColor={textColor} textSize={textSize}>{entry.title}</StyledTitle>
                    </FormTitleWrapper>
                    <FormInputWrapper>
                        <div style={{display: 'flex', flexDirection: 'row', width: '100%'}}>
                            <DollarSign userOS={isMacLike}>$</DollarSign>
                            <DollarInput
                                key={entry.key}
                                value={value}
                                valid={valid}
                                error={idx(this.props, _=>_.error) || undefined }
                                placeholder={idx(entry, _=>_.placeholder) || ''}
                                entry={entry}
                                onKeyPress={(event) => this.validateNumberInput(event)}
                                maxLength={maxLength}
                                onInput={onInput}
                                onFocus={() => this.inputFocusBlurHandler(this.props.entry)}
                                onBlur={() => this.inputFocusBlurHandler({})}
                                disabled={disabled}
                            /></div>
                    </FormInputWrapper>
                </StyledFormInput>
                break;
            case formTypes.dropdown:
                view = <StyledFormInput>
                    <FormTitleWrapper>
                        <StyledTitle textColor={textGrey}
                                     textSize={formFieldTitleFontSize}>{entry.title}</StyledTitle>
                    </FormTitleWrapper>
                    <FormInputWrapper>
                        <DropdownContainer>
                            <Dropdown
                                title={dropdownTitle}
                                list={dropdownList}
                                valid={valid}
                                selectedId={value}
                                toggleItem={(item) => onInput(item)}
                                showArrow={dropdownShowArrow}
                                disabled={disabled}
                            />
                        </DropdownContainer>
                    </FormInputWrapper>
                </StyledFormInput>
                break;
            case formTypes.dob:
                let inputDate = value;
                // add slashes to date.
                let displayDate = inputDate;
                displayDate = inputDate.replace(DOB_REGEX_1,'$1/$2').replace(DOB_REGEX_2,'$1/$2').replace(DOB_REGEX_3,'')
                view = <StyledFormInput>
                    <FormTitleWrapper>
                        <StyledTitle textColor={textColor} textSize={textSize}>{entry.title}</StyledTitle>
                        {hasTooltip ? this.getTooltipIcon() : <div/>}
                    </FormTitleWrapper>
                    <FormInputWrapper>
                        <StyledInput
                            key={entry.key}
                            value={displayDate}
                            valid={valid}
                            error={idx(this.props, _=>_.error) || undefined }
                            placeholder={idx(entry, _=>_.placeholder) || ''}
                            entry={entry}
                            onKeyPress={(event) => this.validateNumberInput(event)}
                            maxLength={maxLength}
                            onInput={onInput}
                            onFocus={() => this.inputFocusBlurHandler(this.props.entry)}
                            onBlur={() => this.inputFocusBlurHandler({})}
                            disabled={disabled}
                        />
                    </FormInputWrapper>
                </StyledFormInput>;
                break;
            case formTypes.usPhone:
                let inputPhone = value;
                // add slashes to date.
                let displayPhone = inputPhone;
                displayPhone = inputPhone.replace(US_PHONE_REPLACE_REGEX, "($1) $2-$3");
                view = <StyledFormInput>
                    <FormTitleWrapper>
                        <StyledTitle textColor={textColor} textSize={textSize}>{entry.title}</StyledTitle>
                        {hasTooltip ? this.getTooltipIcon() : <div/>}
                    </FormTitleWrapper>
                    <FormInputWrapper>
                        <StyledInput
                            key={entry.key}
                            value={displayPhone}
                            valid={valid}
                            error={idx(this.props, _=>_.error) || undefined }
                            placeholder={idx(entry, _=>_.placeholder) || ''}
                            entry={entry}
                            onKeyPress={(event) => this.validateNumberInput(event)}
                            maxLength={14}
                            onInput={onInput}
                            onFocus={() => this.inputFocusBlurHandler(this.props.entry)}
                            onBlur={() => this.inputFocusBlurHandler({})}
                            disabled={disabled}
                        />
                    </FormInputWrapper>
                </StyledFormInput>;
                break;
            default:
                break;

        }
        return view;
    }
}

FormInputField.propTypes = {
    /* Entry object

      example:
      {
        key: "mrn", // required. a unique identifier.
        title: "MRN", //required
        placeholdert: "Enter Medical Record Number", // Optional
        type: "datetimepicker" //optional -> possible types: datetimepicker
      }

    */
    value: PropTypes.string,
    valid: PropTypes.bool,
    error: PropTypes.bool, // if true => red border
    notShowCheckmark: PropTypes.bool, // once enabled, the Checkmark after input field will not show
    entry: PropTypes.object.isRequired,
    formType: PropTypes.string.isRequired,
    onInput: PropTypes.func.isRequired,
    inputFocusBlurHandler: PropTypes.func.isRequired,
    textColor: PropTypes.string,
    textSize: PropTypes.string,
    maxLength: PropTypes.number,
    disabled: PropTypes.bool,

    hasTooltip: PropTypes.bool,
    tooltipImageSrc: PropTypes.string,
    tooltipHeight: PropTypes.string,

    // Special for Dropdown
    dropdownTitle: PropTypes.string,
    dropdownList: PropTypes.array,
    dropdownShowArrow: PropTypes.bool
}

export default FormInputField;