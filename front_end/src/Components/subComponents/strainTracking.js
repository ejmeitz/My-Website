import React, {Component} from 'react';
import styled from 'styled-components';

import {Carousel, Card, Container, Row, Col} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGithub } from '@fortawesome/free-brands-svg-icons';

const StrainStyles = styled.div `

.container-fluid{
    margin: 70px auto 20px auto;
}
.card {
    border:none;
    width:95%;
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
}

`;

export default class Strain extends Component {
    render(){
        return (
            <>
            <StrainStyles>
            <Container fluid>
                    <Card>
                        <Row>
                        <Col xs={4} style = {{margin:"auto"}}>
                                    <Carousel>

                                        <Carousel.Item>
                                            <img
                                            className="d-block w-100"
                                            src = "https://via.placeholder.com/540x675.png?text=Temp"
                                            alt="First slide"
                                            />
                                            <Carousel.Caption style = {{textShadow: "2px 2px black"}}>
                                            </Carousel.Caption>
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img
                                            className="d-block w-100"
                                               src = "https://via.placeholder.com/540x675.png?text=Temp"
                                            alt="Second slide"
                                            />
                                            <Carousel.Caption>
                                            
                                            </Carousel.Caption>
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img
                                            className="d-block w-100"
                                               src = "https://via.placeholder.com/540x675.png?text=Temp"
                                            alt="Third slide"
                                            />
                                            <Carousel.Caption>
                                            
                                            </Carousel.Caption>
                                        </Carousel.Item>
                                    </Carousel>
                        </Col>
                        <Col style = {{margin:"auto"}}>
                       
                                <Card.Body style = {{height:"70vh"}}>
                                    <Card.Title className = "projectName" style={{margin:"10px", fontSize:"2em"}}><strong>Strain Tracking with MATLAB Image Processing</strong></Card.Title>
                                    <div className = "card-text"> 

                                            <h5>
                                                WIP
                                            </h5>
                                                 
                                        <h5>
                                            Languages: C++ &nbsp;&nbsp; <br/>
                                            Code: <a 
                                                    href = "https://github.com/ejmeitz/StrainApproximationandVisualization"
                                                    className = "gitHub social" 
                                                    target = "_blank"
                                                    rel="noopener noreferrer">
                                                    <FontAwesomeIcon className = "fa-lg" icon = {faGithub}/>
                                                    </a>
                                        </h5>
                                            
                                   
                                        <h5>
                                            <Card.Link href = "https://lakelab.wustl.edu/resources/" target = "_blank" rel="noopener noreferrer">
                                            The Lake Lab    
                                            </Card.Link>
                                        </h5>
                                    </div>
                                </Card.Body>
                        </Col>
                        </Row>
                    </Card>
                </Container>
            </StrainStyles>
     </>
        )
    }
}