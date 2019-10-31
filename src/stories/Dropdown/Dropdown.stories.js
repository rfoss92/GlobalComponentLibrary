import React from 'react';
import Dropdown from '../../../components/componentLibrary/Dropdown';

export default {
  title: 'Dropdown',
};

const paymentTitles = [
    'asdf',
    'qwer'
]
export const Default = () =>                                 
    <Dropdown 
        label={'HOW WOULD YOU LIKE TO PAY'}
        value={'Payment Type'}
        // onChange={(item) => handlePaymentTypeToggle(item)}
        itemList={paymentTitles}
    />;