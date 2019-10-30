import React, { Component } from 'react';

class TextAreaWrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            disabled: false
        }
    }

    render() {
        return (
            <textarea {...this.props}/>
        );
    }
}

export default TextAreaWrapper;