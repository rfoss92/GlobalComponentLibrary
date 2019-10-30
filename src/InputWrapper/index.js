import React, { Component } from 'react';

class InputWrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            disabled: false
        }
    }

    render() {
        return (
            <input {...this.props}/>
        );
    }
}

export default InputWrapper;