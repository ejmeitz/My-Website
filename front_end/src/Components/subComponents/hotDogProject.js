import React, {Component} from 'react';
import {Carousel, Container, Card} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGithub } from '@fortawesome/free-brands-svg-icons';
import styled from 'styled-components';

import hotdogs from "../../resources/hotdogs.jpg"

const HotDogStyles = styled.div `

*{
    font-family: 'Josefin Sans', sans-serif;

}
.container-fluid{
    margin: 70px auto 20px auto;
    padding: 0;
}

.grid{
    width:95%;
    display:grid;
    grid-template-columns:  40% 60%;

    justify-items:center;
    justify-content:center;
}
.carousel{
    margin:auto;
    grid-column: 1 / span 1;
}
.carousel-indicators, .carousel-control-next-icon, .carousel-control-prev-icon, .carousel-control-next, .carousel-control-prev{
   display:none;
}

.card-body{
    grid-column: 2 / span 1;
    margin:auto;
    border:1px solid black;
    border-radius:5px;
    height:40vw;
}

.card {
    border:none;
}

img{
    height:40vw;
    margin:auto;
    object-fit:scale-down;
}

p{
    font-size:1.25vw;
}
.projectName{
    font-size:1.8vw;
}



@media screen and (max-width: 1100px) {
    p{
        font-size:1.28vw;
    }
    .carousel-caption{
        font-size: 0.8rem;
    }
    p{
        font-size:1.2vw;
    }
}


@media screen and (max-width: 800px){
    .grid{
        width:90vw;
        display:grid;
        grid-template-columns:  1fr;
        grid-auto-flow:row;
        grid-gap:10px;

        margin:auto;

        justify-items:center;
        justify-content:center;
    }

    .carousel{
        margin:auto;
        height:60vh;
        grid-column: 1 / span 1;
    }
    
    .card-body{
        grid-column: 1 / span 1;
        margin:auto;
        border-radius:5px;
        height:100%;
        max-width:80vw;
        border:1px solid black;
        width : calc(60vh * 0.8);
    }
    p{
        font-size:0.85em;
    }
    .projectName{
        font-size:1.5em;
    }
    img{
        margin:auto;
        height:60vh;
        max-width:80vw;
        object-fit:scale-down;
    }

}

@media screen and (max-width: 650px){
    img{
        margin:auto;
        height:auto;
        max-width:80vw;
        object-fit:scale-down;
    }
    .carousel{
        margin:auto;
        height:auto;
        grid-column: 1 / span 1;
    }
}

@media screen and (max-width: 512px){
    .grid{
        width:90vw;
        display:grid;
        grid-template-columns: 1fr;
        grid-auto-flow:row;
        grid-gap:10px;

        margin:auto;

        justify-items:center;
        justify-content:center;
    }

    .carousel{
        margin:auto;
        height:auto;
        grid-column: 1 / span 1;
    }

    .card-body{
        grid-column: 1 / span 1;
        margin:auto;
        border-radius:5px;
        height:100%;
        max-width:80vw;
        border:1px solid black;
        width : calc(60vh * 0.8);
    }
    p{
        font-size:0.85em;
    }
    .projectName{
        font-size:1.1em;
    }
    img{
        margin:auto;
        max-width:80vw;
        height:auto;
        object-fit:scale-down;
    }

}



`;


export default class Project3 extends Component {

    

    render(){
        return (
    <>
      
        <HotDogStyles>
                    <Container fluid>
                    <Card>
                        <div className = "grid">
                                    <Carousel>
                                        <Carousel.Item>    
                                                <img className="d-block w-100"
                                                        src= {hotdogs}
                                                        alt="Hot dogs on a grill"/>
                                        </Carousel.Item>
                                    </Carousel>                       
                                <Card.Body>
                                    <Card.Title className = "projectName" style={{margin:"10px 0px"}}><strong> Cooking a Hot Dog According to a Finite Differencing Model</strong></Card.Title>
                                    <div className = "card-text"> 

                                            <p>
                                                In Spring 2020 I took heat transfer where I worked on a semester long project to cook a hot dog using what I learned in class.
                                                Throughout the year, my group and I worked to develop a radial finite differencing model of heat transfer in a hot dog. Our early model assumed that the temperature gradients in the hotdog were negligable at a given time which allowed us to apply the lumped capacitence model.
                                                However, when we calculated the total heat transfer coefficient the Biot number was above 0.1 which disallowed us from using lumped capacitence. Therefore,
                                                we turned to an analytical solution, which given an initial temperature could solve for the temperature of the hot dog at each time step. To use this model the team derived equations
                                                for the temperature at the center, interior and exterior node(s). Then the equations were put into MATLAB to find the final cook time given our initial conditions. Our model predicted
                                                the hot dog would take 353 seconds to cook, and the real world hot dog took 402 seconds to cook under the same conditions as our model. While the real hot dog took slightly
                                                longer to cook conditions in the test did not exactly match the model. When the <a href = "/data">data</a> was plotted the trend matched our model just offset by the an initial temperature difference.  
                                            </p>
                                                    
                                            <p>
                                                <strong>Languages:</strong> MATLAB &nbsp;&nbsp; <br/>
                                               <strong>Code:</strong>   <a 
                                                            href = "https://github.com/ejmeitz/Radial-Finite-Differencing-Model--Cooking-a-HotDog"
                                                            className = "gitHub social" 
                                                            target = "_blank"
                                                            rel="noopener noreferrer">
                                                            <FontAwesomeIcon icon = {faGithub} size = "1x" />
                                                        </a> <br/>
                                                        <a href = "/data"  target = "_blank"
                                                            rel="noopener noreferrer">The Data</a>
                                            </p>
                                            
                                    </div>
                                </Card.Body>
                            </div>
                    </Card>
                </Container>
                </HotDogStyles>
           
        </>
        )
    }
    
}