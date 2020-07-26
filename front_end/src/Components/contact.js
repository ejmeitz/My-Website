import React, {Component} from 'react';
import styled from 'styled-components';
import {Form, Col, Row, Button} from 'react-bootstrap';
const nodemailer = require("nodemailer");
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
    constructor(props) {
        super(props);
        this.state = {
            textValue: '',
            firstName: '',
            lastName: '',
            employer:''
    };
    
        this.handleChangeText = this.handleChangeText.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.checkAndSendEmail = this.checkAndSendEmail.bind(this);
      }

      handleChangeText(event) {
        this.setState({textValue: event.target.value});
       // console.log(event.target.value);
      }
    

      handleSubmit(event) {
        alert('Submit Clicked: ');
        event.preventDefault();
      }


   checkAndSendEmail (state) {

    this.refs.btn.setAttribute("disabled", "disabled");
    if(state.textValue === ''){
        console.log("No text in body. Will not send email");
        this.refs.btn.removeAttribute("disabled");
    }

  
    const nodemailer = require("nodemailer");
    
    
      let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.USER, 
          pass: process.env.PASS
        },
      });
    
    
      let mailDetails = { 
        from: 'ejmeitz1@gmail.com', 
        to: 'ejmeitz1@gmail.com',
        subject: "Email From:", 
        text: state.textValue,  
    }; 
    
    transporter.sendMail(mailDetails, function(err, data) { 
        if(err) { 
            console.log('Error Occurs'); 
        } else { 
            console.log('Email sent successfully'); 
        } 
    });

    this.refs.btn.removeAttribute("disabled");
}

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
                            <Form.Control type="name" onChange={this.updateFirstName} placeholder="First Name" />
                            </Form.Group>

                            <Form.Group as={Col}>
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="name" onChange={this.updateLastName} placeholder="Last Name" />
                            </Form.Group>
                        </Form.Row>

                        <Form.Group>
                            <Form.Label>Employer</Form.Label>
                            <Form.Control onChange={this.updateEmployer} placeholder="Employer" />
                        </Form.Group>

                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Comments:</Form.Label>
                            <Form.Control as="textarea" type = "text" rows="15" value={this.state.textValue} onChange={this.handleChangeText} placeholder = "Your text here" />
                        </Form.Group>

                        <Button variant="primary" ref="btn" onClick = {this.checkAndSendEmail} type="submit">
                            Submit
                        </Button>
                                            </Form>
                </div>
            </ContactStyles>
        );
    }
}