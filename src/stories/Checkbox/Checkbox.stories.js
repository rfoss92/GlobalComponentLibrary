import React from 'react';
import { storiesOf } from '@storybook/react';
import Checkbox from '../../../components/componentLibrary/Checkbox';

storiesOf('Checkbox', module)
    .addDecorator(story => <div style={{ padding: '3rem' }}>{story()}</div>)
    .add('NotChecked', () => 
    <Checkbox
           text={'Remember Me'}
           checked={false}
           // onChange={handleRememberMeToggle}
       />
    )
    .add('Checked', () => 
        <Checkbox
            text={'Remember Me'}
            checked={true}
            // onChange={handleRememberMeToggle}
        />
    )                  