import React from 'react';
import styled from 'styled-components';
import {Container, Button} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGithub } from '@fortawesome/free-brands-svg-icons';

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
                    <h1 className = "title">Phd Research</h1>
                    <hr></hr>
                    <h3>Research Statement:</h3>
                    <p>

                    </p>
                    <h3>Nanoscale Model of Energy Transport and Storage in Liquids:</h3>
                    <p>

                    </p>
                    <h3>Classification of Vibrational Modes:</h3>
                    <p>
                        
                    </p>
                </Container>   
            </PHD_Styles>
        );

}