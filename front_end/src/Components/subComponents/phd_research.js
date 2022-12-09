import React from 'react';
import styled from 'styled-components';
import {Container, Button} from 'react-bootstrap';

const PHD_Styles = styled.div `

.container-fluid{
    margin-top:60px;
    margin-bottom:15px;
    text-align:center;
}

`;


export default function Research_PHD(props) {

        return(
            <PHD_Styles>
                <Container fluid>
                    <p>PHD Research</p>
                </Container>   
            </PHD_Styles>
        );

}