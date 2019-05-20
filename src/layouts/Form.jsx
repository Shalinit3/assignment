import React, { Component } from 'react';
import { Container, Row, Col, Form, Button, Modal, ListGroup } from 'react-bootstrap';
import InputField from '../components/inputField';
import Axios from 'axios';

class FormPage extends Component {

    state = {
        to: '',
        from: '',
        language: '',
        data: null
    }

    handleKeyPress = (data) => {
        const { key, value } = data;
        this.setState({ [key]: value });
    }
    handleClose = () => {
        this.setState({show: false})
    }

    handleSubmit = async (event) => {
        const { to, from } = this.state
        event.preventDefault();
        const response = await Axios.get(`${to}/${from}`); 
        this.setState({ data: response.data, show: true });
    }

    render() {
        const { show, data } = this.state;
        return (
            <Container>
                <Form onSubmit={this.handleSubmit}>
                    <Row>
                        <Col>
                            <InputField name='to' type="text" placeholder='To' onKeyPress={this.handleKeyPress} />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <InputField name='from' type="text" placeholder='From' onKeyPress={this.handleKeyPress} />

                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <InputField name='language' type="text" placeholder='Language' onKeyPress={this.handleKeyPress} />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Button variant="primary" type="submit">
                                Submit
                         </Button>
                        </Col>
                    </Row>
                </Form>
                <Modal show={show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <ListGroup>
                          {data && <ListGroup.Item key={data.message}> message: {data.message}, subtitle: {data.subtitle}  </ListGroup.Item>}
                        </ListGroup>
                    </Modal.Body>
                </Modal>
            </Container>
        )
    }
}

export default FormPage;