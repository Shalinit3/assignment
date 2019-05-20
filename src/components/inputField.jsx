import React, { Component } from 'react';
import { Form } from 'react-bootstrap';

class InputField extends Component {
    handleChange = (event) => {
        const { name } = this.props;
        this.props.onKeyPress({
            key: name,
            value: event.target.value,
        })
    }

    render() {
        const { placeholder } = this.props;
        return (
            <React.Fragment>
                <Form.Group >
                    <Form.Label>{placeholder}</Form.Label>
                    <Form.Control {...this.props} onChange={this.handleChange} />
                </Form.Group>
            </React.Fragment>
        )
    }
}

export default InputField;