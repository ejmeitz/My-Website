import React, {Component} from 'react';
import styled from 'styled-components';
import {Form, Col, Button, Modal} from 'react-bootstrap';
import axios from 'axios';



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
                    employer:'',
                    show: false
            };

            this.handleChangeText = this.handleChangeText.bind(this);
            this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
            this.handleLastNameChange = this.handleLastNameChange.bind(this);
            this.handleEmployerChange = this.handleEmployerChange.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);
            this.showModal = this.showModal.bind(this);
            this.hideModal = this.hideModal.bind(this);
      }

      handleFirstNameChange(event) {
        this.setState({firstName: event.target.value});
      }
      
      handleLastNameChange(event) {
        this.setState({lastName: event.target.value});
      }
      
      handleEmployerChange(event) {
        this.setState({employer: event.target.value});
      }
      handleChangeText(event) {
        this.setState({textValue: event.target.value});
      }
    
      showModal = (e) => {
            this.setState({
            show: true
            });
       };
       hideModal = (e) => {
            this.setState({
            show: false
            });
       };

      handleSubmit(event) {

        console.log('Submit Clicked: ');
        console.log(this.state); 
        event.preventDefault();

        if(this.state.textValue === "" || this.state.firstName === "" || this.state.lastName === "" || this.state.employer === ""){
            console.log("Empty text body aborting");
            this.showModal();
            return;
        }

        const data = {
            first: this.state.firstName,
            last: this.state.lastName,
            emp: this.state.employer,
            textBody: this.state.textValue
        }

        this.setState({  //clear form
            textValue :'',
            firstName: '',
            lastName: '',
            employer: ''
        });
        
        let baseURL = "http://localhost:5000/sendEmail";
        if(process.env.NODE_ENV === "production"){
            baseURL = "/sendEmail";
        }

        axios.post(baseURL  , data)
        .then(res => console.log("Email sent! " + res.data))
        .then((response) => {
            if(response.statusText === "OK" && response.status >= 200 && response.status < 300) {
                return response.json()
            } else {
                throw new Error("Server can't be reached!")
            }
        })
        .then((json) => {
            console.log("It is JSON")
         })
        .catch(err => console.log('Could not send email: ' + err));
      }

     


    render(){
        return(

        <React.Fragment>
            <Modal show={this.state.show} onHide={this.hideModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Oops. Please fill out every box!</Modal.Title>
                </Modal.Header>
                <Modal.Body>Every box must contain text.</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.hideModal}>
                    Close
                    </Button>
                </Modal.Footer>
            </Modal>


            <ContactStyles>  
                <div className = "container"> 

                
                <h1>
                    Contact Me:
                </h1>
                    <Form className = "contactMe" id = 'myForm'>
                    <Form.Row>
                            <Form.Group as={Col}>
                            <Form.Label>First name</Form.Label>
                            <Form.Control type="name" value={this.state.firstName} onChange={this.handleFirstNameChange} placeholder="First Name" />
                            </Form.Group>

                            <Form.Group as={Col}>
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="name" value={this.state.lastName} onChange={this.handleLastNameChange} placeholder="Last Name" />
                            </Form.Group>
                        </Form.Row>

                        <Form.Group>
                            <Form.Label>Employer</Form.Label>
                            <Form.Control value={this.state.employer} onChange={this.handleEmployerChange} placeholder="Employer" />
                        </Form.Group>

                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Comments:</Form.Label>
                            <Form.Control as="textarea" type = "text" rows="15" value={this.state.textValue} onChange={this.handleChangeText} placeholder = "Your text here" />
                        </Form.Group>

                        <Button variant="primary"  onClick = {this.handleSubmit} type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>
            </ContactStyles>

            </React.Fragment>
        );
    }
}