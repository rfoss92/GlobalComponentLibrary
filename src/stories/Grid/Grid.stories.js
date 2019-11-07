import React from 'react';

import Grid from '../../../components/componentLibrary/Grid';
import Row from '../../../components/componentLibrary/Row';
import Column from '../../../components/componentLibrary/Column';

export default {
    title: 'Grid',
}

export const Default = () => (
    <Grid>
        <Row gutter={20}>
            <Column xs={12} sm={12} md={6} lg={8} xl={8}>
                Goodbye
            </Column>
            <Column xs={12} sm={12} md={6} lg={4} xl={4}>
                Hello
            </Column>
        </Row>
        <Row>
            <Column xs={6} sm={8}>
                Welp
            </Column>
            <Column xs={6} sm={4}>
                Help
            </Column>
        </Row>
    </Grid>
)