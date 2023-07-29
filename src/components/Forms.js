import React, { Component } from 'react'
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

export default class Forms extends Component {
    constructor() {
        super();
        this.state = {
            user: null,
            password: null
        }
    }

    submit() {
        console.warn(this.state);
    }

    render() {
        return (
            <div>
                <Form className='container'>
                    <h1> Form Handling </h1>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Email</Form.Label>
                        <Form.Control onChange={(e) => { this.setState({ user: e.target.value }) }}
                            type="email" placeholder="name@example.com" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onChange={(e) => { this.setState({ password: e.target.value }) }}
                            type="password" />
                    </Form.Group>
                    <Button onClick={() => this.submit()} variant="primary">Submit</Button>
                </Form>
            </div>
        )
    }
}
