import React, { Component } from 'react';
import PropTypes from 'prop-types';
import idx from 'idx';
import LocalStorageUtils from "../lib/LocalStorageUtils";
import Column from '../Column';
import Row from '../Row';
import Icon from '../Icon';

import { UserInfoItem, StyledButton, UserInfoItemId, UserInfoSectionContainer } from "./styles";
import { connect } from "react-redux";

class UserInfoSection extends Component {
    render () {
        const { hasWelcome, patientDetailsProp } = this.props;
        return (
            <UserInfoSectionContainer><Row>
                <Column xs='12' sm='9'>
                    <UserInfoItem>
                        <b>
                            {hasWelcome ? 'Welcome, ' : ''}
                            {patientDetailsProp ? (patientDetailsProp.FName + " " + patientDetailsProp.LName) : ''}
                        </b>
                    </UserInfoItem>
                    <UserInfoItemId>ID {LocalStorageUtils.getGuarantorId()}</UserInfoItemId>
                </Column>
            </Row></UserInfoSectionContainer>
        );
    }
}

UserInfoSection.propTypes = {
    patientDetailsProp: PropTypes.object,
    hasWelcome: PropTypes.bool
}

const mapStateToProps = state => {
    return {
        patientDetailsProp: idx(state, _=>_.patientProfile.patientDetails)
    }
}

const mapDispatchToProps = dispatch => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(UserInfoSection);