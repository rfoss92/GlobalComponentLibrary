import React from 'react';

import IconCreditCard from './IconCreditCard';
import IconUser from './IconUser';
import IconDocument from './IconDocument';
import IconCircleText from './IconCircleText';
import IconCircleCheckmark from './IconCircleCheckmark';
import IconConfirmationCheck from './IconConfirmationCheck';
import IconDropdownArrows from './IconDropdownArrows';
import IconHamburgerMenu from './IconHamburgerMenu';
import IconCheckbox from './IconCheckbox';
import IconCheckboxSelected from './IconCheckboxSelected';
import IconStatement from './IconStatement';
import IconInsurance from './IconInsurance';
import IconPrint from './IconPrint';
import IconChevronDown from './IconChevronDown';
import IconChevronUp from './IconChevronUp';
import IconChevronLeft from './IconChevronLeft';
import IconChevronRight from './IconChevronRight';
import IconEmail from './IconEmail';
import IconSend from './IconSend';
import IconRadioNotSelected from './IconRadioNotSelected';
import IconRadioSelected from './IconRadioSelected';
import IconToggleOff from './IconToggleOff';
import IconToggleOn from './IconToggleOn';
import PaymentPlan from './PaymentPlan';
import IconChargeHistoryCollapse from './IconChargeHistoryCollapse';
import IconChargeHistoryExpand from './IconChargeHistoryExpand';
import ContactUsPhone from './ContactUsPhone';
import MessageIcon from './MessageIcon';

const Icon = props => {
    switch (props.name) {
        case "IconCreditCard":
            return <IconCreditCard {...props} />;
        case "IconUser":
            return <IconUser {...props} />;
        case "IconDocument":
            return <IconDocument {...props} />;
        case "IconCircleText":
            return <IconCircleText {...props} />;
        case "IconCircleCheckmark":
            return <IconCircleCheckmark {...props} />;
        case "IconConfirmationCheck":
            return <IconConfirmationCheck {...props}/>;
        case "IconDropdownArrows":
            return <IconDropdownArrows {...props}/>;
        case "IconHamburgerMenu":
            return <IconHamburgerMenu {...props}/>;
        case "IconCheckbox":
            return <IconCheckbox {...props}/>;
        case "IconCheckboxSelected":
            return <IconCheckboxSelected {...props}/>;
        case "IconStatement":
            return <IconStatement {...props}/>;
        case "IconInsurance":
            return <IconInsurance {...props}/>;
        case "IconPrint":
            return <IconPrint {...props}/>;
        case "IconChevronDown":
            return <IconChevronDown {...props}/>;
        case "IconChevronUp":
            return <IconChevronUp {...props}/>;
        case "IconChevronLeft":
            return <IconChevronLeft {...props}/>;
        case "IconChevronRight":
            return <IconChevronRight {...props}/>;
        case "IconEmail":
            return <IconEmail {...props}/>;
        case "IconSend":
            return <IconSend {...props}/>;
        case "IconRadioNotSelected":
            return <IconRadioNotSelected {...props}/>;
        case "IconRadioSelected":
            return <IconRadioSelected {...props}/>;
        case "IconToggleOff":
            return <IconToggleOff {...props}/>;
        case "IconToggleOn":
            return <IconToggleOn {...props}/>;
        case "PaymentPlan":
            return <PaymentPlan {...props} />;
        case "IconChargeHistoryCollapse":
            return <IconChargeHistoryCollapse {...props}/>;
        case "IconChargeHistoryExpand":
            return <IconChargeHistoryExpand {...props}/>;
        case "ContactUsPhone":
            return <ContactUsPhone {...props}/>;
        case "MessageIcon":
            return <MessageIcon {...props} />;
        default:
            return <div />;
    }
}

export default Icon;
