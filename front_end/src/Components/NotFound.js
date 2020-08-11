import React, {Component} from 'react';
import styled from 'styled-components';
import {Container, Button} from 'react-bootstrap';

const ErrorStyle = styled.div `

.container-fluid{
    margin-top:60px;
    margin-bottom:15px;
    text-align:center;
}

`;


export default class NotFound extends Component {
    render(){
        return(
            <ErrorStyle>
                <Container fluid>
                    <p>Error <strong>404</strong> -- Page Not Found</p>
                    <Button variant = "primary" href ="/">Home</Button>
                </Container>   
            </ErrorStyle>
        );
    }
}