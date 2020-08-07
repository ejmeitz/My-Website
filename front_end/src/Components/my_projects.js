
import React, {Component} from 'react';
import {Card, Container} from 'react-bootstrap';
import styled from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGithub } from '@fortawesome/free-brands-svg-icons';
import "../index.css";
import camera from "../resources/qpli.jpeg";


const ProjectStyles = styled.div `
    .grid {
        display:grid;
        grid-template-columns: 40% 40%;
        grid-template-rows: 1fr 1fr;
        grid-gap: 20px;
        margin: 7vh auto 1vh auto;
        grid-auto-flow:rows;
        grid-auto-rows:500px
       
        justify-items:center;
        justify-content:center;
        align-items:center;   
    }
    .element{
       
        background-color:#F8F8F8;
        display: inline-block; 
        height: 60vh;
        border: 1px solid black;
        width:550px;    
        max-height:500px;
        justify-self:center;
        padding:6px;
       
    }
      

    .Info{
        font-family: 'Lato', sans-serif;
    }

    .card-img-top {
        width: 100%;
        height: 10vw;
        object-fit: scale-down;
    }
    
    @media screen and (max-width: 1450px) {
        .grid{
            display:grid;
            grid-gap:20px;
            grid-template-columns: 80%;
            grid-auto-flow:row;
            margin: auto;
            width: 80%;
            
            align-items:strech;
            justify-items:center;
            justify-content:center;
           
        }
        .element{
       
            background-color:#F8F8F8;
            height: 60vh;
            border: 1px solid black;
            justify-self:center;
        }
        .a{
            margin-top:7vh;
        }
    
    }
    @media screen and (max-width: 700px) {
        .grid{
            display:grid;
            grid-auto-flow:row;
            grid-template-columns: 80%;
            grid-gap:20px;
            margin: auto;
            
            justify-items:center;
            justify-content:center;
            
        }
        .element{   
            border-radius:3px;
            background-color:#F8F8F8;
            height: 30vh;
            width:70vw;
            max-width:400px;
            min-width:300px;
            border: 1px solid black;
        }
        h1{
            font-size:1.5em;
        }
        h2{
            font-size:1.17em;
        }
        h3 {
            font-size: 1.05em;
        }
    
    }
    @media screen and (max-width: 400px) {
        .grid{
            display:grid;
            grid-auto-flow:row;
            grid-template-columns: 80%;
            grid-gap:20px;
            margin:auto;
            justify-items:center;
            justify-content:center;
            
        }
        .element{   
            border-radius:3px;
            background-color:#F8F8F8;
            height: 30vh;
            width:250px;
    
            border: 1px solid black;
        }
        h1{
            font-size:1.3em;
        }
        h2{
            font-size:1.07em;
        }
        h3 {
            font-size: 1em;
        }
       
    
    }
`;


export default class my_projects extends Component {

    constructor(props){
        super();
        this.blackflySrc = this.blackflySrc.bind(this);
        this.websiteSrc = this.websiteSrc.bind(this);
        this.project3Src = this.project3Src.bind(this);
    }

    blackflySrc = () => {

        if(window.location.hostname === "localhost"){
            return "http://localhost:3000/projects/blackfly"
        } else {
            return "http://ethanmeitz.com/projects/blackfly";
        }
        
    }

    websiteSrc = () => {

        if(window.location.hostname === "localhost"){
            return "http://localhost:3000/projects/website"
        } else {
            return "http://ethanmeitz.com/projects/website";
        }
        
    }

    project3Src = () => {

        if(window.location.hostname === "localhost"){
            return "http://localhost:3000/projects/project3"
        } else {
            return "http://ethanmeitz.com/projects/project3";
        }
        
    }
    

