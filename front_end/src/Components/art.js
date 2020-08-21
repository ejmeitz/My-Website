import React, {Component} from 'react';
import styled from 'styled-components';
import {Carousel, Container} from 'react-bootstrap';


import color_elephant from "../resources/elephant.png"
import dog from "../resources/dog.png";
import jaguar from "../resources/Jaguar.png";
import beluga from "../resources/beluga.png";
import cathedral from "../resources/cathedral.png";
import fish from "../resources/fish.png";
import grey_elephant from "../resources/elephant_grey.png";
import wge from "../resources/walrus.png";

const ArtStyles = styled.div `
 
    .container-fluid{
        height: calc(100vh - 50px);
        width:100%;
        margin: 70px auto 0px auto;
        padding:0;
        z-index:0;
    }
   .carousel{
        overflow:hidden;
        height: 85vh;
        width: 80vw;
        margin: auto;
        background-color:rgba( 140, 194, 255,0.6);
   }

   .carousel-indicators {
    position: absolute;
    left: 0;
    top: 80vh;
    height:5vh;

    margin:auto;
}

.carousel-inner{
    margin:auto;
    height:80vh;
}
.carousel-item{
    margin:auto;
    height:80vh;
}


img{
    max-height: 95%;
    max-width: 65vw;
    box-shadow: 2px 2px 2px grey;  
    margin: 10px auto 10px auto;
    align-self:center;
}



li{
    background-color:#6b6b6b;
}

.carousel-control-next, .carousel-control-prev{
    width:5vw;
    background-color:rgba( 140, 194, 255,0.9);;
    
    &:hover {
        opacity:1;
      }
}

@media screen and (max-width: 1200px) {
    .beluga{
        margin-top:30px;
    }
    .bw_elephant{
        margin-top:75px;
    }
}
@media screen and (max-width: 1050px) {
    .beluga{
        margin-top:55px;
    }
    .bw_elephant{
        margin-top:90px;
    }
}


@media screen and (max-width: 950px) {
    .carousel{
        position:relative;
        overflow:hidden;
        height: 70vh;
        width: 80vw;
        margin:auto;
        top:10vh;
        background-color:rgba( 140, 194, 255,0.6);

   }

   .carousel-indicators {
    position: absolute;
    left: 0;
    top: 65vh;
    height:5vh;

    margin:auto;
}

.carousel-inner{
    margin:auto;
    height:70vh;
}
.carousel-item{
    margin:auto;
    height:70vh;
}


img{
    max-height: 90%;
    max-width: 65vw;
    box-shadow: 2px 2px 2px grey;  
    margin: 10px auto 10px auto;
    align-self:center;
}
.beluga{
    margin-top: 40px;
}
.bw_elephant{
    margin-top:60px;
}
}

@media screen and (max-width: 770px) {
    .carousel{
        position:relative;
        overflow:hidden;
        height: 50vh;
        width: 90vw;
        margin:auto;
        top:15vh;
        background-color:rgba( 140, 194, 255,0.6);
   }

   .carousel-indicators {
    position: absolute;
    left: 0;
    top: 45vh;
    height:5vh;
    width:90vw;
    margin:auto;
}

.carousel-inner{
    margin:auto;
    height:50vh;
}
.carousel-item{
    margin:auto;
    height:50vh;
}


img{
    max-height: 80%;
    max-width: 75vw;
    box-shadow: 2px 2px 2px grey;  
    align-self:center;
    margin: 20px auto 10px auto;
}
.cathedral{
    margin-top:40px;
}
.fish{
    margin-top:30px;
}
.walrus{
    margin-top:30px;
}

}


}

@media screen and (max-width: 450px) {
    .carousel{
        position:relative;
        overflow:hidden;
        height: 55vh;
        width: 90vw;
        margin:auto;
        top:15vh;
        background-color:rgba( 140, 194, 255,0.6);
   }

   .carousel-indicators {
    position: absolute;
    left: 0;
    top: 45vh;
    height:5vh;
    max-width:80vw;
    margin:auto;
}

.carousel-inner{
    margin:auto;
    height:50vh;
}
.carousel-item{
    margin:auto;
    height:50vh;
}


img{
    max-height: 85%;
    max-width: 75vw;
    box-shadow: 2px 2px 2px grey;  
    align-self:center;
    margin: 10px auto 10px auto;
}
.c_elephant, .dog, .jaguar{
    margin-top: 50px;
}
.cathedral{
    margin-top:30px;
}
.beluga{
    margin-top: 85px;
}
.bw_elephant{
    margin-top:105px;
}
.walrus, .fish{
    margin-top:10px;
}

}


}

`;


export default class art extends Component {


    render() {
    
        return (
            <ArtStyles>
                <Container fluid>
                <Carousel >
                        <Carousel.Item>              
                            <img
                            className ="d-block img-responsive c_elephant"
                            src= {color_elephant}
                            alt="Watercolor Elephant"                
                            />
                        </Carousel.Item> 
                        
                        <Carousel.Item>
                            <img
                            className ="d-block dog"
                            src={dog}
                            alt="Watercolor dog"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img 
                            className ="d-block jaguar"
                            src= {jaguar}
                            alt="Colored pencil jaguar"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img 
                            className ="d-block beluga"
                            src= {beluga}
                            alt="Beluga whale drawing"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className ="d-block cathedral"
                            src= {cathedral}
                            alt="Cathedral sketch"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className ="d-block fish"
                            src= {fish}
                            alt="Watercolor beta fish"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className ="d-block bw_elephant"
                            src= {grey_elephant}
                            alt="Elephant drawing"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className ="d-block walrus"
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