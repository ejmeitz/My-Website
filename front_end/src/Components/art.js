import React, {Component} from 'react';
import styled from 'styled-components';
import {Carousel} from 'react-bootstrap';
import image1 from "../resources/elephant.png"
import dog from "../resources/dog.png";
import jaguar from "../resources/Jaguar.png";
import beluga from "../resources/beluga.png";
import cathedral from "../resources/cathedral.png";
import fish from "../resources/fish.png";
import grey_elephant from "../resources/elephant_grey.png";
import wge from "../resources/walrus.png";

const ArtStyles = styled.div `
   *{
       color:black;
       
   }

   .carousel{
      overflow:hidden;
    height: 80vh;
    width: 80vw;
    margin: 6vw auto 4vw auto;
    background-color:rgb(63,168,176,0.6);
   
   
  
   }

.carousel-indicators{
    margin:auto;
   }

li{
    background-color:black;
   
}
   .carousel-item{
       margin:auto;
       padding:auto;
    height: 92vh;
    object-fit:scale-down
  
}

.carousel-item img{
    
   overflow:hidden;
    max-height: 75vh;
    max-width:50vw;
    margin:20px auto 20px auto;
   
    object-fit:scale-down;
    box-shadow: 2px 2px 2px grey;
   
    
}


.carousel-control-next, .carousel-control-prev{
    width:5vw;
    background:rgb(63,168,176,0.8);
    

    &:hover {
        opacity:1;
      }
  
}




`;


export default class art extends Component {


    render() {
    
        return (
            <ArtStyles>
                <Carousel>
                    

                  
                    <Carousel.Item style = {this.fixStuff}>
              
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
                        alt="Second slide"
                        />

                    </Carousel.Item>
                    <Carousel.Item>
                 
                        <img
                        className="d-block  max-auto"
                        src= {jaguar}
                        alt="Third slide"
                        />

                      
                    </Carousel.Item>
                    <Carousel.Item>
                 
                        <img
                        className="d-block  max-auto"
                        src= {beluga}
                        alt="Third slide"
                        />

                     
            
                    </Carousel.Item>
                    <Carousel.Item>
                        
                        <img
                        className="d-block  max-auto"
                        src= {cathedral}
                        alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        
                        <img
                        className="d-block  max-auto"
                        src= {fish}
                        alt="Third slide"
                        />

                
                    </Carousel.Item>
                    <Carousel.Item>
                        
                        <img
                        className="d-block  max-auto"
                        src= {grey_elephant}
                        alt="Third slide"
                        />

                
                    </Carousel.Item>
                    <Carousel.Item>
                        
                        <img
                        className="d-block  max-auto"
                        src= {wge}
                        alt="Third slide"
                        />

                
                    </Carousel.Item>
                </Carousel>
                
            </ArtStyles>
        );
    }
    
    
    

    
    }