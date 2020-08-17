
import React, {Component} from 'react';
import {Card, Container} from 'react-bootstrap';
import styled from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGithub } from '@fortawesome/free-brands-svg-icons';
import "../index.css";

import camera from "../resources/qpli.jpeg";
import ui from "../resources/UI.jpg";
import mask from "../resources/maskImg.PNG";
import codePic from "../resources/codePic.PNG";
import nodeImg from "../resources/node.PNG";


const ProjectStyles = styled.div `

*{
    margin:0px;
    padding:0px;
    box-sizing:border-box;
}
    .grid {
        display:grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        grid-gap: 20px;
        margin: 60px auto 2vh auto;
        grid-auto-flow:rows;

        
        width:85vw;

        justify-items:center;
        justify-content:center;
        align-items:center;   
    }
    .card{
        background-color:#F8F8F8;
        width:100%;
        height:100%;
    }
    .card-img-top {
        width: 100%;
        height: 16vw;
    }
    p.langs{
        position:relative;
        bottom:0;
    }
    
    @media screen and (max-width: 1300px) {
        .grid{
            display:grid;
            grid-gap:20px;
            grid-template-columns: 80%;
            grid-auto-flow:row;
            margin: 60px auto 2vh auto;
            width:65vw;
            
            align-items:strech;
            justify-items:center;
            justify-content:center;
           
        }

        .card-img-top {
            width: 100%;
            height: 25vw;
        }
        
    
    }

    @media screen and (max-width: 1000px) {
        .grid{
            display:grid;
            grid-gap:20px;
            grid-template-columns: 100%;
            grid-auto-flow:row;
            width:65vw;

            margin: 60px auto 2vh auto;   
            
            
            align-items:strech;
            justify-items:center;
            justify-content:center;  
        }

        .card-img-top {
            width: 100%;
            height: 30vw;
        }
        

    }

    @media screen and (max-width: 700px) {
        .grid{
            display:grid;
            grid-auto-flow:row;
            grid-template-columns: 100%;
            grid-gap:20px;
            margin: 60px auto 2vh auto;
            
            justify-items:center;
            justify-content:center;
            width:80vw;
        }
        .card-img-top {
            width: 100%;
            height: 40vw;
        }
        
    
    }

    @media screen and (max-width: 450px) {
        .grid{
            display:grid;
            width:90vw;
            grid-auto-flow:row;
            grid-template-columns: 100%;
            grid-gap:20px;
            margin: 60px auto 2vh auto;
            justify-items:center;
            justify-content:center;
            
        }

        .card-img-top {
            width: 100%;
            height: 40vw;
        }
    }
`;


export default class my_projects extends Component {
    render(){
        return (
            <ProjectStyles>
                <Container fluid>
                 <div className = "grid">
                    <Card className = "a" >
                        <Card.Img  variant="top" src={ui}  alt = "Image of UI during beta test"/>
                        <Card.Title style = {{paddingBottom: "5px"}}>
                               <a href = "/projects/blackfly"target = "_blank" rel="noopener noreferrer">Blackfly Polarizaion Camera UI </a>
                        </Card.Title>
                        <Card.Body>                
                                        <p>While working as an research assistant I developed a user interface (UI) to control a FLIR polarized light sensor.
                                            The UI was created using Qt and the code to manipulate the camera was written with C++ to minimize overhead. 
                                            The UI was ultimately successful and enabled the lab to perform quantative polarized light imaging with greater precison and ease.
                                            For more detail click the title or check out the source code by clicking the GitHub logo.
                                        </p>   
                                        <br/>
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
                        </Card.Body>
                    </Card>
                    
                    <Card className = "b" > 
                        <Card.Img variant="top" src={codePic}  alt = "A screenshot of the React code used to build this card."/>
                        <Card.Title style = {{paddingBottom: "5px"}}>
                            <a href ="/projects/website" target = "_blank" rel="noopener noreferrer">My Website</a>
                        </Card.Title>
                        <Card.Body>
                                    <p>
                                        I created my website as a fun side project to learn about JavaScript, HTML, and CSS, none of which I'd been able to use at school. I started by watching YouTube videos
                                        and eventually ended up with what you see now. The website is hosted on a heroku and runs on a MERN stack (MongoDB, Express, React and NodeJS). This project
                                        was fun because it brought my interest of art and coding together. For more detail click the title or check out the source code by clicking the GitHub logo.
                                    </p>  
                                    <br/>   
                                     <p>
                                        <strong>Languages: &nbsp;</strong> JS, CSS, HTML &nbsp;&nbsp; 
                                        <a 
                                        href = "https://github.com/ejmeitz/My-Website"
                                        className = "gitHub social" 
                                        target = "_blank"
                                        rel="noopener noreferrer">
                                        <FontAwesomeIcon icon = {faGithub} size = "1x" />
                                        </a>
                                      </p>                                       
                        </Card.Body>
                    </Card>
                    <Card className = "c" >
                        <Card.Img variant="top" src={mask}  alt = "Blackfly camera imaging a gel during a ramp to failure test"/>
                        <Card.Title style = {{paddingBottom: "5px"}}>
                            <a href ="/projects/strain" target = "_blank" rel="noopener noreferrer">Strain Tracking w/ Image Processing</a>
                        </Card.Title>
                        <Card.Body>
                                    <p> 
                                        The UI I created imaged tissue and gels during mechanical testing; however, strain beads could not be used. Using the image processing toolbox
                                        on MATLAB I created a program to track the pins which hold the tissue down. Then, using that displacement data, I created an animation to 
                                        simulate the deformation of the tissue and show relevant data values with a heatmap. Essentially, I created an animated heatmap. Click the title to see an example
                                        or click the GitHub logo to see the source code.
                                    </p>
                                    <br/>
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
                        </Card.Body>
                    </Card> 
                    <Card className = "d" >
                        <Card.Img variant="top" src={nodeImg}  alt = "A node in a radial finite differencing model"/>
                        <Card.Title style = {{paddingBottom: "5px"}}>
                            <a href ="/projects/hotdog" target = "_blank" rel="noopener noreferrer">Heat Transfer Model in a Hot Dog</a>
                        </Card.Title>
                        <Card.Body>   
                                <p>
                                    While taking heat transfer I was assigned a project to model cooking a hotdog using what I learned in class.
                                    The initial model assumed lumped capacitence which which turned out to be inaccurate.
                                    The second model used a time marching finite differencing method with theoretically derived heat transfer coefficients to improve the accuracy. The finite differencing model proved 
                                    very accurate when compared with the actual temperatures inside a cooking hotdog. Click on the title to learn more about the model and the results.
                                </p> 
                                <br/>
                                <p>
                                    <strong>Languages: &nbsp;</strong> MATLAB &nbsp;&nbsp;
                                    <a 
                                        href = "https://github.com/ejmeitz/Radial-Finite-Differencing-Model--Cooking-a-HotDog"
                                        className = "gitHub social" 
                                        target = "_blank"
                                        rel="noopener noreferrer">
                                        <FontAwesomeIcon icon = {faGithub} size = "1x" />
                                    </a>
                                 </p> 
                        </Card.Body>
                    </Card>
                    </div>
                   </Container>
            </ProjectStyles>
                
        )
    }
}
