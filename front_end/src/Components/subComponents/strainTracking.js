import React, {Component} from 'react';
import styled from 'styled-components';

import {Carousel, Card, Container, Row, Col} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGithub } from '@fortawesome/free-brands-svg-icons';

const StrainStyles = styled.div `

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

export default class Strain extends Component {
    render(){
        return (
            <>
            <StrainStyles>
            <Container fluid>
                    <Card>
                    <div className = "grid">
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
                                <Card.Body>
                                    <Card.Title className = "projectName" style={{margin:"10px 0px"}}><strong>Strain Tracking with MATLAB Image Processing</strong></Card.Title>
                                    <div className = "card-text"> 

                                        <p>
                                            WIP
                                        </p>        
                                        <p>
                                            Languages: C++ &nbsp;&nbsp; <br/>
                                            Code: <a 
                                                    href = "https://github.com/ejmeitz/StrainApproximationandVisualization"
                                                    className = "gitHub social" 
                                                    target = "_blank"
                                                    rel="noopener noreferrer">
                                                    <FontAwesomeIcon className = "fa-lg" icon = {faGithub}/>
                                                    </a>
                                        </p>
                                        <p>
                                            <Card.Link href = "https://lakelab.wustl.edu/resources/" target = "_blank" rel="noopener noreferrer">
                                            The Lake Lab    
                                            </Card.Link>
                                        </p>
                                    </div>
                                </Card.Body>
                       </div>
                    </Card>
                </Container>
            </StrainStyles>
     </>
        )
    }
}