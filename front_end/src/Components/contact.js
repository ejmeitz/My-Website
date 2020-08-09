import React, {Component} from 'react';
import styled from 'styled-components';
import {Form, Col, Button, Modal, Spinner} from 'react-bootstrap';
import axios from 'axios';



const ContactStyles = styled.div `


*{

    
}
.container{
    margin:60px auto 1vh auto;
    height: 94vh;
    justify-self:center;
    min-width: 375px;
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
                    showSubmitModal: false,
                    showSuccessModal: false,
                    showFailModal:false,
                    disabled:false,
                    errorMsg: 'test',
                    showSpinner: false
            };


             this.styles = {
                marginLeft:"10px", 
                display:"none"
              };

            this.handleChangeText = this.handleChangeText.bind(this);
            this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
            this.handleLastNameChange = this.handleLastNameChange.bind(this);
            this.handleEmployerChange = this.handleEmployerChange.bind(this);
            this.hideModal = this.hideModal.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);
            this.showSpinner = this.showSpinner.bind(this);
            this.hideSpinner = this.hideSpinner.bind(this);
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
    

       hideModal = (e) => {
            this.setState({ //no harm in turning them all off since they never could be activated at the same time
                showSubmitModal: false,
                showSuccessModal: false,
                showFailModal: false
            });
       };

       showSpinner = () => {
        this.styles = {
            marginLeft:"10px"
          };
       }
       hideSpinner = () => {
        this.styles = {
            marginLeft:"10px", 
            display:"none"
          };
       }

      handleSubmit(event) {
        document.body.style.cursor = 'wait';
        this.showSpinner();
        this.setState({
            disabled:true
        });
        console.log('Submit Clicked: ');
        console.log(this.state); 
        event.preventDefault();

        if(this.state.textValue === "" || this.state.firstName === "" || this.state.lastName === "" || this.state.employer === ""){
            console.log("Empty text body aborting");
            document.body.style.cursor = 'default';
            this.hideSpinner();
            this.setState({
                showSubmitModal: true,
                disabled:false
                });
            return;
        }

        const data = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            employer: this.state.employer,
            textBody: this.state.textValue
        }

        
        let baseURL = "http://localhost:5000/sendEmail";
        if(process.env.NODE_ENV === "production"){
            baseURL = "/sendEmail";
        }

        axios.post(baseURL  , data)
        .then((res) => {
            console.log('Request Successful');
                 this.setState({
                    showSuccessModal: true,
                    textValue :'',
                    firstName: '',
                    lastName: '',
                    employer: ''
                    });
            this.hideSpinner();
            document.body.style.cursor = 'default';
            console.log(res.data);
        })
        .catch((err) => {
            
            this.setState({
                showFailModal: true,
                disabled:false,
                errorMsg: `${err}`
                });
            this.hideSpinner();
            document.body.style.cursor = 'default';
            console.log('Could not send info: ' + err)
        });


        setTimeout(() => {
            this.setState({
                disabled:false
                });
        }, 6000) //prevent spamming submit button

      }

    


    render(){

      



        return(

            <ContactStyles>
                <Modal  show={this.state.showSubmitModal} onHide={this.hideModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Oops. Please fill out every box!</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Every box must contain text.</Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={this.hideModal}>
                        Close
                        </Button>
                    </Modal.Footer>
                </Modal>

                <Modal  show={this.state.showSuccessModal} onHide={this.hideModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Success! Form submitted.</Modal.Title>
                    </Modal.Header>
 
                    <Modal.Footer>
                        <Button variant="primary" onClick={this.hideModal}>
                        Close
                        </Button>
                    </Modal.Footer>
                </Modal>

                <Modal show={this.state.showFailModal} onHide={this.hideModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Form could not be submitted. </Modal.Title>
                    </Modal.Header>
                    <Modal.Body id = "errMsgModal">{this.state.errorMsg}</Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={this.hideModal}>
                        Close
                        </Button>
                    </Modal.Footer>
                </Modal>

                
                    <div className = "container"> 

                        <h1>
                            Contact Me:
                        </h1>
                            <Form className = "contactMe" id = 'myForm'>
                            <Form.Row>
                                    <Form.Group as={Col}>
                                    <Form.Label>First Name</Form.Label>
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

                                <Form.Row > 
                                    <Button variant="primary"  onClick = {this.handleSubmit} type="submit" disabled = {this.state.disabled}>
                                        Submit
                                    </Button>
                                    <Spinner animation="border"  style = {this.styles} size = "lg" variant = "primary" role="status">
                                         <span className="sr-only">Loading...</span>
                                    </Spinner>
                                </Form.Row>
                            </Form>
                    </div>
                </ContactStyles>
        );
    }
}