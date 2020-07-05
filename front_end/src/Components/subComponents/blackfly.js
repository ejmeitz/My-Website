import React, {Component} from 'react';
import blackfly from "../../resources/qpli.jpeg";
import {Carousel} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGithub } from '@fortawesome/free-brands-svg-icons';
import styled from 'styled-components';


const BlackflyStyles = styled.div `

*{
    font-family: 'Josefin Sans', sans-serif;
}


.grid {
    z-index:10;
    display:grid;

    grid-template-columns: 40% 40%;
    grid-template-rows: 96vh;
    margin: 0px auto 10px auto;

    grid-auto-flow:rows;

    font-family: 'Josefin Sans', sans-serif;
    justify-items:center;
    justify-content:center;
    align-items:center;
}

.element{
    grid-column: 1 / span 2;

    display:grid;
    grid-template-columns: 30% 70%;
    
    grid-gap: 10px;
    
    justify-self:center;
    margin:auto;
    font-family: 'Josefin Sans', sans-serif;
    

}
.text {
    box-shadow: 2px 2px 2px grey;
}

.carousel, #a {
    grid-column: 1;
    
    margin:auto;
    
    height:60vh;  
    max-height:60vh;

    

}
.carousel-item,
.carousel-inner,
.carousel-inner img {
    height:60vh;
    min-width:225px;
}

.text, #a{
    grid-column: 2;
  
   
    height:60vh;
    margin: auto auto auto 10px;
    padding:10px;
  
    background-color:rgb(63,168,176,0.6);
    
}
.carousel{
    box-shadow: 2px 2px 2px grey;
}

.Info{
    font-family: 'Lato', sans-serif;
}
a{
    text-decoration:none;
    color:#5c51fc;
}

`;






export default class Blackfly extends Component {




    render(){
        return (
    <>
      
        <BlackflyStyles>
            <div className = "bg">
                    <div className = "test">
                        <div className = "grid">
                            <div className = "element a">
                                <div className = "carousel" src = "" alt = "camera">
                                    <Carousel>
                                        <Carousel.Item>
                                            <img
                                            className="d-block w-100"
                                            src= {blackfly}
                                            alt="First slide"
                                            />
                                            <Carousel.Caption>
                                                QPLI camera imaging a sample in the bi-axial testing machine
                                            </Carousel.Caption>
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img
                                            className="d-block w-100"
                                            src={blackfly}
                                            alt="Second slide"
                                            />
                                            <Carousel.Caption>
                                            
                                            </Carousel.Caption>
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img
                                            className="d-block w-100"
                                            src={blackfly}
                                            alt="Third slide"
                                            />
                                            <Carousel.Caption>
                                            
                                            </Carousel.Caption>
                                        </Carousel.Item>
                                    </Carousel>
                                </div>
                            <div className = "text" >
                                <h2 className = "projectName">
                                    Blackfly Polarization Camera GUI
                                </h2>
                                <div className = "Info">
                                    <h3>About: <h5>While working as an undergraduate research assistant, I 
                                        developed a GUI for use in reflectance and transmission mode quantitative polarized light imaging (QPLI). QPLI is an imaging technique that uses polarized light
                                        to image birefringent materials. Birefringent materials, like many human tissues, reflect and transmit polarized light in a predictable manner. Therefore, by exposing
                                        ligament samples to polarized light the alligmnet of the collagen fibers can be determined. This information can then be used to deuce the failure mechanism of the ligament. 
                                        The GUI interfaced with a commercial camera and allowed the operator to remotely control the camera and obtain specially
                                        filtered images in real time. The GUI and camera will be used to study stress and failure in the ulnar collateral ligament (UCL) which often
                                        leads to Tommy John surgery in baseball players and powerlifters.</h5> </h3>       
                                    <h3>Languages: C++ &nbsp;&nbsp;<a 
                                        href = "https://github.com/ejmeitz/GUI"
                                        className = "gitHub social" 
                                        target = "_blank"
                                        rel="noopener noreferrer">
                                        <FontAwesomeIcon icon = {faGithub} size = "1x" />
                                        </a></h3>
                                    <p>Read More on the Lake lab <a href = "https://lakelab.wustl.edu/resources/"
                                        target = "_blank"
                                        rel="noopener noreferrer">
                                        website</a>  
                                    </p>  
                                </div>                                    
                             </div>
                        </div>
                    </div> 
                    </div>
                    </div>
                </BlackflyStyles>
           
        </>
        )
    }
    
    
}