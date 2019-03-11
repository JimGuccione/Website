import React, {Component} from 'react';
import {
    Container, Col, Form,
    FormGroup, Label, Input,
    Button,
} from 'reactstrap';
import Navbar from "./CustomNavbar";
import "./SignUp.css";

class SignUp extends Component {
    render() {
        return (
            <div className="containSignUp">
            <Container className="App">
                <h2>Sign up for Tips and Recruiting Information</h2>
                <Form className="form">
                    <Col>
                        <FormGroup>
                            <Label>Last Name</Label>
                            <Input
                                type="lastName"
                                name="lastName"
                                id="lastName"
                                placeholder="Last Name"
                            />
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                            <Label>First Name</Label>
                            <Input
                                type="firstName"
                                name="firstName"
                                id="firstName"
                                placeholder="First Name"
                            />
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                            <Label>Email</Label>
                            <Input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="myemail@email.com"
                            />
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                            <Label>Phone Number</Label>
                            <Input
                                type="phone"
                                name="phone"
                                id="phone"
                                placeholder="***-***-****"
                            />
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                            <Label>Graduation Year</Label>
                            <Input
                                type="gradYear"
                                name="gradYear"
                                id="gradYear"
                                placeholder="202?"
                            />
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                            <Label>High School</Label>
                            <Input
                                type="highSchool"
                                name="highSchool"
                                id="highSchool"
                                placeholder="My High School"
                            />
                        </FormGroup>
                    </Col>
                    <h4>We do not share information and there is absolutely no telemarketing involved. Information is used only to deliver recruiting information and assistance to you.</h4>
                    <Button>Submit</Button>
                </Form>
            </Container>
            </div>
        );
    }
}

export default SignUp;