import React, {Component} from 'react';
import styled from 'styled-components';
import {Carousel, Container} from 'react-bootstrap';
import image1 from "../resources/elephant.png"
import dog from "../resources/dog.png";
import jaguar from "../resources/Jaguar.png";
import beluga from "../resources/beluga.png";
import cathedral from "../resources/cathedral.png";
import fish from "../resources/fish.png";
import grey_elephant from "../resources/elephant_grey.png";
import wge from "../resources/walrus.png";

const ArtStyles = styled.div `
 

   .carousel{
      overflow:hidden;
        height: 80vh;
        width: 80vw;
        margin: 6vw auto 4vw auto;
        background-color:rgba( 140, 194, 255,0.6);
   }

.carousel-indicators{
    margin:auto;
   }

li{
    background-color:#6b6b6b;
}

.carousel-item{
    margin:auto;
    padding:auto;
   
    object-fit:scale-down
  
}

.carousel-item img{
    
   overflow:hidden;
    max-height: 75vh;
    max-width:50vw;
    margin:auto auto auto auto;
   
    object-fit:scale-down;
    box-shadow: 2px 2px 2px grey;
   
    
}

.carousel-control-next, .carousel-control-prev{
    width:5vw;
    background-color:rgba( 140, 194, 255,0.8);;
    
    &:hover {
        opacity:1;
      }
}

`;


export default class art extends Component {


    render() {
    
        return (
            <ArtStyles>
                <Container fluid>
                <Carousel>
                    <Carousel.Item>              
                        <img
                        className = "d-block  max-auto"
                        src= {image1}
                        alt="Watercolor Elephant"                
                        />
                    </Carousel.Item> 
                    
                    <Carousel.Item>
                        <img
                        className="d-block  max-auto"
                        src={dog}
                        alt="Watercolor dog"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block  max-auto"
                        src= {jaguar}
                        alt="Colored pencil jaguar"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block  max-auto"
                        src= {beluga}
                        alt="Beluga whale drawing"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block  max-auto"
                        src= {cathedral}
                        alt="Cathedral sketch"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block  max-auto"
                        src= {fish}
                        alt="Watercolor beta fish"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block  max-auto"
                        src= {grey_elephant}
                        alt="Elephant drawing"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block  max-auto"
                        src= {wge}
                        alt="Walrus drawing"
                        />
                    </Carousel.Item>
                </Carousel>
            </Container>
            </ArtStyles>
        );
    }
    
    
    

    
    }