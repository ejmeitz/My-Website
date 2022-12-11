import React from 'react';
import styled from 'styled-components';
import {Container, Card} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGithub } from '@fortawesome/free-brands-svg-icons';

import ui from "../../resources/UI.jpg";
import mask from "../../resources/maskImg.PNG";


const UG_Styles = styled.div `

.container-fluid{
    margin-bottom:15px;
    text-align:center;

    display:flex;
    flex-direction: row;

    max-width: 80vw;
}

.card1{
    flex-basis:50%;
    padding:5px;
    margin:5px;
}
.card2{
    flex-basis:50%;
    padding:5px;
    margin:5px
}

.title{
    margin-top:60px;
    text-align:center;
    font-family: 'Josefin Sans', sans-serif;
}

@media screen and (max-width: 1400px) {
    .container-fluid{
        flex-direction:column;
    }
}

@media screen and (max-width: 700px){
    p{
        font-size:14px;
    }

    p.langs{
        margin:0px;
    }
}

@media screen and (max-width: 550px){
    p{
        font-size:12px;
    }
}

`;


export default function UG_Research(props) {

        return(
            <UG_Styles>
                <h1 className = "title">Undergradute Research:</h1>
                <Container fluid>
                    <Card className = "card1" >
                        <Card.Img  variant="top" src={ui}  alt = "Image of UI during beta test"/>
                        <Card.Title>
                            <a href = "/projects/blackfly"target = "_blank" rel="noopener noreferrer">Blackfly Polarizaion Camera UI </a>
                        </Card.Title>
                        <Card.Body>       
                            <div className = "body">        
                                        <p>While working as an research assistant I developed a user interface (UI) to control a FLIR polarized light sensor.
                                            The UI was created using Qt and the code to manipulate the camera was written with C++ to minimize overhead. 
                                            The UI was ultimately successful and enabled the lab to perform reflectance mode quantative polarized light imaging with
                                            greater precison and ease than previous versions of the software. 
                                            For more detail click the title or check out the source code by clicking the GitHub logo.
                                        </p>   
                                        
                                        <p className = "langs"> 
                                            <strong>Languages:  &nbsp; </strong>C++ &nbsp;&nbsp; 
                                            <a 
                                            href = "https://github.com/ejmeitz/GUI"
                                            className = "gitHub social" 
                                            target = "_blank"
                                            rel="noopener noreferrer">
                                            <FontAwesomeIcon icon = {faGithub} size = "1x" />
                                            </a>
                                        </p> 
                            </div>                         
                        </Card.Body>
                    </Card>

                    <Card className = "card2" >
                        <Card.Img variant="top" src={mask}  alt = "Blackfly camera imaging a gel during a ramp to failure test"/>
                        <Card.Title>
                            <a href ="/projects/strain" target = "_blank" rel="noopener noreferrer">Strain Tracking w/ Image Processing</a>
                        </Card.Title>
                        <Card.Body>
                        <div className = "body">  
                                <p> 
                                    The UI I created imaged tissue and gels during mechanical testing; however, strain beads could not be used. Using the image processing toolbox
                                    on MATLAB I created a program to track the pins which hold the tissue down. Then, using that displacement data, I created an animation to 
                                    simulate the deformation of the tissue and show relevant data values with a heatmap. Essentially, I created an animated heatmap. Click the title to learn more, click  
                                    <a href ="/examples"   target = "_blank" rel="noopener noreferrer"> here</a> to see an example or click the GitHub logo to see the source code.
                                </p>
                               
                                <p>
                                    <strong>Languages: &nbsp;</strong> MATLAB &nbsp;&nbsp;
                                    <a 
                                    href = "https://github.com/ejmeitz/StrainApproximationandVisualization"
                                    className = "gitHub social" 
                                    target = "_blank"
                                    rel="noopener noreferrer">
                                    <FontAwesomeIcon icon = {faGithub} size = "1x" />
                                    </a> 
                                    </p> 
                        </div>
                        </Card.Body>
                    </Card> 
               </Container>   
            </UG_Styles>
        );

}