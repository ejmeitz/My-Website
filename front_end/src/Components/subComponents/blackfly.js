import React, {Component} from 'react';
import blackfly from "../../resources/qpli.jpeg";
import {Carousel, Card, Container, Row, Col} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGithub } from '@fortawesome/free-brands-svg-icons';
import styled from 'styled-components';


const BlackflyStyles = styled.div `

*{
    font-family: 'Josefin Sans', sans-serif;

}
.container-fluid{
    margin: 70px auto 20px auto;
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
    box-shadow: 2px 2px 2px 2px grey;
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
    font-size:1.5em;
}


@media screen and (max-width: 1100px) {
    p{
        font-size:1.05em;
    }
}
@media screen and (max-width: 800px) {
    p{
        font-size:0.9em;
    }
    .projectName{
        font-size:1.5em;
    }
}

`;

export default class Blackfly extends Component {

    render(){
        return (
    <>
        <BlackflyStyles>
            <Container fluid>
                    <Card>
                        <div className = "grid">
                                    <Carousel>
                                        <Carousel.Item>
                                            <img
                                            className="d-block"
                                            src= {blackfly}
                                            alt="First slide"
                                            />
                                            <Carousel.Caption style = {{textShadow: "2px 2px black"}}>
                                                QPLI camera imaging a sample in the bi-axial testing machine
                                            </Carousel.Caption>
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img
                                            className="d-block"
                                            src={blackfly}
                                            alt="Second slide"
                                            />
                                            <Carousel.Caption>
                                            
                                            </Carousel.Caption>
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img
                                            className="d-block"
                                            src={blackfly}
                                            alt="Third slide"
                                            />
                                            <Carousel.Caption>
                                            
                                            </Carousel.Caption>
                                        </Carousel.Item>
                                    </Carousel>                     
                                <Card.Body>
                                    <Card.Title className = "projectName" style={{margin:"10px", fontSize:"2em"}}><strong>Blackfly Polarization Camera UI:</strong></Card.Title>
                                    <div className = "card-text"> {/*don't use Card.Text cause its harder to customize*/}

                                            <p>
                                                   While working as an undergraduate research assistant, I 
                                                    developed a user interface (UI) for use in reflectance and transmission mode quantitative polarized light imaging (QPLI). QPLI is an imaging technique that uses polarized light
                                                    to image birefringent materials. Birefringent materials, such as certain human tissues, reflect and transmit polarized light in a predictable manner. Therefore, by exposing
                                                    ligament samples to polarized light the alligmnet of the collagen fibers within that ligament can be determined. This information can then be used to deuce the failure mechanism of the ligament. 
                                                    The UI interfaced with a commercial camera and allowed the operator to remotely control the camera and obtain specially
                                                    filtered images in real time. The UI and camera will be used to study stress and failure in the ulnar collateral ligament (UCL) which 
                                                    when torn requires Tommy John surgery to repair. By studying the failure mechanism with QPLI we may be able to prevent the need for Tommy 
                                                    John surgery.
                                            </p>
                                                 
                                        <p>
                                            Languages: C++ &nbsp;&nbsp; <br/>
                                            Code: <a 
                                                    href = "https://github.com/ejmeitz/GUI"
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
                </BlackflyStyles>
           
        </>
        )
    }
    
    
}