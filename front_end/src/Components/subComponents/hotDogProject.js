import React, {Component} from 'react';
import {Carousel, Container, Card, Figure} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGithub } from '@fortawesome/free-brands-svg-icons';
import styled from 'styled-components';


import LC from "../../resources/LC.PNG";
import numerical from "../../resources/NumericalSoln.PNG";
import exp from "../../resources/ExpVsTheory.PNG";


const ProjStyles = styled.div `

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


.card-body{
    grid-column: 2 / span 1;
    margin:auto;
    box-shadow: 2px 2px grey;
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
    font-size:1.33vw;
}
.projectName{
    font-size:2vw;
}



@media screen and (max-width: 1100px) {
    p{
        font-size:1.28vw;
    }
    .carousel-caption{
        font-size: 0.8rem;
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
        border:1px solid grey;
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


`;


export default class Project3 extends Component {

    

    render(){
        return (
    <>
      
        <ProjStyles>
                    <Container fluid>
                    <Card>
                        <div className = "grid">
                                    <Carousel>
                                        <Carousel.Item>
                                            <Figure>
                                                <Figure.Image className="d-block w-100"
                                                        src= {LC}
                                                        alt="First slide">
                                                </Figure.Image>
                                                <Figure.Caption>
                                                    Lumped capacitence model of heat transfer in a hotdog.
                                                </Figure.Caption>
                                            </Figure>
                                        </Carousel.Item>
                                        <Carousel.Item>
                                        <Figure>
                                                <Figure.Image className="d-block w-100"
                                                        src= {numerical}
                                                        alt="First slide">
                                                </Figure.Image>
                                                <Figure.Caption>
                                                    Finite differncing model of heat transfer in a hot dog.
                                                </Figure.Caption>
                                            </Figure>
                                        </Carousel.Item>
                                        <Carousel.Item>
                                        <Figure>
                                                <Figure.Image className="d-block w-100"
                                                        src= {exp}
                                                        alt="First slide">
                                                </Figure.Image>
                                                <Figure.Caption>
                                                    Experimental data compared to the finite differencing model.
                                                </Figure.Caption>
                                            </Figure>
                                        </Carousel.Item>
                                    </Carousel>                       
                                <Card.Body>
                                    <Card.Title className = "projectName" style={{margin:"10px 0px"}}><strong> Cooking a Hot Dog according to a Finite Differencing Model</strong></Card.Title>
                                    <div className = "card-text"> {/*don't use Card.Text cause its harder to customize*/}

                                            <p>
                                                During the Spring 2020 semester I took Heat Transfer where I was assinged a semester long project to cook a hot dog using what we learned in class.
                                                Throughout the year, my group and I worked to developed a radial finite differencing model of heat transfer in a hot dog. The end goal was to 
                                                use our model and cook a hotdog. Our early model assumed that the temperature gradients in the hotdog were negligable at a given time which allowed us to apply the lumped capacitence model.
                                                However, when we calculated the convective and radiative heat transfer coefficients the Biot number was above 0.1 which disallowed us from using lumped capacitence. Therefore,
                                                we turned to an analytical solution, which given an initial temperature could solve for the temperature of the hot dog at each time step. To use this model the team derived equations
                                                to model the temperature at the center, interior and exterior node. Then the equations were put into MATLAB to find the final cook time given our initial conditions. Our model predicted
                                                the hot dog would take 353 seconds to cook, and the real world hot dog took 402 seconds to cook under the same conditions as our model. While the real hot dog took slightly
                                                longer to cook conditions in the test did not exactly match the model. Despite that, when the data was plotted the only difference was the initial temperature of the hot dog and
                                                the temperature of the hot dog followed the same trend as our model.  
                                            </p>
                                                    
                                            <p>
                                                Languages: MATLAB &nbsp;&nbsp; <br/>
                                                Code:   <a 
                                                            href = "https://github.com/ejmeitz/Radial-Finite-Differencing-Model--Cooking-a-HotDog"
                                                            className = "gitHub social" 
                                                            target = "_blank"
                                                            rel="noopener noreferrer">
                                                            <FontAwesomeIcon icon = {faGithub} size = "1x" />
                                                        </a>
                                            </p>
                                    </div>
                                </Card.Body>
                            </div>
                    </Card>
                </Container>



                </ProjStyles>
           
        </>
        )
    }
    
}