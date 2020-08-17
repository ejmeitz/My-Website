import React, {Component} from 'react';
import {Carousel, Card, Col, Row, Container} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGithub } from '@fortawesome/free-brands-svg-icons';
import styled from 'styled-components';



const Proj2Styles = styled.div `


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
    aspectRatio: 10/8;
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






export default class website extends Component {



    render(){
        return (
    <>
      
        <Proj2Styles>
                    <Container fluid>
                    <Card>
                        <Row >
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
                                    <Card.Title className = "projectName" style={{margin:"10px", fontSize:"2em"}}><strong>Personal Website</strong></Card.Title>
                                    <div className = "card-text"> {/*don't use Card.Text cause its harder to customize*/}

                                        <h5>
                                            This website is a personal project which unites my love of art and coding. To create the website I deployed a MERN stack to heroku.
                                            Specifically, my website employs mongoDB, Express, React, NodeJS and several smaller packages such as axios and react-boostrap to run. Each of these components
                                            plays a unique role. For example, mongoDB stores data like the time at which someone views my website and React allows me to design a beautiful front end from HTML and
                                            custom objects to streamline development.
                                        </h5> 
                                                 
                                        <h5>
                                            Languages & Packages: JavaScript, CSS, HTML, MongoDB, ExpressJS, ReactJS, NodeJS, Bootstrap, and Styled Components &nbsp;&nbsp; <br/>
                                            Code: &nbsp;&nbsp; <a 
                                                                href = "https://github.com/ejmeitz/GUI"
                                                                className = "gitHub social" 
                                                                target = "_blank"
                                                                rel="noopener noreferrer">
                                                                <FontAwesomeIcon icon = {faGithub} size = "2x" />
                                                                </a>
                                        </h5>
                                    </div>
                                </Card.Body>
                        </Col>
                        </Row>
                    </Card>
                </Container>
                </Proj2Styles>
           
        </>
        )
    }
    
    
}