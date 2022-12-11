import React from 'react';
import styled from 'styled-components';
import {Container, Button} from 'react-bootstrap';

const UG_Styles = styled.div `

.container-fluid{
    margin-top:60px;
    margin-bottom:15px;
    text-align:center;
}

`;


export default function UG_Research(props) {

        return(
            <UG_Styles>
                <Container fluid>
                    <p>UG Research WIP</p>
                </Container>   
            </UG_Styles>
        );

}