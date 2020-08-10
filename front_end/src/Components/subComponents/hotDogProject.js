import React, {Component} from 'react';
import {Carousel, Row, Col, Container, Card, Figure} from 'react-bootstrap';
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
}

h5{
    font-size:1.5em;
}

.card {
    border:none;
}

.card-text{
    box-shadow: 2px 2px 2px grey;
    background-color:#F8F8F8;
    border-radius:5px;
}

h5{
    font-size:1.25em;
    padding:10px;
}

.carousel{
    box-shadow: 2px 2px 2px grey;
    aspectRatio: 10/8;
}

li{
    background-color:black;
}
.carousel-indicators {
    bottom:-50px;
  }

@media screen and (max-width: 1100px) {
    h5{
        font-size:1.05em;
    }
}
@media screen and (max-width: 800px) {
    h5{
        font-size:0.9em;
    }
    .projectName{
        font-size:1.5em;
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
                        <Row >
                        <Col xs={4} style = {{margin:"auto"}}>
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
                        </Col>
                        <Col style = {{margin:"auto"}}>
                       
                                <Card.Body style = {{height:"70vh"}}>
                                    <Card.Title className = "projectName" style={{margin:"10px", fontSize:"2em"}}><strong> Cooking a Hot Dog according to a Finite Differencing Model</strong></Card.Title>
                                    <div className = "card-text"> {/*don't use Card.Text cause its harder to customize*/}

                                            <h5>
                                                During the Spring 2020 semester I took Heat Transfer where I was assinged a semester long project to cook a hot dog using what we learned in class.
                                                Throughout the year, my group and I worked to developed a radial finite differencing model of heat transfer in a hot dog. The end goal was to 
                                                use our model and cook a hotdog. Our early model assumed that the temperature gradients in the hotdog were negligable at a given time which allowed us to apply the lumped capacitence model.
                                                However, when we calculated the convective and radiative heat transfer coefficients the Biot number was above 0.1 which disallowed us from using lumped capacitence. Therefore,
                                                we turned to an analytical solution, which given an initial temperature could solve for the temperature of the hot dog at each time step. To use this model the team derived equations
                                                to model the temperature at the center, interior and exterior node. Then the equations were put into MATLAB to find the final cook time given our initial conditions. Our model predicted
                                                the hot dog would take 353 seconds to cook, and the real world hot dog took 402 seconds to cook under the same conditions as our model. While the real hot dog took slightly
                                                longer to cook conditions in the test did not exactly match the model. Despite that, when the data was plotted the only difference was the initial temperature of the hot dog and
                                                the temperature of the hot dog followed the same trend as our model.  
                                            </h5>
                                                    
                                            <h5>
                                                Languages: MATLAB &nbsp;&nbsp; <br/>
                                                Code:   <a 
                                                            href = "https://github.com/ejmeitz/Radial-Finite-Differencing-Model--Cooking-a-HotDog"
                                                            className = "gitHub social" 
                                                            target = "_blank"
                                                            rel="noopener noreferrer">
                                                            <FontAwesomeIcon icon = {faGithub} size = "1x" />
                                                        </a>
                                            </h5>
                                    </div>
                                </Card.Body>
                        </Col>
                        </Row>
                    </Card>
                </Container>



                </ProjStyles>
           
        </>
        )
    }
    
}