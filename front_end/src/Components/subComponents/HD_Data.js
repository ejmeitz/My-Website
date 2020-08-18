import React, { Component } from 'react';
import {Container} from 'react-bootstrap'
import styled from "styled-components"

import LC from "../../resources/LC.PNG";
import numerical from "../../resources/NumericalSoln.PNG";
import exp from "../../resources/ExpVsTheory.PNG";

const DataStyles = styled.div `

    .container-fluid{
        margin-top:60px;
    }

`;
export default class myData extends Component {


    render(){
        return (
            <DataStyles>
                <Container fluid>
                    WIP
                </Container>
            </DataStyles>
            
        )
    }
    
    
}
