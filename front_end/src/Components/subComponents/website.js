import React, {Component} from 'react';
import {Carousel, Card, Container} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGithub } from '@fortawesome/free-brands-svg-icons';
import styled from 'styled-components';



const Proj2Styles = styled.div `

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
        font-size:1.5em;
    }
    img{
        margin:auto;
        max-width:80vw;
        height:auto;
        object-fit:scale-down;
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
                        <div className = "grid" >
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
                                    <Card.Title className = "projectName" style={{margin:"10px 0px"}}><strong>Personal Website</strong></Card.Title>
                                    <div className = "card-text"> 
                                        <p>
                                            This website is a personal project which unites my love of art and coding. To create the website I deployed a MERN stack to heroku.
                                            Specifically, my website employs mongoDB, Express, React, NodeJS and several smaller packages such as axios and react-boostrap to run. Each of these components
                                            plays a unique role. For example, mongoDB stores data like the time at which someone views my website and React allows me to design a beautiful front end from HTML and
                                            custom objects to streamline development.
                                        </p> 
                                                 
                                        <p>
                                            Languages & Packages: JavaScript, CSS, HTML, MongoDB, ExpressJS, ReactJS, NodeJS, Bootstrap, and Styled Components &nbsp;&nbsp; <br/>
                                            Code: &nbsp;&nbsp; <a 
                                                                href = "https://github.com/ejmeitz/My-Website"
                                                                className = "gitHub social" 
                                                                target = "_blank"
                                                                rel="noopener noreferrer">
                                                                <FontAwesomeIcon icon = {faGithub} size = "2x" />
                                                                </a>
                                        </p>
                                    </div>
                                </Card.Body>
                    </div>
                    </Card>
                </Container>
                </Proj2Styles>
           
        </>
        )
    }
    
    
}