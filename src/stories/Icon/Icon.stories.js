import React from 'react';
import { storiesOf } from '@storybook/react';
import Icon from 'componentLibrary/Icon';

export const props = { 
    height: '40px',
    width: '40px',
    style: {
        'margin-right': '32px'
    },
    viewBox: "0 0 40 40",
    fill: 'black' 
};

storiesOf('Icon', module)
    .addDecorator(story => <div style={{ padding: '3rem' }}>{story()}</div>)
    .add('Icons', () => 
        <div> 
            <Icon name="ContactUsPhone" {...props} />
            <Icon name="MessageIcon" {...props} />
            <Icon name="MessageIcon" {...props} />
            <Icon name="IconCreditCard" {...props} />
        </div>
    )                    