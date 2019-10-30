import {
    EMAIL_REGEX,
    MIN_CREDIT_CARD_LENGTH,
    MIN_CVC_LENGTH,
    US_PHONE_REGEX,
    ZIP_REGEX,
    NUMBER_ONLY_REGEX
} from "../constants/formValidation";

    // Validation of form
const validateIDNumber = (idNumber) => {
    return !!(idNumber && idNumber.length >= 2);
}

const validateNonEmpty = (name) => {
    return !!(name && name.length > 0);
}


const validateCardNumber = (cardNumber) => {
    cardNumber = cardNumber.replace(/-/g,'');
    return !!(cardNumber && cardNumber.length >= MIN_CREDIT_CARD_LENGTH);
}

const validateCVC = (cvc) => {
    return !!(cvc && cvc.length >= MIN_CVC_LENGTH)
}

const validateAmount = (amount) => {
    let decimalValid = true;
    if (amount) {
        const decimal_index = amount.indexOf('.');
        if(decimal_index > -1){
            const decimals = amount.substring(decimal_index, amount.length + 1);
            if(decimals.length > 3){
                decimalValid = false;
            }
        }
        const decimals = amount.split('.').length-1;
        if (decimals > 1) {
            decimalValid = false;
        }
    }
    return !!(amount && amount.length > 0 && decimalValid);
}

const validateZip = (zip) => {
    return ZIP_REGEX.test(zip);
}

const validatePhone = (phone) => {
    return !!(phone && US_PHONE_REGEX.test(phone));
}

const validateEmail = (email) => {
    return !!(email && EMAIL_REGEX.test(email))
}

const validateNumberInput = (event) => {
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

export {
    validateIDNumber,
    validateNonEmpty,
    validateCardNumber,
    validateCVC,
    validateAmount,
    validateZip,
    validatePhone,
    validateEmail,
    validateNumberInput
};