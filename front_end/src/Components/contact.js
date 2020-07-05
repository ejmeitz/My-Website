import React, {Component} from 'react';
import styled from 'styled-components';
import {Form, Col, Row, Button} from 'react-bootstrap';

const ContactStyles = styled.div `

.container{
    margin:7vh 20vw 1vh 20vw;
    height: 94vh;
}

.largeForm, .name, .employer{
    margin:1vh auto 1vh auto;
    width: 60vw;
}

`;

export default class Contact extends Component {
    render(){
        return(
            <ContactStyles>  
                <div className = "container"> 

                
                <h1>
                    Contact Me:
                </h1>
                    <Form className = "contactMe">
                    <Form.Row>
                            <Form.Group as={Col}>
                            <Form.Label>First name</Form.Label>
                            <Form.Control type="name" placeholder="First Name" />
                            </Form.Group>

                            <Form.Group as={Col}>
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="name" placeholder="Last Name" />
                            </Form.Group>
                        </Form.Row>

                        <Form.Group>
                            <Form.Label>Employer</Form.Label>
                            <Form.Control placeholder="Employer" />
                        </Form.Group>

                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Comments:</Form.Label>
                            <Form.Control as="textarea" rows="15" placeholder = "Your text here" />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                                            </Form>
                </div>
            </ContactStyles>
        );
    }
}