    render(){
        return (

            <ProjectStyles>
                <Container fluid>
                 <div className = "grid">
                    <Card className = "element a" >
                        <Card.Title><a href = {this.blackflySrc()} target = "_blank" rel="noopener noreferrer">Blackfly Polarizaion Camera UI </a></Card.Title>
                        <Card.Img top width = "100%" variant="top" src={camera}  alt = "Blackfly camera imaging a gel during a ramp to failure test"/>
                        <Card.Body>  
                            <Card.Text className = "Info">               
                                        <p>While working as an undergraduate research assistant I developed a GUI to interface with and control a commerical polarization camera.
                                            The GUI was created using Qt and the code to connect with and manipulate the camera was written with C++ as speed was important. 
                                            The GUI was ultimately successful and enabled the lab to perform research. For more detail click "About" or check out GitHub for the source code.
                                        </p>   
                                    <h5>Languages: C++ &nbsp;&nbsp; 
                                        <a 
                                        href = "https://github.com/ejmeitz/GUI"
                                        className = "gitHub social" 
                                        target = "_blank"
                                        rel="noopener noreferrer">
                                        <FontAwesomeIcon icon = {faGithub} size = "1x" />
                                        </a>
                                    </h5>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    
                    <Card className = "element b" > 
                        <Card.Title><a href ={this.websiteSrc()} target = "_blank" rel="noopener noreferrer">My Website</a></Card.Title>
                        <Card.Img variant="top" src={camera}  alt = "Blackfly camera imaging a gel during a ramp to failure test"/>
                        <Card.Body>
                            <Card.Text className = "Info">
                                    <p>
                                        I created my website as a fun side project to learn about JavaScript, HTML, and CSS, none of which I'd been able to use at school. I started by watching YouTube videos
                                        and eventually ended up with what you see now. The website is hosted on a heroku and behind the scenes runs on a MERN stack (MongoDB, Express, React, NodeJS). This project
                                        was fun because it brought my interest of art and coding together in one project. For more detail click "About" or check out the source code by clicking the GitHub logo.
                                    </p>     
                                    <h5>Languages: JS, CSS, HTML &nbsp;&nbsp; 
                                        <a 
                                        href = "https://github.com/ejmeitz/My-Website"
                                        className = "gitHub social" 
                                        target = "_blank"
                                        rel="noopener noreferrer">
                                        <FontAwesomeIcon icon = {faGithub} size = "1x" />
                                        </a> 
                                    </h5>                            
                            </Card.Text>
                        </Card.Body>
                    </Card>
                  
                
                    <Card className = "element c" >
                    <Card.Title><a href ={this.project3Src()} target = "_blank" rel="noopener noreferrer">Radial Finite Differencing Model of a Hot Dog</a></Card.Title>
                        <Card.Img variant="top" src={camera}  alt = "Blackfly camera imaging a gel during a ramp to failure test"/>
                        <Card.Body>
                            
                            <Card.Text className = "Info">     
                                    <h5>Languages: MATLAB &nbsp;&nbsp;
                                    <a 
                                        href = "https://github.com/ejmeitz/Radial-Finite-Differencing-Model--Cooking-a-HotDog"
                                        className = "gitHub social" 
                                        target = "_blank"
                                        rel="noopener noreferrer">
                                        <FontAwesomeIcon icon = {faGithub} size = "1x" />
                                        </a> 
                                    </h5>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                   
                    <Card className = "element d" >
                        <Card.Title><a href ={this.project3Src()} target = "_blank" rel="noopener noreferrer">Strain Tracking Model using Image Processing</a></Card.Title>
                        <Card.Img variant="top" src={camera}  alt = "Blackfly camera imaging a gel during a ramp to failure test"/>
                        <Card.Body>
                            <Card.Text className = "Info">
                                    <h5>Languages: MATLAB &nbsp;&nbsp;
                                    <a 
                                        href = "https://github.com/ejmeitz/StrainApproximationandVisualization"
                                        className = "gitHub social" 
                                        target = "_blank"
                                        rel="noopener noreferrer">
                                        <FontAwesomeIcon icon = {faGithub} size = "1x" />
                                        </a> 
                                    </h5>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    </div>
                   </Container>
            </ProjectStyles>
                
        )
    }
}
